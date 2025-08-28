
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


})