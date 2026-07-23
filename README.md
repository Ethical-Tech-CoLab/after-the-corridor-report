# After the Corridor

**From AI-Informed Evacuation to Digital Public Goods for Refugee Economic Inclusion**

Ethical Tech CoLab · NYU Center for Global Affairs · Research report · July 2026

📄 **[Read the report online](https://ethical-tech-colab.github.io/after-the-corridor-report/)** · [Download the PDF](docs/pdf/After-the-Corridor-ETC-Research-Report.pdf) · [Markdown source](REPORT.md)

---

How can AI inform evacuation decisions, and what happens after?

This report reads the Ethical Tech CoLab's five fielded evacuation prototypes and its forced-labour risk index together, states plainly which of them are validated and which are not, and extends the arc past the corridor and into the camp: the measurement, financial-modeling, and rights infrastructure that can shorten protracted displacement and improve lives. The case study ground is **Dzaleka Refugee Camp, Dowa District, Malawi**, where humanitarian financing has collapsed while an encampment policy bars residents from working.

It also names the one thing the lab refuses to build, biometric identity for displaced people, and argues that the refusal is itself a public good.

## The argument in four figures

| | |
| --- | --- |
| **6** | built instruments: five fielded evacuation prototypes and a completed forced-labour risk index, all open source |
| **53,000+** | people now at Dzaleka, a camp built in 1994 for 10,000 to 12,000 |
| **90%** | cut to UNHCR's Malawi budget, from about US$8 million to about US$1 million |
| **0** | biometric identity systems, recorded as a versioned decision pattern (DDC-0001) rather than left implicit |

## Three registers, kept apart

A reader deciding whether to fund this work is owed precision about maturity, so the report never lets a claim exceed the register of the tool it describes.

| Register | Components |
| --- | --- |
| Built and validated | Evacuation Risk and Cost Framework (ERCF), in its evacuation form |
| Built and operational, not yet validated | Evacuation Information Index (EII), Exodus, Evacuation Behavior Simulator, Readiness and Uncertainty Simulator |
| Built and completed, published methodology | Forced Labor Structural Risk Index (FLSRI) |
| Proposed, validation is future work | Livelihoods Information and Access Index (LIAI), Resettlement and Inclusion Capacity Simulator (RICS), value-transfer and legal-map builds |

## Contents

1. Executive summary
2. The research question, and why it runs past the corridor
3. The built portfolio: evacuation models, a forced-labour risk index, and what they open
4. After arrival: Dzaleka and the second emergency
5. The financial model: from evacuation break-even to inclusion break-even
6. Digital public goods for economic inclusion
7. Vulnerable populations, digital identity risk, and mitigation
8. Aggregating evidence so displaced people can argue their case sooner
9. What infrastructure is actually needed
10. How success will be measured
11. Alignment with the Displaced Livelihoods Initiative and other funders
12. Programme design and outlook
13. Consolidated limitations and future research

## The instruments this report reads

Every prototype discussed is open source under [github.com/Ethical-Tech-CoLab](https://github.com/Ethical-Tech-CoLab):

- [ercf](https://github.com/Ethical-Tech-CoLab/ercf) — Evacuation Risk and Cost Framework, v7.2
- [Exodus](https://github.com/Ethical-Tech-CoLab/Exodus) — Civilian Evacuation Risk Platform
- [evacuation-inform-index-carolina](https://github.com/Ethical-Tech-CoLab/evacuation-inform-index-carolina) — Evacuation Information Index
- [Evac-Sim-Melanie](https://github.com/Ethical-Tech-CoLab/Evac-Sim-Melanie) — Evacuation Behavior Simulator
- [India-EvacSimulation](https://github.com/Ethical-Tech-CoLab/India-EvacSimulation) — Readiness and Uncertainty Simulator
- [forced-labor-structural-risk-index](https://github.com/Ethical-Tech-CoLab/forced-labor-structural-risk-index) — Forced Labor Structural Risk Index

The report is also published on the CoLab site at [/publications/after-the-corridor](https://ethical-tech-colab.github.io/website/publications/after-the-corridor).

## Repository layout

```
REPORT.md                 the report, canonical source
docs/index.html           generated Pages site (committed)
docs/pdf/                 the report as a PDF
scripts/build-site.mjs    REPORT.md -> docs/index.html
```

## Building the site

`REPORT.md` is the single source of truth. The Pages site is generated from it and the generated file is committed, so GitHub Pages serves `/docs` on the default branch directly, with no Actions workflow involved.

```bash
npm install
npm run build      # rewrites docs/index.html
```

Edit `REPORT.md`, run the build, and commit both.

## Citing this report

> Moron, C. de A. P., Lumen, C., Robertson, A., MacKew, M., Ruiz, C. D., Clarke, I., and Rocha, Y., with Cantero, T. (2026). *After the Corridor: From AI-Informed Evacuation to Digital Public Goods for Refugee Economic Inclusion.* Ethical Tech CoLab, NYU Center for Global Affairs.

## The ask

The Ethical Tech CoLab seeks grant funding to develop this infrastructure as open, portable public goods, validated first at Dzaleka with the field partner Fraternidade Sem Fronteiras, and released publicly so that any research or practitioner team can adopt it. One route is the Displaced Livelihoods Initiative run by Innovations for Poverty Action and J-PAL, in its Infrastructure and Public Goods track; the report is written to align with that submission and to stand on its own for any peer funder or academic reviewer.

If you work on displacement, livelihoods, or humanitarian measurement and want to use or extend any of this, open an issue or reach the lab through [ethical-tech-colab.github.io/website](https://ethical-tech-colab.github.io/website/).

## Licence

Text and figures: [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code in `scripts/`: MIT.

---

The Ethical Tech CoLab is a research initiative of the NYU School of Professional Studies Center for Global Affairs, conducted in collaboration with Microsoft. Views and findings are those of the researchers and do not represent the official positions of New York University, Microsoft, UNHCR, WFP, or any partner institution. External programs cited are referenced as evidence, not as CoLab partnerships.
