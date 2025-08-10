
describe('My First Test', () => {

     
         it ('positive2', ()=> {
          cy.visit("http://www.automationpractice.pl/index.php")

          //cy.get('#search_query_top').type('t-shirts') //id
          //cy.get('.search_query form-control ac_input').type('shirts') // class
          //cy.get("[name='search_query']").type('shirts') // attribute
          cy.get("input.search_query[name='search_query']").type('shirts') // სამი კომბინაცია (input ით იწყება)
          cy.get("[name='submit_search']").click()
          cy.get('.lighter').contains('shirts')
          
        
    
        })

        it ('xpath check with length', ()=> {
            cy.visit("http://www.automationpractice.pl/index.php")
            cy.get('.blockbestsellers').contains('Best Sellers').click()
            cy.get("#blockbestsellers").find('li').should('have.length', 6)
           
          })
        
      })