
/// <reference types="cypress" />
import Login from "../../../PageObject/LoginPage.js"

describe ('create job', () => {

    beforeEach(() => {

            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]', { timeout: 10000 }).should('be.visible')

            const login = new Login()
            login.setusername('Admin')
            login.setpassword('admin123')
            login.loginbutton()

        })

    const jobtext = "qa manual tester"


    it('admin create same job title', () => {

        //cy.get('.oxd-button').debug()
        cy.createjob();

        cy.wait(5000)
        cy.get('.oxd-button').should('be.visible').click()
        cy.get(':nth-child(2) > .oxd-input').type('qa manual tester')
        cy.contains('.oxd-input-group > .oxd-text', 'Already exists' , {timeout: 4000}).should('be.visible')
        
    })

    it('job input is empty', () => {

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(0).click()
        
        cy.get('.oxd-button').click()
        cy.get('.oxd-button--secondary').click()
        cy.contains('.oxd-input-group > .oxd-text', 'Required').should('exist')
         .and('be.visible')

        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(0).click()
        
        cy.deletejob(jobtext)


    })



})