describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should should change the total when adding numbers entered', () => {
    cy.get('#number4').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '5')
  })

  it('should should change the total when subtracting numbers entered', () => {
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should should change the total when multiplying numbers entered', () => {
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '10')
  })

  it('should should change the total when dividing numbers entered', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  })


  it ('should concatenate multiple operations together', () => {
  cy.get('#number8').click();
  cy.get('#operator-multiply').click();
  cy.get('#number8').click();
  cy.get('#operator-multiply').click();
  cy.get('#number8').click();
  cy.get('#operator-multiply').click();
  cy.get('#number8').click();
  cy.get('#operator_add').click();
  cy.get('#number9').click();
  cy.get('#operator-equals').click();
  cy.get('.display').should('contain', '4105')
  })


})