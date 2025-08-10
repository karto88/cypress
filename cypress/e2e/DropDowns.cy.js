
/// <reference types="cypress" />

describe ('რეგისტრაცია', () => {

    it('სწორი მონაცემების შეყვანა', () => {


        cy.visit('https://patient.onlineclinic.ge/auth/login', {
            failOnStatusCode: false
          });
          cy.get('.OC_text_view_green500').contains('რეგისტრაცია')
          .click()
          cy.xpath('//*[@id="root"]/div[2]/div/div[3]/label[1]/div/div[1]')
          .type('დავით')
          cy.xpath('//*[@id="root"]/div[2]/div/div[3]/label[2]/div/div[1]')
          .type('კარტოზია')
          cy.get(':nth-child(4) > .OC_flex_direction_column > :nth-child(1) > .OC_select_selected')
          .click()
          cy.get('.OC_select_options > .OC_input_container_wrapper > .OC_input_wrapper > .OC_input_container')
          .type('საქართველო')
          cy.get(':nth-child(4) > .OC_flex_direction_column > :nth-child(1) > .OC_select_option_container > .OC_select_options > .OC_select_option_controller > .OC_select_option > .OC_text_view')
          .click()
          cy.xpath('//*[@id="root"]/div[2]/div/div[3]/label[3]/div/div[1]')
          .type('352435243')
          cy.xpath('//*[@id="root"]/div[2]/div/div[3]/label[4]/div/div[1]')
          .type('29 08 1988')
          cy.get(':nth-child(7) > .OC_flex_direction_column > :nth-child(1) > .OC_select_selected')
          .click()
          cy.contains('მამრობითი').click()
          cy.get('[type="checkbox"]').check().should('be.checked')
          cy.get('.OC_card > .OC_flex_gap_12 > .OC_button_primary')
          .click()


          const textactual = "მობილურის ნომერი"
          cy.get('.OC_mobile_num_input > .OC_text_view_title6')
          .then((text1) => {
              const exptext = text1.text()
              expect(exptext).to.equal(textactual)
          })
 
        
    })

    

})