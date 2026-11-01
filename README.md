# Application Academy — first draft

A browser-based introduction to understanding applications, using fictional personal-finance data. Six conceptual lessons and four JavaScript exercises are implemented. Later modules are labelled as a roadmap.

## Run

Requires Python 3 and a modern browser. From this directory:

```sh
npm run dev
```

Open http://localhost:5174. Alternatively serve `dist/` with any static HTTP host. Do not open the files directly with file://; JavaScript modules and the exercise sandbox require HTTP.

No npm dependencies or build step are needed. The academy is deliberately implemented with browser-native HTML/CSS/JavaScript; later lessons introduce React and TypeScript rather than requiring them upfront.

## Practice

Lessons have explanations, interactive previews, checked questions, hints and reference answers. JavaScript exercises run real learner code in disposable workers inside an opaque-origin sandboxed iframe, with a two-second timeout. Checks use multiple inputs where applicable. The checker evaluates returned results, not variable naming or a particular spelling of the solution. It is a learning aid, not an assessment security boundary: a determined learner can inspect the client-side checker.

The interface automatically follows the system light/dark preference, including live preference changes. Native form controls follow the same theme.

Progress and code drafts are saved in localStorage under `application-academy:v1`. The practice note uses `application-academy:note`. Reset learning progress preserves drafts and the note. Revealing an answer before completing a check records guided practice. Preview records reset on reload. No real financial information, Python backend or PostgreSQL instance is connected. Network and save-journey examples are explicitly labelled simulations.

## Verification

```sh
npm test
node --check dist/app.js
```

Checks exercise reference solutions, incorrect starters, alternative fixtures, numeric type/sign errors and a different correct function implementation. Browser interaction and responsive appearance still require browser verification. The implementation environment blocked binding a local HTTP preview server.

See ACADEMY-PLAN.md for the proposed full curriculum.
