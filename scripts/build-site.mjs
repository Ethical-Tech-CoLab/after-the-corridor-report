// Builds docs/index.html from REPORT.md.
//
// The generated file is committed, and GitHub Pages serves it straight from
// the /docs folder on the default branch. That means no Actions workflow and
// no build step in CI: the site is a single self-contained HTML file with the
// stylesheet inlined, so it also opens correctly from a local checkout.
//
// Run with: npm run build

import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import MarkdownIt from "markdown-it";
import footnote from "markdown-it-footnote";
import anchor from "markdown-it-anchor";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const md = new MarkdownIt({ html: true, linkify: true, typographer: false })
  .use(footnote)
  .use(anchor, {
    permalink: anchor.permalink.headerLink(),
    slugify: (s) =>
      s
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-"),
  });

const source = readFileSync(join(root, "REPORT.md"), "utf8");

// The first three lines of the markdown carry the title and subtitle. The
// page renders them in its own masthead, so strip them from the body to avoid
// printing the title twice.
const body = md.render(source.split("\n").slice(4).join("\n"));

const css = `
:root {
  color-scheme: dark;
  --bg: #0b0710;
  --surface: #150e1d;
  --card: #1a1224;
  --border: #2e2340;
  --fg: #ece7f2;
  --muted: #a396b5;
  --accent: #c8f04b;
  --accent-ink: #14100b;
  --link: #d6f57a;
}
@media (prefers-color-scheme: light) {
  :root {
    color-scheme: light;
    --bg: #fbfafd;
    --surface: #f3eff8;
    --card: #ffffff;
    --border: #e0d8ec;
    --fg: #1b1424;
    --muted: #5c5169;
    --accent: #4c1d95;
    --accent-ink: #ffffff;
    --link: #5b21b6;
  }
}
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  margin: 0;
  background: var(--bg);
  color: var(--fg);
  font: 16px/1.7 ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  -webkit-text-size-adjust: 100%;
}
.wrap { max-width: 46rem; margin: 0 auto; padding: 0 1.25rem 6rem; }
header.masthead {
  border-bottom: 1px solid var(--border);
  background:
    radial-gradient(70% 120% at 15% 0%, color-mix(in oklab, var(--accent) 12%, transparent), transparent 62%),
    var(--surface);
}
header.masthead .wrap { padding-top: 4rem; padding-bottom: 3rem; }
.eyebrow {
  font: 500 0.7rem/1.6 ui-monospace, SFMono-Regular, Menlo, monospace;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 0;
}
h1.title {
  font-size: clamp(2.4rem, 7vw, 4rem);
  line-height: 1.02;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin: 1rem 0 0;
}
h1.title em { font-style: normal; color: var(--accent); }
p.subtitle {
  font-size: clamp(1.05rem, 2.4vw, 1.35rem);
  line-height: 1.35;
  text-transform: uppercase;
  letter-spacing: 0.01em;
  color: var(--muted);
  margin: 1.1rem 0 0;
  max-width: 34rem;
}
p.byline { margin: 1.75rem 0 0; font-size: 0.9rem; color: var(--muted); }
p.byline strong { color: var(--fg); font-weight: 600; }
.actions { display: flex; flex-wrap: wrap; gap: 0.6rem; margin-top: 1.75rem; }
.actions a {
  display: inline-block;
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  border: 1px solid var(--border);
  color: var(--fg);
}
.actions a.primary { background: var(--accent); color: var(--accent-ink); border-color: transparent; }
.actions a:hover { border-color: var(--accent); }
main { padding-top: 2.5rem; }
h2 {
  font-size: clamp(1.5rem, 3.4vw, 2rem);
  line-height: 1.15;
  text-transform: uppercase;
  letter-spacing: -0.01em;
  margin: 3.5rem 0 0.25rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  scroll-margin-top: 1.5rem;
}
h3 {
  font-size: 1.1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: var(--accent);
  margin: 2.5rem 0 0.25rem;
  scroll-margin-top: 1.5rem;
}
h4 { font-size: 0.95rem; text-transform: uppercase; letter-spacing: 0.06em; color: var(--muted); margin: 2rem 0 0.25rem; }
h2 a, h3 a, h4 a { color: inherit; text-decoration: none; }
p { margin: 1rem 0; }
a { color: var(--link); text-underline-offset: 3px; }
strong { color: var(--fg); }
ul, ol { padding-left: 1.35rem; }
li { margin: 0.5rem 0; }
li::marker { color: var(--accent); }
blockquote {
  margin: 1.5rem 0;
  padding: 0.25rem 0 0.25rem 1.25rem;
  border-left: 2px solid var(--accent);
  color: var(--muted);
  font-size: 0.92rem;
}
hr { border: 0; border-top: 1px solid var(--border); margin: 3rem 0 0; }
.table-scroll { overflow-x: auto; margin: 1.75rem 0; border: 1px solid var(--border); border-radius: 0.75rem; }
table { border-collapse: collapse; width: 100%; font-size: 0.88rem; min-width: 34rem; }
th, td { text-align: left; vertical-align: top; padding: 0.7rem 0.9rem; border-bottom: 1px solid var(--border); }
thead th { background: var(--card); text-transform: uppercase; letter-spacing: 0.06em; font-size: 0.72rem; color: var(--muted); }
tbody tr:last-child td { border-bottom: 0; }
.footnotes {
  margin-top: 3rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  font-size: 0.85rem;
  color: var(--muted);
}
.footnotes ol { padding-left: 1.5rem; }
.footnotes li { margin: 0.85rem 0; }
.footnotes hr { display: none; }
.footnote-backref { text-decoration: none; }
sup.footnote-ref a { color: var(--accent); text-decoration: none; font-weight: 600; }
footer.colophon {
  margin-top: 4rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
  font-size: 0.8rem;
  color: var(--muted);
}
@media print {
  :root { color-scheme: light; --bg: #fff; --fg: #111; --muted: #444; --border: #ccc; --accent: #333; }
  header.masthead { background: none; }
  .actions { display: none; }
}
`;

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<link rel="icon" type="image/svg+xml" href="etc-icon.svg">
<link rel="icon" type="image/png" sizes="256x256" href="etc-icon.png">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>After the Corridor — Ethical Tech CoLab</title>
<meta name="description" content="From AI-informed evacuation to digital public goods for refugee economic inclusion. An Ethical Tech CoLab research report, grounded at Dzaleka Refugee Camp, Malawi.">
<meta property="og:title" content="After the Corridor">
<meta property="og:description" content="From AI-informed evacuation to digital public goods for refugee economic inclusion. An Ethical Tech CoLab research report.">
<meta property="og:type" content="article">
<style>${css}</style>
</head>
<body>
<header class="masthead">
  <div class="wrap">
    <p class="eyebrow">Ethical Tech CoLab · NYU Center for Global Affairs · Research report · July 2026</p>
    <h1 class="title">After the <em>Corridor</em></h1>
    <p class="subtitle">From AI-Informed Evacuation to Digital Public Goods for Refugee Economic Inclusion</p>
    <p class="byline">
      <strong>Carolina de Almeida Pernambuco Moron</strong>, Christine Lumen, Alana Robertson,
      Melanie MacKew, Carlos D. Ruiz, India Clarke, Yago Rocha.<br>
      With <strong>Teresa Cantero</strong> (PhD Candidate, Universidad Carlos III de Madrid; Adjunct Professor,
      IE University; Visiting Scholar, NYU CGA).<br>
      Faculty directors: <strong>Prof. Yorke E. Rhodes III</strong> and <strong>Sylvia Maier</strong>.
    </p>
    <div class="actions">
      <a class="primary" href="pdf/After-the-Corridor-ETC-Research-Report.pdf">Download the PDF</a>
      <a href="https://github.com/Ethical-Tech-CoLab/after-the-corridor-report">Repository</a>
      <a href="https://ethical-tech-colab.github.io/website/">Ethical Tech CoLab</a>
    </div>
  </div>
</header>
<main class="wrap">
${body}
<footer class="colophon">
  <p>The Ethical Tech CoLab is a research initiative of the NYU School of Professional Studies Center for
  Global Affairs, conducted in collaboration with Microsoft. Views and findings are those of the researchers
  and do not represent the official positions of New York University, Microsoft, UNHCR, WFP, or any partner
  institution. External programs cited are referenced as evidence, not as CoLab partnerships.</p>
  <p>Text released under CC BY 4.0. This page is generated from
  <a href="https://github.com/Ethical-Tech-CoLab/after-the-corridor-report/blob/main/REPORT.md">REPORT.md</a>.</p>
</footer>
</main>
</body>
</html>
`;

// Wrap tables so a wide table scrolls inside its own box rather than forcing
// the whole page to scroll sideways on a phone.
const withScrollableTables = html.replace(
  /<table>([\s\S]*?)<\/table>/g,
  '<div class="table-scroll"><table>$1</table></div>',
);

mkdirSync(join(root, "docs"), { recursive: true });
writeFileSync(join(root, "docs", "index.html"), withScrollableTables);
// Tell Pages not to run the output through Jekyll.
writeFileSync(join(root, "docs", ".nojekyll"), "");
console.log("docs/index.html written");
