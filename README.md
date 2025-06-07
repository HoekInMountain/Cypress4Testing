# Cypress4Testing

This project demonstrates how to use [Cypress](https://www.cypress.io/) for end-to-end (E2E) testing in a React quiz application. It automates the full quiz-taking flow: starting the quiz, answering questions, and restarting the quiz after completion.

## 🚀 Getting Started

### 1. Install Dependencies

Ensure [Node.js](https://nodejs.org/) is installed on your system.

Install Cypress and project dependencies:

```bash
npm install
```

### 2. Start the React App

Make sure your frontend app is running locally. In a separate terminal:

```bash
npm run dev
```

> This should serve your app at `http://127.0.0.1:3001` (update the URL if your app uses a different port)

### 3. Open Cypress Test Runner

To run Cypress tests interactively:

```bash
npx cypress open
```

Then click on `quiz.cy.js` in the test runner UI to begin the test.

Or run tests in headless mode:

```bash
npx cypress run
```

## 📁 Project Structure

```
Cypress/
├── e2e/
│   └── quiz.cy.js       # Main E2E test for quiz flow
├── fixtures/
│   └── questions.json   # Static mock questions used to stub API
├── support/
│   └── e2e.js           # Cypress support file
```

## ✅ What the Test Covers

- Navigates to the homepage
- Clicks **"Start Quiz"**
- Answers all questions sequentially using data from `questions.json`
- Confirms the final score screen appears
- Clicks **"Take New Quiz"** to restart
- Verifies quiz resets to the beginning

## 🎥 Demo Video

Watch the full Cypress test demo here:

📺 [Watch for demo](https://drive.google.com/file/d/1Kf1HH0-gKwHsFwwMveM0d6iEJxb2-wR1/view?usp=drive_link)

> Replace the link above with your actual video URL.

## 🔪 Sample Output

```bash
$ npx cypress run

...

  Tech Quiz E2E Test
    ✓ runs through the quiz from start to finish (5000ms)

  1 passing (5s)
```

## 📝 Notes

- The API endpoint `/api/questions/random` is intercepted and stubbed using the `questions.json` fixture.
- This setup does **not** require changes to your existing frontend or backend code.
- Make sure Cypress is testing against a running app instance.

---

Feel free to fork or clone this repo and adapt it to your own E2E testing scenarios using Cypress!

