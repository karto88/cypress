
class Login {

    setUserName (username)
    {
        cy.get('input[placeholder="Username"]').type(username)
    }
     setPassword (password)
    {
        cy.get('input[placeholder="Password"]').type(password)
    }
     selectButton (select)
    {
        cy.get('button[type="submit"]').click()
    }
}
export default Login;