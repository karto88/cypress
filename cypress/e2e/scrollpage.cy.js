
/// <reference types="cypress" />

describe('scroll page', () => {
    it('scroll', () => {
cy.visit('https://onlineclinic.ge');
cy.get('[href="/doctors/1"] > .OC_flex_spacing_8').scrollIntoView();
cy.get('[href="/doctors/1"] > .OC_flex_spacing_8').should('be.visible');
        
    })

    
})