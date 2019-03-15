describe('Get all spaces',function(){
  it('Has buttons showing all the spaces',function(){
    cy.visit('/')
    cy.get('#signUp').click()
    cy.get('#username').type("steve")
    cy.get('#email').type("username@email.com")
    cy.get('#password').type("abc123")
    cy.get('#sign-up').click()
    cy.get('#username').type("steve")
    cy.get('#password').type("abc123")
    cy.get('#sign-in').click()
    cy.get("#add-space-input").click()
    cy.get('#spaceName').type("221b Baker Street")
    cy.get('#spacePrice').type(100.00)
    cy.get('#spaceDescription').type("Stay in the home of the world famous detective")
    cy.get('#submitSpace').click()
    cy.get('#space221b Baker Street').should('contain', '221b Baker Street')
  })
})