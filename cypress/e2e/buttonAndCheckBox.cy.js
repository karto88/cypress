
/// <reference types="cypress" />

describe ("check UI elements", () => {

it("cheking radio button", () => {
    cy.visit ("https://testautomationpractice.blogspot.com/")

    //visible radio button
    cy.get("[value='male']").should('be.visible')
    cy.get("[value='female']").should('be.visible')

    //click radio button
    cy.get("[value='male']").check().should('be.checked')
    cy.get("[value='female']").should('not.be.checked')

    //click check box
    cy.get('#monday').check().should('be.checked')
    cy.get('#thursday').check().should('be.checked')

      //unclick check box
    cy.get('#monday').uncheck().should('not.be.checked')
    cy.get('#thursday').uncheck().should('not.be.checked')
   
   //cy.get('input[type="checkbox"]').check().should('be.checked')
   cy.get('input[type="checkbox"]').first().check()
   cy.get('input[type="checkbox"]').last().check()
})

})