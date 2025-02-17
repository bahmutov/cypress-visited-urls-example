/// <reference types="cypress" />

describe('The home page', () => {
  it('goes using the link', () => {
    cy.visit('/public/index.html')
    cy.contains('h1', 'Homepage')
      .log('**check collected urls**')
      .then(() => {
        const urls = Cypress.env('visitedUrlsSet')?.values().toArray()
        if (urls) {
          expect(urls, 'urls').to.deep.equal(['/public/index.html'])
        }
      })
  })
})
