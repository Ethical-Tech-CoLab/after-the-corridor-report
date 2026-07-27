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

### 1. The §05 development-economics figures read as bare assertions — PARTLY FIXED 2026-07-27

Correction: the figures ARE cited in this repo — footnotes `[^30]` (UNHCR
self-reliance blog) and `[^31]` (World Bank "The Costs Come Before the Benefits"
2024 + WEF). The problem was on the site copy, where the prose asserted them
without inline attribution. Fixed 2026-07-27 in `after-the-corridor.ts`: the
Uganda/Kakuma/Colombia bullets now attribute to "World Bank analysis." STILL
OPEN here: `[^30]` is a bare UNHCR blog with no figure on the page, so the
$3.2B→$900M and $56–62B/$41B claims lack a verifiable primary source — replace
with the specific UNHCR document and page, or downgrade to attributed estimates.
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
