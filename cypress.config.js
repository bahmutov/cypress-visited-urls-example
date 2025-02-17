const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')
// https://github.com/bahmutov/cypress-visited-urls
const cypressVisitedUrls = require('cypress-visited-urls')

module.exports = defineConfig({
  defaultBrowser: 'electron',
  e2e: {
    // baseUrl, etc
    env: {
      visitedUrls: {
        // collect each URL the test runner visits
        // https://glebbahmutov.com/blog/collect-tested-urls/
        collect: true,
        urlsFilename: 'cypress-visited-urls.json',
      },
    },

    setupNodeEvents(on, config) {
      cypressSplit(on, config)
      cypressVisitedUrls(on, config)
      // return the config object
      return config
    },
  },
})
