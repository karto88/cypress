

describe('My First Test', () => {

    it ('implicit assertions', () =>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        //cy.url().should('include', 'php?id_category')
        //cy.url().should('eq','http://www.automationpractice.pl/index.php?id_category=8&controller=category')
        //cy.url().should('contain','onpractice.pl')

        cy.url().should('include', 'orangehrmliv')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('not.contain','asdasdsada')

        cy.title().should('include','ange')
        .and('eq','OrangeHRM').and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')

    }) 
   
 })