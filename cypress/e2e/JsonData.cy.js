
/// <reference types="cypress" />


describe('fixture გამოყენება json ფაილით', () => {

  it ('login', () => {

    cy.fixture('example').then((data) => {

     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       
    data.forEach(userdata => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
        cy.get('.oxd-button').click();
        cy.wait(3000)

      
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', userdata.expected)
        
    });

        
    })
})

})