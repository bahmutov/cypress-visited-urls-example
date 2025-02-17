const { defineConfig } = require('cypress')
// https://github.com/bahmutov/cypress-split
const cypressSplit = require('cypress-split')
// https://github.com/bahmutov/cypress-visited-urls
const cypressVisitedUrls = require('cypress-visited-urls/src/plugin')

module.exports = defineConfig({
  defaultBrowser: 'electron',
  e2e: {
    // baseUrl, etc
    env: {
      visitedUrls: {
        // by default, do not collect any URLS
        collect: false,
        urlsFilename: 'cypress-visited-urls.json',
      },
    },

    setupNodeEvents(on, config) {
      // only collect visited URLs on CI
      if (process.env.CI) {
        console.log('setting to collect visited urls on CI')
        config.env.visitedUrls.collect = true
      }

      cypressSplit(on, config)
      cypressVisitedUrls(on, config)
      // return the config object
      return config
    },
  },
})
