# Application Academy

## Purpose

Learn to understand, change and debug a React application independently. Use a fictional personal-finance application as a continuous example. Teach the concepts before introducing the tools that implement them. The learner has built applications with AI and has some SQL experience, but should not need prior JavaScript knowledge.

This is a curriculum proposal, not an implemented application. The local SQL Academy in `../Duck_DB_curriculum` supplies the reference teaching pattern.

## Learning contract

Every lesson follows: predict → experiment → explain → change → verify → transfer.

- Start with one concrete question and a visible outcome.
- Explain terminology at first use, with a small worked example.
- Ask for a prediction before running the example.
- Provide a visual experiment, then editable source and actual output where relevant.
- Give a small task, progressive hints, a reference answer and an explanation of why it works.
- Check observable behavior; accept alternative correct implementations.
- Include one broken example to diagnose and one unfamiliar variation to attempt independently.
- Save completion and drafts independently. Label completion after revealing a solution as guided practice; offer a fresh challenge for independent practice.
- Clearly distinguish real execution, static illustration and simulated network/server behavior.

## Curriculum

### 1. From a click to a result

No syntax prerequisite. Trace a transaction filter from an input through changing data to a changed screen.

1. The browser receives documents and assets: HTML, CSS and JavaScript.
2. Structure, presentation and behavior: change each independently.
3. Data, interface state and derived values: transaction records versus a selected category versus its subtotal.
4. Browser, server and database: locate each responsibility on an interactive request map.
5. Local memory, browser storage and server persistence: predict what survives a refresh.
6. Read a simple request and response; distinguish successful empty data from a failed request.

Milestone: explain what must happen when the user categorises a transaction, and identify where a failure could occur.

### 2. JavaScript for working with application data

Use fictional transaction objects before any React or TypeScript syntax.

1. Values, variables and primitive types; numbers versus numeric strings.
2. Objects, arrays, properties and missing values.
3. Functions, arguments and return values.
4. Conditions and comparisons.
5. `filter`, `map` and `reduce`, connected carefully to SQL WHERE, SELECT and aggregation. Explain that the execution and semantics differ.
6. Immutable updates, object spread and stable identifiers.
7. Imports, exports and modules.
8. Asynchronous work, promises, `async`/`await` and error handling.

Milestone: filter transactions and calculate a subtotal using integer pence. Currency formatting happens at display time. Transfers between owned accounts are not spending.

### 3. A page that responds

Build a tiny browser interface before introducing React abstractions.

1. The DOM: inspect the browser's representation of the page.
2. Events: follow a button click into a function.
3. Inputs, forms and validation.
4. Updating the DOM from data.
5. Keeping a filter, list and subtotal consistent.

Milestone: make an interactive transaction list and encounter the practical problem of synchronising multiple screen elements.

### 4. Thinking in React

Rebuild the same interface so the learner can compare approaches.

1. Components: split a screen into responsibilities.
2. JSX: expressions and markup, and how they become JavaScript.
3. Props: pass data into a reusable transaction row.
4. State: remember a selected category and request an update.
5. Rendering: derive the visible list and subtotal from current data and state.
6. Events and controlled inputs.
7. Lift shared state; use stable keys for list items.
8. Derived values versus stored state; avoid redundant state and unnecessary Effects.

Milestone: explain and modify a filterable finance dashboard without following a supplied sequence of edits.

### 5. Understand the project and its build

Tooling appears in context from the first editable project; this module makes the whole pipeline explicit.

1. Navigate `index.html`, the entry module, `App`, components, styles and assets.
2. Node.js and npm: development tools versus code running in the browser.
3. `package.json`, dependencies, scripts and the lockfile.
4. Vite's development server and live updates.
5. Follow an import into the browser and compare source files with production output.
6. Development, production build and preview are different activities.
7. Read a syntax error, runtime error, network error and failed build.
8. Environment variables: values included in frontend output are visible to users; database credentials belong on the server.

