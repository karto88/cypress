/// <reference types="cypress" />

import Login from '../../../PageObject/LoginPage.js'


describe('amin create job', () => {

    const jobtext = "qa manual tester"
    const renametitle = "qa manual software tester"

    it('create job', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        
        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton()

       cy.createjob();

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

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    //job dropdown 
        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(0).click()

       cy.deletejob(jobtext);

       cy.contains('.orangehrm-container div', 'qa manual tester', {timeout:5000})
        .should('not.exist')
    
    })

    it('rename job title', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton()

        cy.createjob();

        cy.get('.orangehrm-container', {timeout:5000}).find('div').contains(jobtext)
        .should('be.visible')
    //edit button
        cy.get('.orangehrm-container', { timeout: 5000 })
        .contains('div', jobtext).closest('div.oxd-table-row')           
        .find('.oxd-table-cell-actions button').eq(1).click()

        cy.get(':nth-child(2) > .oxd-input').clear().type('qa manual software tester')
        cy.get('.oxd-button--secondary').click()

        cy.get('.orangehrm-container', {timeout:5000}).find('div').contains(renametitle)
        .should('be.visible')

        cy.deletejob(renametitle)

    })

    it('edit description', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        const login = new Login();
        login.setusername('Admin');
        login.setpassword('admin123')
        login.loginbutton();

        cy.createjob();


        cy.get('.orangehrm-container', {timeout:5000}).find('div').contains(jobtext)
        .should('be.visible')
    //edit button
        cy.get('.orangehrm-container', { timeout: 5000 })
        .contains('div', jobtext).closest('div.oxd-table-row')           
        .find('.oxd-table-cell-actions button').eq(1).click()

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-textarea')
        .clear().type('The average salary for a Software Manual' +
             'QA Engineer in the US is around $100,970 per year,' 
             + ' with an hourly wage of $49. Salaries can range from $79,500' 
             + 'to $140,500 annually, and $38 to $67 hourly, depending on')
        cy.get('.oxd-button--secondary').click();  

            cy.contains('.orangehrm-container div','The average salary for a Software', {timeout:5000})
        .should('exist').and('be.visible');

        cy.deletejob(jobtext)


    })

    it('click show more', () => {

         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         const login = new Login();
         login.setusername('Admin')
         login.setpassword('admin123')
         login.loginbutton()

         cy.createjob();

         cy.get('.orangehrm-container', {timeout:5000}).contains('div', jobtext)
         .parents('.oxd-table-card').find('.oxd-table-card-cell-show-more').click()

        cy.contains('.orangehrm-container','testing, identifyin',{timeout:5000})
        .should('include.text', 'testing, identifyin')

    })

    it.only('click show less', () => {

         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

         const login = new Login();
         login.setusername('Admin')
         login.setpassword('admin123')
         login.loginbutton()

         cy.createjob();

    //click show-more
         cy.get('.orangehrm-container', {timeout:5000}).contains('div', jobtext)
         .parents('.oxd-table-card').find('.oxd-table-card-cell-show-more').click()
    
    //click show-less
          cy.get('.orangehrm-container', {timeout:5000}).contains('div', jobtext)
         .parents('.oxd-table-card').find('.oxd-table-card-cell-show-more').click()

        cy.get('.orangehrm-container',{timeout:5000})
        .should('not.include.text', 'testing, identifyin')

        cy.deletejob();

    })


})


