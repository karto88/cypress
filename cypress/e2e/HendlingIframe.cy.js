/// <reference types="cypress" />

describe('Hendling Iframe', () => {
    it('handling', () => {
        cy.visit('https://the-internet.herokuapp.com/iframe')

        const iframe = cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.clear().type("welcome")
    })
})