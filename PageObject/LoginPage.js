
class Login {

    setusername (username1) {
        cy.get('[name="username"]').type(username1)
    }

    setpassword(password1){
        cy.get('[name="password"]').type(password1)
    }
    loginbutton(login){
        cy.get('[type="submit"]').click()
    }
} 

export default Login