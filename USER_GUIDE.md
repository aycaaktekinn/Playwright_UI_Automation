# Playwright UI Automation - User Guide

## Project Overview

This project contains UI test automation for **SauceDemo**, developed using Playwright and TypeScript.
(The API tests live in the separate `Playwright_API_Automation` project.)

- Positive and negative login scenarios
- Add-to-cart flow
- Reusable login helper
- Assertions
- Cross-browser testing (Chromium, Firefox, WebKit)
- HTML reporting and debug support

---

## Technologies

- Playwright
- TypeScript
- Node.js
- npm
- SauceDemo

---

## Project Structure

```text
Playwright_UI_Automation/
│
├── tests/
│   ├── helpers/
│   │   └── login.ts
│   ├── login.spec.ts
│   └── product.spec.ts
│
├── playwright.config.ts
├── package.json
└── USER_GUIDE.md
```

---

## Installation

```bash
npm install
npx playwright install
```

---

## Test Scenarios

- Successful login
- Login with wrong password
- Login with empty username
- Add Sauce Labs Backpack to cart
- Verify cart badge
- Verify product in cart

The reusable login function is stored in:

```text
tests/helpers/login.ts
```

The SauceDemo base URL is defined in `playwright.config.ts`:

```ts
baseURL: 'https://www.saucedemo.com/'
```

---

## Running Tests

All browsers:

```bash
npm test
```

Only Chromium:

```bash
npm run test:chromium
```

With visible browser:

```bash
npm run test:headed
```

---

## Debugging

```bash
npx playwright test tests/login.spec.ts --project=chromium --debug
```

Playwright supports debugging with:

- Playwright Inspector
- Screenshots
- Videos
- Trace files
- Error details

---

## HTML Report

```bash
npm run report
```

The report shows passed and failed tests, execution times and error details.

---

## Summary

This project demonstrates:

- UI test automation
- Positive and negative test scenarios
- Reusable helper functions
- Assertions
- Cross-browser testing
- Debugging
- HTML reporting
