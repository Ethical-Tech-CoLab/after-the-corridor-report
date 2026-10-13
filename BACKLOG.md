# Backlog

Known gaps, in the order they would mislead a reader. Each entry says what is
wrong, why it matters, and what closing it would take.

---

## Credibility review — 2026-07-27

A hostile-but-fair peer-review sweep of the report copy (canonical in
[REPORT.md](REPORT.md), mirrored on the site in
`website/src/content/publications/after-the-corridor.ts`). Fix in both places.
This report carries the single biggest credibility exposure across the CoLab
portfolio, because §05 asserts development-economics figures as settled evidence
the model merely "formalizes," without matching citations.

### 1. The §05 development-economics figures — FIXED 2026-07-27 (verified against sources)

Each figure was checked against its primary source and the copy corrected in
both `REPORT.md` and the site `after-the-corridor.ts`:

- **$3.2B → $900M** (`[^30]`): confirmed verbatim by the UNHCR self-reliance
  blog. Kept.
- **The "$56–62B / $41B" benchmark: corrected.** The World Bank–UNHCR figure is
  *almost US$62 billion* to bring every refugee in low/middle-income hosts to
  the global poverty line in a no-income scenario; refugees' own earnings
  already cover ~US$40 billion, leaving ~US$22 billion. Rewritten to state that,
  and re-cited to `[^29]` (World Bank, *Making Refugee Self-Reliance Work*)
  instead of the `[^30]` blog. The old "$56 billion" low end was unsupported.
- **Uganda $150 / $225M** (`[^31]`): confirmed verbatim by the World Bank. Kept.
- **Kakuma +3.4% GRP**: confirmed, but re-sourced — the figure is from UNHCR/
  World Bank *"Yes" in My Backyard? … Kakuma, Kenya* (2016), now added to `[^31]`.
- **Colombia**: dropped the unsupported "500,000" headcount and the misassigned
  "minimal impact on host employment"; now states ~30% income and ~10pp formal
  employment gains for beneficiaries, with little host displacement (Ibáñez et
  al., via `[^31]`).

Original write-up below.


Four load-bearing numbers in the financial-model section are stated as
established benchmarks with no corresponding source in the works cited:

- The "joint World Bank and UNHCR benchmark" of **US$56–62 billion annually, of
  which about US$41 billion is already met by refugees' own earnings** — no
  citation at all.
- **UNHCR's estimate that complementary-assistance costs would fall from about
  US$3.2 billion to roughly US$900 million a year** — a 72% collapse sourced
  only to a bare UNHCR self-reliance blog URL with no figure on the page.
- **Colombia's regularization of about 500,000 Venezuelans raised their incomes
  by about 31 percent** — the headcount mis-scales the underlying PEP study
  population (the income studies cover ~280k–442k; later regularization covered
  millions), and the 31% effect is uncited.
- **Kakuma raised gross regional product by about 3.4 percent** and the Uganda
  **US$150 per refugee / US$225 million** pair — no citation ties either number
  to its study (the Uganda line is at least arithmetic-consistent: 150 × 1.5M).

**Why it matters.** A reviewer who cannot trace these figures will read the
entire cost-benefit case as invented. This is the first thing to fix.

**What closing it takes.** Pin each figure to a specific source (title, year,
page) or downgrade it to an attributed estimate. Remove any that cannot be
located. Attribute the Colombia income effect to the specific paper (e.g.
Ibáñez et al.) and correct the headcount to match that paper's sample.

### 2. Dzaleka population: hero stat is more precise than the body — FIXED 2026-07-27 (site)

Fixed in `after-the-corridor.ts`: the hero stat now reads "53k to 60k." (Source
`REPORT.md` already gave the range in §4.2; the hero stat is a site-only
element.) Original write-up below.


The hero stat asserts a single "53k" while §04 gives "53,000 to 60,000." A
reader takes the rounded hero number as the settled figure. Make the hero stat
a range ("53k–60k") to match the body and its news citations.

---

## Quality pass — 2026-10-12

- **Item 1 above had not reached `docs/`.** The site was last built before the
  2026-07-27 correction, so the Pages copy still carried the $56–62B / $41B
  benchmark, the 500,000 Colombia headcount and the 31 percent figure.
  Rebuilt with `npm run build` and committed. **CLOSED 2026-10-12.**
- **Dead citation link fixed.** `[^8]` pointed at the retired
  `un.org/en/genocideprevention/about-responsibility-to-protect.shtml` (404).
  Now points at `un.org/en/genocide-prevention/responsibility-protect/about`.
  **CLOSED 2026-10-12.**
- **README hero stat** now reads "53,000 to 60,000", matching §4.2 and the
  item 2 fix on the site. **CLOSED 2026-10-12.**
- All other external links in REPORT.md and README.md resolve. The UNHCR,
  ICRC casebook, IOM and digitalprinciples.org pages return 403 to automated
  fetches (bot blocking); they open in a browser and were left as is.
- Figures were tallied across the report; every number appears once, so no
  internal contradictions remain after the item 1 fix.

### 3. The PDF still carries the pre-correction §05 figures — OPEN

`docs/pdf/After-the-Corridor-ETC-Research-Report.pdf` is dated 2026-07-23, four
days before the item 1 correction. It still says "500,000 Venezuelans", "US$56
billion to US$62 billion" and "US$41 billion". It is linked from the README and
the site header as the download copy, so a reviewer who downloads it reads the
figures the backlog says were fixed.

**What closing it takes.** The PDF is a 22-page designed layout, not an export
of `docs/index.html`, and the repo does not document how it was produced. Either
re-export it from the original design file with the corrected §05 text, or
replace it with a print of the site (`Chrome --headless --print-to-pdf` on
`docs/index.html` works and yields 33 pages with the corrected figures) and
say so in the README.
