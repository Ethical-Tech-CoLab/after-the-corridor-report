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
