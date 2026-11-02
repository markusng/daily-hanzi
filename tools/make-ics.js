// Writes dist/daily-hanzi.ics: one all-day event per calendar day, for Google Calendar and Outlook.
// Usage: node tools/make-ics.js   (run export.js first)
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const { siteUrl, days } = require(path.join(root, "build", "schedule.json"));

const MON = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const compact = d => d.replace(/-/g, "");
const nextDay = d => { const t = new Date(d + "T12:00:00Z"); t.setUTCDate(t.getUTCDate() + 1); return t.toISOString().slice(0, 10); };
const short = d => { const [, m, day] = d.split("-").map(Number); return `${MON[m - 1]} ${day}`; };
const range = covers => {
  const [a, b] = [short(covers[0]), short(covers.at(-1))];
  return a.slice(0, 3) === b.slice(0, 3) ? `${a}–${b.slice(4)}` : `${a}–${b}`;
};

// RFC 5545 text escaping, and folding at 75 octets without splitting a UTF-8 character.
const esc = s => String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\r?\n/g, "\\n");
function fold(line) {
  const out = [];
  let cur = "", bytes = 0, limit = 75;
  for (const ch of line) {
    const b = Buffer.byteLength(ch);
    if (bytes + b > limit) { out.push(cur); cur = " "; bytes = 1; limit = 75; }
    cur += ch; bytes += b;
  }
  out.push(cur);
  return out.join("\r\n");
}

const wordLine = w => {
  const chars = w.sc === w.tc ? w.tc : `${w.tc} (${w.sc})`;
  return `${chars} · ${w.clsName.toLowerCase()} · ${w.pinyin} · ${w.jyutping} · ${w.en}` +
    (w.note ? `\n    In spoken Cantonese: ${w.note}` : "");
};

function event(d) {
  let summary, desc;
  if (d.type === "learn") {
    summary = `字 ${d.words.map(w => w.tc).join(" · ")}`;
    desc = `Lesson ${d.lesson} · ${d.theme}\n\n${d.words.map(wordLine).join("\n")}`;
    if (d.forFestival) desc += `\n\nFor ${d.forFestival.name} (${short(d.forFestival.date)})`;
  } else if (d.type === "review") {
    summary = `複習 Review · ${range(d.covers)}`;
    desc = `No new words today. Review this week's 15 words:\n\n` +
      d.covers.map(c => `${short(c)}\n` + d.words.filter(w => w.day === c).map(w => "  " + wordLine(w)).join("\n")).join("\n\n");
  } else if (d.type === "test") {
    summary = `自測 Self-test · ${range(d.covers)}`;
    desc = `Say each word in Mandarin and Cantonese and give its meaning, then check on the page.\n\n` +
      d.words.map(w => w.tc).join("  ");
  } else {
    summary = `預習 Preview · ${range(d.covers)}`;
    desc = `Welcome to Daily Hanzi. A first look at this week's 15 words:\n\n` + d.words.map(wordLine).join("\n");
  }
  if (d.festival) summary += ` · ${d.festival}`;
  desc += `\n\nPractise writing and listen: ${d.url}`;
  return [
    "BEGIN:VEVENT",
    `UID:d${compact(d.date)}@daily-hanzi`,
    `DTSTAMP:${stamp}`,
    `DTSTART;VALUE=DATE:${compact(d.date)}`,
    `DTEND;VALUE=DATE:${compact(nextDay(d.date))}`,
    `SUMMARY:${esc(summary)}`,
    `DESCRIPTION:${esc(desc)}`,
    `URL:${d.url}`,
    "TRANSP:TRANSPARENT",
    "END:VEVENT"
  ];
}

const stamp = new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d+/, "");
const lines = [
  "BEGIN:VCALENDAR",
  "VERSION:2.0",
  "PRODID:-//Daily Hanzi//Calendar 1.0//EN",
  "CALSCALE:GREGORIAN",
  "METHOD:PUBLISH",
  "X-WR-CALNAME:Daily Hanzi",
  `X-WR-CALDESC:${esc("Three Chinese words a day (Mandarin and Cantonese, simplified and traditional). " + siteUrl)}`,
  "REFRESH-INTERVAL;VALUE=DURATION:PT12H",
  "X-PUBLISHED-TTL:PT12H",
  ...days.flatMap(event),
  "END:VCALENDAR"
];
fs.mkdirSync(path.join(root, "dist"), { recursive: true });
fs.writeFileSync(path.join(root, "dist", "daily-hanzi.ics"), lines.map(fold).join("\r\n") + "\r\n");
console.log(`daily-hanzi.ics: ${days.length} events`);
