
import Login from '../../../PageObject/LoginPage.js'

describe('pay grandes', () => {

    beforeEach(() => {

          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[name="username"]', { timeout: 10000 }).should('be.visible')

        const login = new Login();
        login.setusername('Admin')
        login.setpassword('admin123')
        login.loginbutton()
        
    })

    it('create pay grandes', () => {

        const name = Cypress.env('Grandesname')

        cy.createPayGrandes();

        cy.wait(3000)
        cy.get('.oxd-table-body', {timeout: 1000}, name).should('be.visible')

    })

    it('delete pay grandes', () => {

        const name =Cypress.env('Grandesname')

        cy.createPayGrandes();

        cy.get('.oxd-table-body button').eq(0).click()
        cy.get('.oxd-button--label-danger').click()
        cy.contains('.oxd-table-body', name).should('not.exist')
    })

    it.only('edit name pay grandes', () => {
        
        cy.createPayGrandes();

        cy.get('.oxd-table-body button').eq(1).click()
        cy.get(':nth-child(2) > .oxd-input').clear().type('test grandes')
        cy.get('.oxd-form-actions > .oxd-button--secondary').click()

        cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
        cy.get('.oxd-dropdown-menu').find('li').eq(1).click()
        cy.contains('.oxd-table-body', 'test grandes').should('not.exist')
        
    })


})