

/// <reference types="cypress" />

describe ('file uploads', () => {

    it.only('single file upload whit', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile('Profile.pdf');
        cy.get('#file-submit').click();
        
        cy.get('.example h3').should('have.text','File Uploaded!')
    })

     it('rename file upload ', () => {

        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#file-upload').attachFile({filePath:'Profile.pdf', fileName:'new doc'});
        cy.get('#file-submit').click();
        cy.get('.example h3').should('have.text','File Uploaded!')
        cy.get('#uploaded-files').should('have.text', 'new doc')
    })

})