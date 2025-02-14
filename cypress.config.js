import { defineConfig } from "cypress";

export default defineConfig({
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://gestore-balancer-sustentacao.sistemas.ufrn.br/gestore-web/',
    testIsolation: false
  },
});
