describe('template spec', () => {


  it('Loads for the first time', () => {
    cy.visit('http://localhost:3000')
    cy.contains('jQuery is loaded').should('be.visible')
  })

  it('Try multiple times', () => {
    cy.visit('http://localhost:3000')
    Cypress._.times(50, () => {
      cy.reload()
      cy.contains('jQuery is loaded').should('be.visible')
    })
  })
})