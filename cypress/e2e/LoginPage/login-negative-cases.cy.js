

describe('login page - negative cases', () => {

    const errortext = "Required"

    it('login - with empty inputs', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-button').click();

        //cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('exist')
        //cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text','Required')
        //check error
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text')
        .invoke('text').then
        ((textcorrecty)  => {
            expect(textcorrecty).to.equal(errortext)
        })
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text', {timeout: 3000} )
        .invoke('text').should('equal',errortext)
    })
    it.only('incorrectly username', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test')
         cy.get('.oxd-button').click();
        //  check error
         cy.get(':nth-child(3) > .oxd-input-group > .oxd-text', {timeout: 3000} )
        .invoke('text').should('equal',errortext)

    })

    it('incorrectly email and empty name', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test123')
         cy.get('.oxd-button').click();
        //  check error
         cy.get('.oxd-input-group > .oxd-text', {timeout: 3000} )
        .invoke('text').should('equal',errortext)
    })

    it.only('incorrectly name', () => {

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123')
        cy.get('.oxd-button').click

    })
})