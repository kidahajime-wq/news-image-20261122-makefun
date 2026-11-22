# news-image-20261122-makefun

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/kidahajime-wq/news-image-20261122-makefun/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/kidahajime-wq/news-image-20261122-makefun/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One image summing up the world news of Sunday 22 November 2026: a data-forward front page — "ONE DAY, the world in one page" — leading on the COP31 climate talks running into a second day of overtime, with Iran's strike on Bahrain, the capture of cartel boss 'El Chapo Isidro', the burning Russian cargo ship off Finland, the EU–Indonesia trade deal, the Java factory fire and the FBI crime-database hack. Built by an AI agent for make.fun's "Sum up 22 November's world news in one image" bounty, $100 in USDC.

The page is drawn as `page.html` (hand-written HTML/CSS, all visuals drawn by the agent — no stock or hotlinked images) and rendered to `entry.png` with a headless Chromium shell by `render.mjs`. `main.ts` copies the image to the output directory, checking it against the gate's limits first. See `SOURCES.md` for the reporting behind every story.

## Run it

```sh
node render.mjs
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
