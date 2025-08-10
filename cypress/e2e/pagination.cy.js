
/// <reference types="cypress" />

describe('paginatio test', () => {

    beforeEach(() => {
        cy.visit('https://testautomationpractice.blogspot.com/')
    })

    it('pagination', () => {
        
        
        cy.get('#productTable tbody tr').should('have.length', 5);
        cy.get('#pagination a').contains('2').click()
        cy.get('#productTable tbody tr td ').find('input[type="checkbox"]').eq(2)
        .check().should('be.checked')
        cy.wait(3000)

       const nametable = 'Gaming Console';
    cy.get('#productTable tbody tr td').should('contain.text', nametable)

    })

it('კალენდარში თარიღის არჩევა', () => {
  
  cy.get('#datepicker').click().should('be.visible')

  //  რიცხვის არჩევა
  cy.contains('.ui-datepicker-calendar td a', '8').click()
  // ასეშენის ჩეკი არჩეულ რიცხვზე
  cy.get('#datepicker').should('have.value', '08/08/2025')

      cy.get('#txtDate').click()
      cy.get(':nth-child(1) > :nth-child(6) > .ui-state-default').click()
      cy.get('#txtDate').should('have.value', '01/08/2025')

})

    it('ერთი ფაილის ატვირთვა', () => {
        cy.get('#singleFileInput').attachFile('design-medium.jpg');
        cy.get('#singleFileForm > [type="submit"]').click();
        cy.wait(2000)
        cy.get('#singleFileStatus').should('contain.text', 'design-medium')
    })

    it('რამოდეიმე ფაილის ატვირთვა', () => {
        cy.get('#multipleFilesInput').attachFile(['Profile.pdf', 'design-medium.jpg']);
        cy.get('#multipleFilesForm > [type="submit"]').click();
        cy.wait(1000)
        cy.get('#multipleFilesStatus').should('contain.text', 'design' && 'Profile')
    } )
    
    it.only('დროფდაუნში არჩევა და სქროლი', ()=> {
        cy.get('#comboBox').click()
        cy.get(':nth-child(90)').scrollIntoView();
        cy.get(':nth-child(90)').click().should('have.text', 'Item 90')
    })
})