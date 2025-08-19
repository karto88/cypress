/// <reference types="cypress" />

import Login from '../../../PageObject/LoginPage.js'


describe('amin create job', () => {

    const jobtext = "qa manual tester"

    it('create job', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton()

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        //job dropdown 
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(0).click()

        cy.get('.oxd-button').click()

        cy.get(':nth-child(2) > .oxd-input').type('qa manual tester')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea')
        .type('We are looking for a  detail-oriented Manual QA Engineer to ensure' +
            'the quality of our web and mobile applications. The role involves writing and' +
             'executing test cases, performing exploratory testing, identifyin')
        
        cy.get('input.oxd-file-input').attachFile('Profile.pdf', { force: true });
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-textarea')
        .type('We are looking for a  detail-oriented Manual QA Engineer to ensure')
        cy.get('.oxd-button--secondary').click();

        cy.contains('Success').should('be.visible')

        cy.get('.orangehrm-container', {timeout:5000}).find('div').contains(jobtext)
        .should('be.visible')



    })

    it('delete job', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton();

         cy.get(':nth-child(1) > .oxd-main-menu-item').click()

    //job dropdown     
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(0).click()

        cy.get('.orangehrm-container', { timeout: 5000 })
        .contains('div', jobtext).closest('div.oxd-table-row')           
        .find('.oxd-table-cell-actions button').first().click()

        cy.get('.oxd-button--label-danger').click()

          cy.get('.orangehrm-container', {timeout:5000}).find('div').contains(jobtext)
        .should('not.be.visible')

    })
})


