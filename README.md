# cypress-visited-urls-example

An example project for:

- [cypress-visited-urls](https://github.com/bahmutov/cypress-visited-urls) plugin
- [cypress-split](https://github.com/bahmutov/cypress-split) plugin

## Visited URLs collection

This example projects collects every URL visited by every test using the [cypress-visited-urls](https://github.com/bahmutov/cypress-visited-urls) plugin. By default, URLs are not collected, they are collected when running on CI only, see [cypress.config.js](./cypress.config.js) file. The tests run in parallel on CI, and the results are merged into a single visited URLs file, see [ci.yml](./.github/workflows/ci.yml) file.

The result is committed back to the repo and is available as [cypress-visited-urls.json](./cypress-visited-urls.json)
