// Structural checks for dist/daily-hanzi.ics. Usage: node tools/check-ics.js
const fs = require("fs");
const path = require("path");

const text = fs.readFileSync(path.join(__dirname, "..", "dist", "daily-hanzi.ics"), "utf8");
const problems = [];
if (/[^\r]\n/.test(text)) problems.push("bare LF line ending");
const raw = text.split("\r\n").filter(Boolean);
raw.forEach((l, i) => { if (Buffer.byteLength(l) > 75) problems.push(`line ${i + 1} is ${Buffer.byteLength(l)} bytes`); });
if (text.includes("�")) problems.push("broken UTF-8 character");

// Unfold, then check each event.
const lines = text.replace(/\r\n /g, "").split("\r\n").filter(Boolean);
const events = [];
let ev = null;
for (const l of lines) {
  if (l === "BEGIN:VEVENT") ev = {};
  else if (l === "END:VEVENT") { events.push(ev); ev = null; }
  else if (ev) { const i = l.indexOf(":"); ev[l.slice(0, i)] = l.slice(i + 1); }
}
const uids = new Set(events.map(e => e.UID));
if (uids.size !== events.length) problems.push("duplicate UIDs");
let prev = null;
for (const e of events) {
  const d = e["DTSTART;VALUE=DATE"];
  if (!/^\d{8}$/.test(d)) problems.push(`bad DTSTART ${d}`);
  if (prev) {
    const a = new Date(`${prev.slice(0, 4)}-${prev.slice(4, 6)}-${prev.slice(6)}T12:00Z`);
    a.setUTCDate(a.getUTCDate() + 1);
    if (a.toISOString().slice(0, 10).replace(/-/g, "") !== d) problems.push(`gap after ${prev}`);
  }
  prev = d;
  if (/(^|[^\\])[,;]/.test(e.SUMMARY + e.DESCRIPTION)) problems.push(`unescaped , or ; in ${e.UID}`);
}
const show = d => { const e = events.find(x => x["DTSTART;VALUE=DATE"] === d); return e ? e.SUMMARY : "missing"; };
console.log(`${events.length} events, ${uids.size} unique UIDs, first ${events[0]["DTSTART;VALUE=DATE"]}, last ${prev}`);
console.log("2026-11-02:", show("20261102"));
console.log("2026-11-07:", show("20261107"));
console.log("2027-02-05:", show("20270205"));
console.log("2027-12-25:", show("20271225"));
console.log(problems.length ? "PROBLEMS:\n" + problems.slice(0, 20).join("\n") : "No problems found.");
process.exitCode = problems.length ? 1 : 0;
