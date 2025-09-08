import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    /*setupNodeEvents(on, config) {
      // implement node event listeners here
    },*/
    baseUrl: "https://test-qa.macollecte.fr/b/my-donation?_cv=1",
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{ts,js}",
  },
});
