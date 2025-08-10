
const {generateRandomEmail} = require ('../support/generatemail');


describe('RangeHRM login', () => {

  it('log in with correctly', () => {

    cy.loginapp('Admin','admin123')

    const username = 'Bhoomika rn'
    cy.get('.oxd-userdropdown-name').then((usernamecorrectly) => {
      const actualname = usernamecorrectly.text();
      expect(actualname).to.equal(username)
    }) 
  }) 

  it('live list - search with date', () => {
    cy.loginapp('Admin','admin123')
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Leave List')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]')
    .click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]/ul/li[2]')
    .should('have.text', 'February').click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[3]/div[3]')
    .click()
// end date არჩევა
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]/ul/li[8]')
    .should('have.text','August').click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[3]/div[1]')
    .click()
    cy.get('.oxd-button--secondary').click() // search

    const notfoundtext = 'No Records Found'
    cy.get('.orangehrm-header-container > .oxd-text').then((checknotfound) => {
      const exptext = checknotfound.text();
      expect(exptext).to.equal(notfoundtext)
    })

  })

  it('live list - Clicks next month button 4 times left', () => {

    cy.loginapp('Admin','admin123');
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Leave List')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click();
    

    for (let i = 0; i < 4; i++){
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/button[2]')
      .click();
    }
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/button[2]')
    .should('have.text','April')
  })

it('live list - Clicks next month button 4 times right', () => {

    cy.loginapp('Admin','admin123');
    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Leave List')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click();
    
    for (let i = 0; i < 4; i++){
      cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/button[2]')
      .click();
    }
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]/div/p')
    .should('have.text','December')
  })

  it('select all dropdowns', () => {

     cy.loginapp('Admin','admin123')

    cy.get(':nth-child(3) > .oxd-main-menu-item').click()
    cy.get('.oxd-table-filter-header-title > .oxd-text').should('have.text','Leave List')
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]')
    .click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]/ul/li[2]')
    .should('have.text', 'February').click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/div/div[2]/div/div[3]/div[3]')
    .click()
// end date არჩევა
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-date-wrapper > .oxd-date-input > .oxd-input')
    .click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/ul/li[1]/ul/li[8]')
    .should('have.text','August').click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div[2]/div/div[3]/div[1]')
    .click()

    //Show Leave with Status არჩევა
    cy.get('.oxd-multiselect-wrapper > .oxd-select-text').click()
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div[2]/div[5]')
    .should('have.text','Taken').click();

    //Leave Type dropdown არჩევა
    cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text')
    .click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div[2]/div[10]')
    .should('have.text','US - Personal').click();

    //Sub Unit dropdown არჩევა
    //let SubUnit = 'Marketing'
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text').click();
    cy.xpath('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[2]/div/div[2]/div/div[2]/div/div[2]/div[8]')
    .should('have.text','Marketing').click();
  
    
   cy.get('.oxd-button--secondary').click() // search
    const notfoundtext = 'No Records Found'
    cy.get('.orangehrm-header-container > .oxd-text').then((checknotfound) => {
      const exptext = checknotfound.text();
      expect(exptext).to.equal(notfoundtext)
    })

  })
  it.only ('write user info - contact details', () => {

   cy.loginapp('Admin','admin123')

   cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
   cy.get(':nth-child(2) > .orangehrm-tabs-item').click()
   cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type('Street 1')
   cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type('Street 2')
   cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type('tbilisi');
   cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type('tbilisi');
   cy.get(':nth-child(5) > .oxd-input-group > :nth-child(2) > .oxd-input')
   .type('32123')
   cy.get('.oxd-select-text').click()
   cy.contains('span', 'Georgia', { timeout: 10000 }).scrollIntoView().should('be.visible').click()
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('+995591000001')
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type('937277728');
    cy.get(':nth-child(6) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type('234-123-11')
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .clear().type(generateRandomEmail());
    cy.get(':nth-child(9) > .oxd-grid-3 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
    .type(generateRandomEmail());
    cy.wait(2000)
    cy.get('.oxd-form-actions > .oxd-button').click()
    
    //check info with toast
    cy.get('.oxd-toast').should('be.visible')
    })

})