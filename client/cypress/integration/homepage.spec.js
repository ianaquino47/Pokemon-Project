describe('renders the home page', () => {
  it('renders correctly', () => {
    cy.visit('/');
  });
  it('Searches a pokemon successfully', () => {
    cy.visit('/');
    cy.get('.search-input').type('Moltres').should('have.value', 'Moltres');
    cy.get('.submit-button').click();
    cy.get('.name').should('have.text', 'moltres');
    cy.get('.pokemon-badge')
      .should('have.attr', 'src')
      .should('include', 'legendary');
    cy.get('.search-item').should('have.text', 'moltres');
  });

  it('Should render correct message if pokemon not found', () => {
    cy.visit('/');
    cy.get('.search-input').type('asdfgh').should('have.value', 'asdfgh');
    cy.get('.submit-button').click();
    cy.get('.search-item').should('have.text', 'asdfgh');
    cy.get('.not-found').contains('Pokemon not found!')
    cy.get('.not-found').contains('Try again.')
  });
});
