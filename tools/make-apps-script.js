// Writes build/apps-script/Code.gs: a paste-ready Google Apps Script that emails you each day's words.
// It also writes build/email-samples/*.html for previewing the email.
// Usage: node tools/make-apps-script.js   (run export.js first)
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const { siteUrl, days } = require(path.join(root, "build", "schedule.json"));
const template = fs.readFileSync(path.join(__dirname, "email-template.js"), "utf8")
  .replace(/\nif \(typeof module[^\n]*\n?$/, "\n");

const code = `/**
 * Daily Hanzi: emails you the day's Chinese words every morning.
 * Generated from the Daily Hanzi schedule; do not edit the data by hand.
 *
 * One-time setup:
 *   1. Project Settings (gear icon): set "Time zone" to yours.
 *   2. Select the function "install" in the toolbar and click Run. Approve "Send email as you".
 *   3. Optional: run "sendTestWeekday" to get a sample email straight away.
 * To stop: run "uninstall".
 */

const SITE_URL = ${JSON.stringify(siteUrl)};
const SEND_HOUR = 7; // 7–8 am in the project's time zone

function sendToday() {
  const key = Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd");
  sendFor_(key);
}

function install() {
  uninstall();
  ScriptApp.newTrigger("sendToday").timeBased().everyDays(1).atHour(SEND_HOUR).nearMinute(0).create();
  Logger.log("Daily Hanzi will email " + Session.getEffectiveUser().getEmail() + " every day between " +
    SEND_HOUR + " and " + (SEND_HOUR + 1) + " am (" + Session.getScriptTimeZone() + "), " +
    DAYS[0].date + " to " + DAYS[DAYS.length - 1].date + ".");
}

function uninstall() {
  ScriptApp.getProjectTriggers()
    .filter(t => t.getHandlerFunction() === "sendToday")
    .forEach(t => ScriptApp.deleteTrigger(t));
  Logger.log("Daily emails stopped.");
}

function sendTestWeekday() { sendFor_("2026-11-02", true); }
function sendTestSaturday() { sendFor_("2026-11-07", true); }
function sendTestSunday() { sendFor_("2026-11-08", true); }

function sendFor_(key, isTest) {
  const day = DAYS.find(d => d.date === key);
  if (!day) { Logger.log("No Daily Hanzi entry for " + key + "; nothing sent."); return; }
  const mail = buildEmail(day, SITE_URL);
  // MailApp only needs permission to send email; the Gmail service would ask for full access to your mailbox.
  MailApp.sendEmail(Session.getEffectiveUser().getEmail(), (isTest ? "[Test] " : "") + mail.subject, mail.text,
    { htmlBody: mail.html, name: "Daily Hanzi" });
  Logger.log("Sent: " + mail.subject);
}

// ---------- Email layout ----------
${template}
// ---------- Schedule data (${days.length} days) ----------
const DAYS = ${JSON.stringify(days)};
`;

fs.mkdirSync(path.join(root, "build", "apps-script"), { recursive: true });
fs.writeFileSync(path.join(root, "build", "apps-script", "Code.gs"), code);

// Samples for checking the layout in a browser.
const { buildEmail } = require("./email-template.js");
fs.mkdirSync(path.join(root, "build", "email-samples"), { recursive: true });
for (const [name, date] of [["weekday", "2026-11-02"], ["saturday", "2026-11-07"], ["sunday", "2026-11-08"], ["festival", "2027-02-05"], ["preview", "2026-11-01"]]) {
  const mail = buildEmail(days.find(d => d.date === date), siteUrl);
  fs.writeFileSync(path.join(root, "build", "email-samples", name + ".html"),
    mail.html.replace("<body", `<body data-subject="${mail.subject.replace(/"/g, "&quot;")}"`));
  fs.writeFileSync(path.join(root, "build", "email-samples", name + ".txt"), mail.subject + "\n\n" + mail.text);
}
console.log(`Code.gs: ${(Buffer.byteLength(code) / 1024).toFixed(0)} KB; samples in build/email-samples/`);
