
### `README.md` – Cypress + TypeScript Project

# 🚀 End-to-End Testing with Cypress + TypeScript

This project uses [Cypress](https://www.cypress.io/) for end-to-end (E2E) testing, configured with **TypeScript** for type safety and developer productivity.

---

## 📁 Project Structure

```

project-root/
│
├── cypress/
│   ├── e2e/              # Test specs (e.g., home.cy.ts)
│   ├── support/          # Custom commands and test setup
│   │   ├── commands.ts
│   │   └── e2e.ts
│
├── cypress.config.ts     # Cypress configuration (TypeScript format)
├── tsconfig.json         # TypeScript configuration for Cypress
├── package.json
└── README.md

````

---

## 🧰 Tech Stack

- ✅ [Cypress](https://www.cypress.io/) – E2E Testing Framework
- ✅ TypeScript – Static typing
- ✅ Node.js – Runtime
- ✅ NPM/Yarn – Package management

---

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/your-repo/cypress-ts-e2e.git
cd cypress-ts-e2e

# Install dependencies
npm install
# or
yarn install
````

---

## 🧪 Running Tests

### Open Cypress UI

```bash
npm run cypress:open
# or
yarn cypress:open
```

### Run Tests Headlessly (in terminal)

```bash
npm run cypress:run
# or
yarn cypress:run
```

---

## ⚙️ Available Scripts

| Script         | Description                          |
| -------------- | ------------------------------------ |
| `cypress:open` | Open Cypress in interactive GUI mode |
| `cypress:run`  | Run all tests in headless mode (CLI) |
| `test:e2e`     | Alias for `cypress:run`              |

Update your `package.json` like this:

```json
"scripts": {
  "cypress:open": "cypress open",
  "cypress:run": "cypress run",
  "test:e2e": "npm run cypress:run"
}
```

---

## ✍️ Writing Tests

All test files go into the `cypress/e2e/` folder.

Example: `home.cy.ts`

```ts
describe("Home Page", () => {
  it("should load successfully", () => {
    cy.visit("/");
    cy.contains("Welcome").should("exist");
  });
});
```

---

## 📐 TypeScript Configuration (`tsconfig.json`)

Make sure `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "lib": ["es6", "dom"],
    "types": ["cypress"],
    "moduleResolution": "node",
    "strict": true
  },
  "include": ["cypress/**/*.ts"]
}
```

---

## 🔌 Custom Commands

Custom Cypress commands can be defined in `cypress/support/commands.ts`.

Example:

```ts
Cypress.Commands.add("login", () => {
  cy.visit("/login");
  cy.get("input[name=email]").type("test@example.com");
  cy.get("input[name=password]").type("password");
  cy.get("button[type=submit]").click();
});
```

---

## 🧠 Tips

* ✅ Use `/// <reference types="cypress" />` at the top of spec files for IntelliSense.
* ✅ Group tests logically in folders (`auth`, `dashboard`, etc.)
* ✅ Use `cy.intercept()` to mock API calls if needed
* ✅ Use `.only` or `.skip` to focus or ignore a test

---

## ✅ Best Practices

* Use data-\* attributes for stable selectors (`cy.get('[data-cy=login-button]')`)
* Keep tests atomic and independent
* Avoid relying on internal implementation details
* Use `beforeEach()` for repeated setup logic

---

## 🔗 Resources

* [Cypress Documentation](https://docs.cypress.io/)
* [TypeScript Docs](https://www.typescriptlang.org/)
* [Testing Best Practices](https://testingjavascript.com/)

---

## 📄 License

MIT – feel free to use and adapt for your own projects.
