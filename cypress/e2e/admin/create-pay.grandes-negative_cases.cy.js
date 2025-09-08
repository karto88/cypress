
/// <reference types="cypress" />

import Login from "../../../PageObject/LoginPage";

describe('pay grandes - degative cases', () => {

    beforeEach(() => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]', { timeout: 10000 }).should('be.visible')

        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton()
    })

    it('name is empty', () => {

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(1).click()
        cy.get('.oxd-button').click()
        cy.get('.oxd-button--secondary').click()

        cy.contains('.oxd-input-group > .oxd-text', 'Required').should
        ('be.visible')

    })

    it.only('same name', () => {

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(1).click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('test grande')
        cy.get('.oxd-button--secondary').click()
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()
        cy.wait(3000)
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.oxd-topbar-body-nav > ul > :nth-child(2)').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(1).click()
        cy.get('.oxd-button').click()
        cy.get(':nth-child(2) > .oxd-input').type('test grande')
        cy.get('.oxd-button--secondary').click()

        cy.contains('.oxd-input-group > .oxd-text', 'Already exists')
        .should('be.visible')
       


    })
})