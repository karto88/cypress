
///<reference types="cypress" />

describe('Login Page', () => {

    it('Login Page With Correct User', () => {

        cy.loginapp('Admin','admin123');

        const Dashboard = "Dashboard"
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').invoke('text')
        .should('equal',Dashboard)
    })
})