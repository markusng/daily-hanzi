// Builds dist/: the web app (index.html + strokes + icons + manifest).
// Usage: node tools/build.js
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const src = p => path.join(root, "src", p);
const dist = p => path.join(root, "dist", p);
const config = require("./config.json");

fs.mkdirSync(dist("strokes"), { recursive: true });

// Page: head (title + styles) and body (markup + script), with the word data injected.
const read = p => fs.readFileSync(src(p), "utf8");
let body = read("body.html")
  .replace("/*WORDS*/", () => read("words.js"))
  .replace("/*SCORES*/", () => read("scores.js"));

// Use a local copy of Hanzi Writer when one is present, so the site does not depend on the CDN.
if (fs.existsSync(src("vendor/hanzi-writer.min.js"))) {
  fs.mkdirSync(dist("vendor"), { recursive: true });
  fs.copyFileSync(src("vendor/hanzi-writer.min.js"), dist("vendor/hanzi-writer.min.js"));
  body = body.replace(/https:\/\/cdn\.jsdelivr\.net\/npm\/hanzi-writer@[\d.]+\/dist\/hanzi-writer\.min\.js/, "vendor/hanzi-writer.min.js");
}

// claude.ai artifacts add a document skeleton and a small reset; a standalone page needs its own.
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="description" content="Three Chinese words a day in simplified and traditional characters, with Mandarin pinyin, Cantonese Jyutping, stroke order and writing practice.">
<meta name="theme-color" content="#b5352a">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icons/icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">
<meta name="apple-mobile-web-app-title" content="Daily Hanzi">
<style>
:root { color-scheme: light; padding-top: env(safe-area-inset-top, 0px); padding-bottom: env(safe-area-inset-bottom, 0px); }
body { margin: 0; font: 14px/1.4 system-ui, -apple-system, "Segoe UI", sans-serif; }
img { max-width: 100%; }
[hidden] { display: none !important; }
</style>
${read("head.html")}
</head>
<body>
${body}
</body>
</html>
`;
fs.writeFileSync(dist("index.html"), html);

for (const f of fs.readdirSync(src("strokes"))) fs.copyFileSync(src("strokes/" + f), dist("strokes/" + f));
if (fs.existsSync(src("icons"))) {
  fs.mkdirSync(dist("icons"), { recursive: true });
  for (const f of fs.readdirSync(src("icons"))) fs.copyFileSync(src("icons/" + f), dist("icons/" + f));
}

fs.writeFileSync(dist("manifest.webmanifest"), JSON.stringify({
  name: "Daily Hanzi",
  short_name: "Hanzi",
  description: "Three Chinese words a day: Mandarin and Cantonese, simplified and traditional.",
  start_url: "./",
  scope: "./",
  display: "standalone",
  background_color: "#fbfaf7",
  theme_color: "#b5352a",
  icons: [
    { src: "icons/icon.svg", sizes: "any", type: "image/svg+xml" },
    { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
    { src: "icons/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" }
  ]
}, null, 2));

// GitHub Pages: skip Jekyll processing.
fs.writeFileSync(dist(".nojekyll"), "");
console.log(`Built dist/ for ${config.siteUrl}`);
