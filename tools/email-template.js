// Builds the daily email for one schedule day. Plain JavaScript with no Node or Apps Script APIs:
// make-apps-script.js copies this file into Code.gs, and make-email-samples.js runs it in Node.
// Layout uses tables and inline styles so it renders in Gmail and Outlook.

var EMAIL_COLORS = { red: "#b5352a", ink: "#1f1d1b", muted: "#6d6862", rule: "#e4dfd8", paper: "#fbfaf7",
  mandarin: "#2d4f8a", canto: "#1f6b55", n: "#b5352a", v: "#2d4f8a", o: "#8a6a12" };
var EMAIL_HAN = "'Noto Serif TC','PMingLiU','Songti TC','Noto Serif SC','SimSun',serif";
var EMAIL_TEXT = "Georgia,'Times New Roman',serif";
var EMAIL_WK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var EMAIL_WK_ZH = "日一二三四五六";
var EMAIL_MON = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function emailEsc_(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function emailShort_(iso) { var p = iso.split("-"); return EMAIL_MON[+p[1] - 1] + " " + +p[2]; }
function emailRange_(covers) {
  var a = emailShort_(covers[0]), b = emailShort_(covers[covers.length - 1]);
  return a.slice(0, 3) === b.slice(0, 3) ? a + "–" + b.slice(4) : a + "–" + b;
}
function emailClsColor_(w) { return EMAIL_COLORS[w.cls === "n" || w.cls === "v" ? w.cls : "o"]; }

function emailWordRow_(w, big) {
  var C = EMAIL_COLORS, size = big ? 40 : 28;
  var chars = '<span style="font-family:' + EMAIL_HAN + ';font-size:' + size + 'px;font-weight:700;color:' + C.ink + ';line-height:1.15">' + emailEsc_(w.tc) + "</span>" +
    (w.sc !== w.tc ? '<br><span style="font-family:' + EMAIL_HAN + ';font-size:' + Math.round(size * .55) + 'px;color:' + C.muted + '">简 ' + emailEsc_(w.sc) + "</span>" : "");
  var note = w.note ? '<div style="margin-top:4px;font-size:13px;color:' + C.muted + '">In spoken Cantonese: <b style="color:' + C.canto + ';font-family:' + EMAIL_HAN + '">' + emailEsc_(w.note) + "</b></div>" : "";
  return '<tr><td style="padding:12px 0;border-top:1px solid ' + C.rule + ';vertical-align:top;width:' + (big ? 150 : 120) + 'px">' + chars + "</td>" +
    '<td style="padding:12px 0 12px 12px;border-top:1px solid ' + C.rule + ';vertical-align:top;font-family:' + EMAIL_TEXT + ';font-size:15px;color:' + C.ink + '">' +
    '<span style="display:inline-block;font-family:Arial,sans-serif;font-size:10px;letter-spacing:1px;text-transform:uppercase;font-weight:bold;color:' + emailClsColor_(w) + ';border:1px solid ' + emailClsColor_(w) + ';border-radius:3px;padding:1px 6px">' + emailEsc_(w.clsName) + "</span> " +
    '<b style="font-size:' + (big ? 17 : 15) + 'px">' + emailEsc_(w.en) + "</b>" +
    '<div style="margin-top:4px"><span style="color:' + C.mandarin + '">普 ' + emailEsc_(w.pinyin) + '</span> &nbsp;·&nbsp; <span style="color:' + C.canto + ';font-family:Consolas,monospace;font-size:14px">粵 ' + emailEsc_(w.jyutping) + "</span></div>" +
    note + "</td></tr>";
}

function buildEmail(d, siteUrl) {
  var C = EMAIL_COLORS;
  var p = d.date.split("-"), day = +p[2], mon = EMAIL_MON[+p[1] - 1];
  var dateLine = EMAIL_WK[d.weekday] + " " + day + " " + mon + " " + p[0];
  var subject, heading, intro = "", rows = "", text;
  var wordText = function (w) {
    return (w.sc === w.tc ? w.tc : w.tc + " (" + w.sc + ")") + " · " + w.clsName.toLowerCase() + " · " + w.pinyin + " · " + w.jyutping + " · " + w.en +
      (w.note ? "\n   In spoken Cantonese: " + w.note : "");
  };

  if (d.type === "learn") {
    subject = "Daily Hanzi · " + EMAIL_WK[d.weekday].slice(0, 3) + " " + day + " " + mon + " · " + d.words.map(function (w) { return w.tc; }).join(" ");
    heading = "Lesson " + d.lesson + " · " + emailEsc_(d.theme);
    if (d.forFestival) intro = "For " + emailEsc_(d.forFestival.name) + " (" + emailShort_(d.forFestival.date) + ")";
    rows = d.words.map(function (w) { return emailWordRow_(w, true); }).join("");
    text = d.words.map(wordText).join("\n");
  } else if (d.type === "test") {
    subject = "Daily Hanzi · " + EMAIL_WK[d.weekday].slice(0, 3) + " " + day + " " + mon + " · Self-test (" + emailRange_(d.covers) + ")";
    heading = "自測 Self-test · " + emailRange_(d.covers);
    intro = "Say each word in Mandarin and Cantonese and give its meaning. Answers are further down.";
    rows = '<tr><td colspan="2" style="padding:12px 0;border-top:1px solid ' + C.rule + ';font-family:' + EMAIL_HAN + ';font-size:26px;font-weight:700;line-height:1.9;color:' + C.ink + '">' +
      d.words.map(function (w) { return emailEsc_(w.tc); }).join("&nbsp;&nbsp;&nbsp; ") + "</td></tr>" +
      '<tr><td colspan="2" style="padding:28px 0 4px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:' + C.muted + '">Answers</td></tr>' +
      d.words.map(function (w) { return emailWordRow_(w, false); }).join("");
    text = d.words.map(function (w) { return w.tc; }).join("  ") + "\n\nAnswers:\n" + d.words.map(wordText).join("\n");
  } else {
    var isPreview = d.type === "preview";
    subject = "Daily Hanzi · " + EMAIL_WK[d.weekday].slice(0, 3) + " " + day + " " + mon + " · " + (isPreview ? "Preview" : "Review") + " (" + emailRange_(d.covers) + ")";
    heading = (isPreview ? "預習 Preview · " : "複習 Review · ") + emailRange_(d.covers);
    intro = isPreview ? "Welcome to Daily Hanzi. Here is a first look at this week's 15 words." : "No new words today. Read through this week's 15 words and say each one aloud.";
    d.covers.forEach(function (c) {
      var t = new Date(c + "T12:00:00Z");
      rows += '<tr><td colspan="2" style="padding:18px 0 2px;font-family:Arial,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;color:' + C.muted + '">' + EMAIL_WK[t.getUTCDay()] + " " + emailShort_(c) + "</td></tr>";
      rows += d.words.filter(function (w) { return w.day === c; }).map(function (w) { return emailWordRow_(w, false); }).join("");
    });
    text = d.words.map(wordText).join("\n");
  }
  if (d.festival) subject += " · " + d.festival;

  var html =
    '<!doctype html><html><body style="margin:0;padding:0;background:' + C.paper + '">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:' + C.paper + '"><tr><td align="center" style="padding:20px 12px">' +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:580px;background:#ffffff;border-radius:6px;border:1px solid ' + C.rule + '">' +
    '<tr><td style="background:' + C.red + ';color:#ffffff;padding:18px 24px;border-radius:6px 6px 0 0;font-family:' + EMAIL_TEXT + '">' +
    '<div style="font-size:12px;letter-spacing:2px;text-transform:uppercase;opacity:.9">Daily Hanzi</div>' +
    '<div style="font-size:22px;font-weight:bold;margin-top:4px">' + dateLine + ' <span style="font-family:' + EMAIL_HAN + ';font-weight:normal">星期' + EMAIL_WK_ZH[d.weekday] + "</span></div>" +
    (d.festival ? '<div style="margin-top:6px;font-size:14px">' + emailEsc_(d.festival) + "</div>" : "") + "</td></tr>" +
    '<tr><td style="padding:18px 24px 8px;font-family:' + EMAIL_TEXT + ';color:' + C.ink + '">' +
    '<div style="font-size:15px;font-weight:bold">' + heading + "</div>" +
    (intro ? '<div style="font-size:14px;color:' + C.muted + ';margin-top:4px">' + intro + "</div>" : "") +
    '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:10px">' + rows + "</table>" +
    "</td></tr>" +
    '<tr><td align="center" style="padding:14px 24px 24px">' +
    '<a href="' + emailEsc_(d.url) + '" style="display:inline-block;background:' + C.red + ';color:#ffffff;text-decoration:none;font-family:Arial,sans-serif;font-size:15px;font-weight:bold;padding:12px 22px;border-radius:6px">Practise writing &amp; listen →</a>' +
    "</td></tr></table>" +
    '<div style="max-width:580px;font-family:Arial,sans-serif;font-size:11px;color:' + C.muted + ';padding:12px 8px;line-height:1.5">' +
    "Sent by your own Daily Hanzi script in Google Apps Script. To stop these emails, open the script and run <b>uninstall</b>, or delete its trigger." +
    "</div></td></tr></table></body></html>";

  text = "Daily Hanzi · " + dateLine + (d.festival ? " · " + d.festival : "") + "\n" +
    heading.replace(/&amp;/g, "&") + "\n" + (intro ? intro + "\n" : "") + "\n" + text +
    "\n\nPractise writing and listen: " + d.url + "\n";
  return { subject: subject, html: html, text: text };
}

if (typeof module !== "undefined") module.exports = { buildEmail: buildEmail };
