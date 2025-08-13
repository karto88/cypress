// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add('login', (email) => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[name="username"]').type('Admin')
  cy.get('[name="password"]').type('admin123')
  cy.get('[type="submit"]').click()
})
  
//----------------------
Cypress.Commands.add("loginapp", (email,password) => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[name="username"]').type(email)
  cy.get('[name="password"]').type(password)
  cy.get('[type="submit"]').click()
})

//-------------------
 export function selectDropdown(selector, optiontext){
    cy.get(selector).click();
    if(optiontext) {
      cy.contains(optiontext).click();
    }
}


//------------------

Cypress.Commands.add('createAdminUser', () => {

    cy.loginapp('Admin','admin123');

    cy.get(':nth-child(1) > .oxd-main-menu-item').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();

    // user role
    selectDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]')
      .should('contain','Admin').click()

    // employee name
    cy.get('.oxd-autocomplete-text-input > input').type('Rahul');
    cy.wait(5000)
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]')
      .first().click();

    // status
    selectDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div[2]')
      .should('contain','Disabled').click();

    // user name
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input').type('david');

    // password
    cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('david123');

    // confirm password
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('david123');

    // save button
    cy.get('.oxd-button--secondary').click();

    const username = 'david';
    cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
      .should('be.visible');
});

 