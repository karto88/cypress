

describe('კომანდ დაწერული ფუნქციის გამოძახება', () => {
    
      beforeEach(() => {
    cy.login() 
  })

    it ('implicit assertions', () =>{
        
        let expname = "Cat Smelly"

        cy.get('.oxd-userdropdown-name').then ((correctlyname)=>{
            let actname = correctlyname.text()
            //bdd style
            expect(actname).to.equal(expname)
            

            // tdd style
            //assert.equal(actname,expname)
            //assert.notEqual(actname,expname)
        })

    })
   
 })
