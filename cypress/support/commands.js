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
   
Cypress.Commands.add("loginapp", (email,password) => {
     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  cy.get('[name="username"]').type(email)
  cy.get('[name="password"]').type(password)
  cy.get('[type="submit"]').click()
})