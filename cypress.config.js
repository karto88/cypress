const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "xh4zvh",
  reporter: "cypress-mochawesome-reporter", // HTML რეპორტერი

  e2e: {
    baseUrl: "https://onlineclinic.ge/",
    watchForFileChanges: false, // გამორთავს ავტომატურ გაშვებას

    setupNodeEvents(on, config) {
      // Node event listener-ები
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },

  viewportWidth: 1920,
  viewportHeight: 1080,
});
