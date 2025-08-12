
const {rendomname} = require  ('../../support/generate name.js');

describe('admin page', () => {

   function selectDropdown(selector, optiontext){
    cy.get(selector).click();
    if(optiontext) {
      cy.contains(optiontext).click();
    }
}

    it('create admin', () => {

        cy.loginapp('Admin','admin123');

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();

        //user role
        selectDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]')
        .should('contain','Admin').click()

        //empoyee name
        cy.get('.oxd-autocomplete-text-input > input',).type('Rahul',);
        cy.wait(5000)
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]')
        .first().click();

        // status
        selectDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div[2]')
        .should('contain','Disabled').click();

        //user name
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david');

        // password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david123')

        //confirm password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david123')

        //save button
        cy.get('.oxd-button--secondary').click();

const username = 'david';
      cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
      .should('be.visible')

    })

    it('delete admin', () => {

        cy.loginapp('Admin','admin123');

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        
const username = 'david';
// find delete button with user name
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .parents('.oxd-table-row') .find('button').first().click();
// delete button
        cy.get('.oxd-button--label-danger').click();
        cy.get('.oxd-table-body > div').filter(`:contains("${username}")`)
        .should('not.exist')
        
  
    })

    it.only('delete admin with check box', () => {

        cy.loginapp('Admin','admin123');

        cy.get(':nth-child(1) > .oxd-main-menu-item').click();
        cy.get('.orangehrm-header-container > .oxd-button').click();

        //user role
        selectDropdown(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div[2]')
        .should('contain','Admin').click()

        //empoyee name
        cy.get('.oxd-autocomplete-text-input > input',).type('Rahul',);
        cy.wait(5000)
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[2]/div/div[2]/div/div[2]')
        .first().click();

        // status
        selectDropdown(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
        cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div[2]')
        .should('contain','Disabled').click();

        //user name
        cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david');

        // password
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david123')

        //confirm password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('david123')

        //save button
        cy.get('.oxd-button--secondary').click();

 const username = 'david';
        cy.get('.oxd-table-body', { timeout: 10000 }).find('div').contains(username)
        .should('be.visible')


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