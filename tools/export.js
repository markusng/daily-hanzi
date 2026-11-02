// Runs the page's own scheduling code (src/body.html, up to the rendering section) and
// writes build/schedule.json, so the calendar feed and email always match the website.
// Usage: node tools/export.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const read = p => fs.readFileSync(path.join(root, "src", p), "utf8");
const { siteUrl } = require("./config.json");

const body = read("body.html");
const script = body.slice(body.lastIndexOf("<script>") + 8, body.lastIndexOf("</script>"))
  .replace("/*WORDS*/", () => read("words.js"))
  .replace("/*SCORES*/", () => read("scores.js"));
const scheduling = script.split("// ---------- Rendering")[0];

const ctx = {};
vm.runInNewContext(scheduling + "\n;this.out = { DAYS, BY_KEY, POS, FEST, pinnedFrom, TOTAL_LESSONS };", ctx);
const { DAYS, BY_KEY, POS, FEST, pinnedFrom } = ctx.out;

const pad2 = n => String(n).padStart(2, "0");
const iso = t => `${t.getFullYear()}-${pad2(t.getMonth() + 1)}-${pad2(t.getDate())}`;
const word = w => ({
  sc: w.sc, tc: w.tc, pinyin: w.py, jyutping: w.jp, en: w.en,
  cls: w.pos, clsName: POS[w.pos][0], note: w.note || null
});

const days = DAYS.map(d => {
  const date = iso(d.date);
  const out = { date, weekday: d.date.getDay(), type: d.type, url: `${siteUrl}#d${date}` };
  if (FEST[d.key]) out.festival = FEST[d.key];
  if (pinnedFrom[d.key]) {
    const [m, day] = pinnedFrom[d.key].split("-").map(Number);
    out.forFestival = { name: FEST[`2027-${m}-${day}`], date: `2027-${pad2(m)}-${pad2(day)}` };
  }
  if (d.type === "learn") {
    out.lesson = d.lesson;
    out.theme = d.set.theme;
    out.themeZh = d.set.themeZh;
    out.words = d.set.words.map(word);
  } else {
    out.covers = d.refs.map(k => iso(BY_KEY[k].date));
    out.words = d.refs.flatMap(k => BY_KEY[k].set.words.map(w => ({ ...word(w), day: iso(BY_KEY[k].date) })));
  }
  return out;
});

fs.mkdirSync(path.join(root, "build"), { recursive: true });
fs.writeFileSync(path.join(root, "build", "schedule.json"), JSON.stringify({ siteUrl, days }, null, 1));
const count = t => days.filter(d => d.type === t).length;
console.log(`schedule.json: ${days.length} days (${count("learn")} lessons, ${count("review")} reviews, ${count("test")} self-tests, ${count("preview")} preview), ${days[0].date} to ${days.at(-1).date}`);
