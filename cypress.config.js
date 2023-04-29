const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity:false, 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:10000,
    watchForFileChanges:false,
    'baseUrl':'https://pushing-front.vercel.app/'

  },
  env:{
    user:"pushingit",
    password:"123456!"
  }
});
