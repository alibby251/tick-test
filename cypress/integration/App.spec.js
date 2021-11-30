
describe('NASA API Demo tests', () => {
  it('Visit the site', () => {
    cy.visit('http://localhost:3000');
  })

  it('has the correct title', () => {
    cy.get('h1').contains("NASA API Demo");
  })

  it('has 2 checkboxes', () => {
    cy.get('input[type="checkbox"]').should('have.length', 2);
  })

  // Example of test that fails (deliberate) - correct answer would be 100, not 10
  it('enter the phrase "orion" in the input field', () => {
    cy.get('#root > div > input').type("orion");
    cy.get('#root > div > div:nth-child(4) > a').should('have.length', 10);
  })
})