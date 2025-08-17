
const {rendomname} = require  ('../../support/generate name.js');
import {selectDropdown} from '../../support/commands.js'

const username = 'david';


describe('admin page - create', () => {

    it.only('create admin', () => {

        cy.createAdminUser();

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

describe('delete admin', () => {

    it('delete admin with delete button', () => {

    cy.createAdminUser();

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        

// find delete button with user name
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').first().click();
// delete button
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist')
        
    })

    it('delete admin with check box', () => {

        cy.createAdminUser();

 // find delete button with user name - and delete with check box
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row').find('span.oxd-checkbox-input').click()

        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click();
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();

//check deleted user
         cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist');

    }) 
})    


describe ('edit admin', () => {

    it('edit user rules and status', () => {

        cy.createAdminUser();

    // edit button
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();

    //edit info page    
        selectDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.wait(3000)
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]')
        .contains('ESS').click({force:true})

        selectDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div[2]')
        .contains('Disabled').click({force: true})
        cy.get('.oxd-button--secondary').click();

    const infotext = ["Disabled","ESS","david"]
        infotext.forEach(name => {
         cy.get('.oxd-table-body').contains(name)
        .should('be.visible');
        })

        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').first().click();
// delete button
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist')

     
    
    })

    it('change password - admin', () => {

        cy.createAdminUser();
        
        // edit button
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();
        cy.get('.oxd-checkbox-input > .oxd-icon').click();
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin1234')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin1234')
        cy.get('.oxd-button--secondary').click()
        cy.contains('Success').should('be.visible')

         // find delete button with user name - and delete with check box
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row').find('span.oxd-checkbox-input').click()

        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click();
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();

//check deleted user
         cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist');

    })

    it('change admin name', () => {

        cy.createAdminUser();


        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').last().click();
        cy.get(':nth-child(2) > .oxd-input').clear().type('giorgi');
        cy.get('.oxd-button--secondary').click();

     const updatename = "giorgi" 
  
       cy.contains('.oxd-table-body > div', updatename).should('exist');

// find delete button with user name - and delete with check box
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(updatename)
        .parents('.oxd-table-row').find('span.oxd-checkbox-input').click()

        cy.get('.orangehrm-horizontal-padding > div > .oxd-button').click();
        cy.get('.orangehrm-modal-footer > .oxd-button--label-danger').click();

//check deleted user
         cy.get('.oxd-table-body > div').filter(`:contains("${updatename}")`)
        .should('not.exist');

    })

})

    