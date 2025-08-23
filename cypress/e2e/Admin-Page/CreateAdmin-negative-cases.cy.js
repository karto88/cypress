
const {rendomname} = require ('../../support/generate name.js');
import { selectDropdown } from '../../support/commands.js';

const username = "david"

describe('change admin password', () => {

    it('change admin passwor least 7 characters', () => {


         cy.createAdminUser();

         // edit button
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();

        cy.get('.oxd-checkbox-input > .oxd-icon').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('a1234')

        cy.get('.user-password-cell > .oxd-input-group > .oxd-text').should('be.visible')
        .and('have.text','Should have at least 7 characters')


    })

    it('change password -  without number', () => {

        cy.loginapp('Admin','admin123');

        cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();

        cy.get('.oxd-checkbox-input > .oxd-icon').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('QWERTZUI')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('QWERTZUI')
        cy.wait(2000)
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
        .and('contain.text','Your password must contain minimum 1 lower-case letter')



    })
     
    it('change password - Passwords do not match', () => {

        cy.loginapp('Admin','admin123');   
        
         cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();

        cy.get('.oxd-checkbox-input > .oxd-icon').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('qwerty123')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('qwerty12')
        cy.wait(2000)
        cy.get('.oxd-input-group > .oxd-text').should('be.visible')
        .and('contain.text','Passwords do not match')
    
    })

    it('delete admin user', () => {

        cy.loginapp('Admin','admin123');



         cy.get(':nth-child(1) > .oxd-main-menu-item').click()

        // find delete button with user name
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').first().click();
// delete button
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist')

        //check deleted user
         cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist');



    })

})