Milestone: start, change, build and inspect a small application locally, explaining what each command does.

### 6. TypeScript as feedback

Introduce types by reproducing mistakes in the JavaScript application first.

1. Inference and annotations.
2. Describe a transaction object and arrays of transactions.
3. Type function arguments, return values and React props.
4. Optional values, unions and narrowing.
5. Read and resolve compiler diagnostics rather than suppressing them.
6. Runtime validation: a typed API response can still contain invalid data.
7. Type checking versus transforming source: the browser receives JavaScript, not TypeScript types.

Milestone: catch a changed data shape before running the app, and reject malformed incoming data at runtime.

### 7. Data across a network

1. HTTP methods, URLs, status codes and JSON.
2. `fetch`, including handling non-success HTTP responses.
3. Loading, empty, success and error states.
4. Effects for synchronising with external systems; cleanup and stale responses.
5. Save a category change; handle a failed save without claiming success.
6. Trace frontend → API → backend → database → response → frontend.
7. Boundaries: validation and authorisation belong on the server too.

Begin with a clearly labelled mock API with controllable delay and failure. Add an optional real Python/PostgreSQL lab later. Do not make installing a database a prerequisite for learning React.

Milestone: debug a transaction list that works with fast responses but fails with delayed or unsuccessful requests.

### 8. Tables with TanStack Table

First implement a small native HTML table. Introduce the library when sorting, filtering and pagination make the manual version cumbersome.

1. Data, column definitions and cell rendering.
2. Headless table logic versus the markup and styling the application owns.
3. Sorting, filtering and pagination.
4. Stable row IDs and selection across changing views.
5. Table state and accessible controls.
6. Client-side versus server-side processing and totals over all filtered rows versus just the visible page.

Milestone: build and explain a usable transaction explorer.

### 9. Independent capstone

Supply a written brief and acceptance criteria, not a generated application to copy. Build a small transaction review tool with category editing, filtering, spending totals and visible save failures.

Require the learner to explain the data flow, find an injected bug, implement an unseen change, and identify which layer owns each responsibility. Offer AI help as graduated prompts: ask for an explanation, ask for a hint, review a proposed change, then request implementation only after attempting it.

## Academy interface

- Reuse the SQL Academy pattern: module navigation, lesson explanation, task, hints, editable workspace, results and progress.
- Add tabs for Preview, Code, Data and Trace. Trace shows the event, data/state change and resulting render.
- Start lessons in Visual mode; introduce code gradually and keep the explanation beside it.
- Provide controlled broken examples and clear error explanations.
- Allow lesson reset without clearing learning progress or unrelated browser storage.
- Include a local-project bridge: downloadable exercise files, exact commands, expected output and a matching independent task in the learner's editor.
- Provide keyboard access, readable contrast, responsive panes and an accessible text equivalent for diagrams.

## First usable release

Implement Module 1 and the first four lessons of Module 2 completely, including checked exercises and saved progress. Show later modules as a labelled roadmap. Validate this teaching approach before producing the full course.

The academy can itself use React and TypeScript internally without exposing those details as prerequisites. Learner JavaScript must execute in an isolated environment with a termination path for infinite loops, never inside the academy's own application context. Early visual exercises can use predefined operations, but must be labelled as such rather than presented as arbitrary code execution. React and TypeScript lessons eventually need actual compilation/runtime feedback; regex checks and canned output are insufficient.

## Verification expectations

Check every reference answer and representative alternative answers. Confirm incorrect answers do not complete lessons. Exercise error recovery, progress persistence, resets, keyboard navigation and narrow screens. Verify currency calculations with exact integer fixtures. Check that any learner execution environment can be stopped and cannot access the academy's storage.

## Primary references

- React: https://react.dev/learn/thinking-in-react
- Vite transformation and type checking: https://vite.dev/guide/features
- TanStack Table's headless architecture: https://tanstack.com/table/latest/docs/overview

Pin implementation dependency versions when building the academy and align lesson examples with those versions.
