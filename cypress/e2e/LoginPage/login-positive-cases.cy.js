
///<reference types="cypress" />

describe('Login Page', () => {

    it('Login Page With Correct User', () => {

        cy.loginapp('Admin','admin123');
    })
})