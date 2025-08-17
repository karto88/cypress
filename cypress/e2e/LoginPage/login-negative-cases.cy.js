

describe('login page - negative cases', () => {

    const errortext = "Required"

    it('login - with empty inputs', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
       cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get('.oxd-button',{timeout: 1000}).click();

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
    it('incorrectly username and empty password', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test')
         cy.get('.oxd-button').click();
        //  check error
         cy.get(':nth-child(3) > .oxd-input-group > .oxd-text', {timeout: 3000} )
        .invoke('text').should('equal',errortext)

    })

    it('incorrectly password and empty name', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test123')
         cy.get('.oxd-button').click();
        //  check error
         cy.get('.oxd-input-group > .oxd-text', {timeout: 3000} )
        .invoke('text').should('equal',errortext)
    })

    it('incorrectly name and correctly password', () => {

       cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('admin123')
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()

        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
        .and('contain','Invalid credentials')
    })

    it('incorrect password and correctly name', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test123456')
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()

        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
        .and('contain','Invalid credentials')

    })

    it('incorrect password and name', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()
            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test1234')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .type('test123456')
        cy.get('.oxd-button',{timeout:1000}).should('be.visible').click()

        cy.get('.oxd-alert-content > .oxd-text').should('be.visible')
        .and('contain','Invalid credentials')

    })

})