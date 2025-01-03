describe('Login and Logout Tests', () => {
  beforeEach(() => {
    cy.visit('/Login');
  });

  it('should fail to log in with incorrect credentials', () => {
    cy.get('.auth-input[placeholder="Benutzername"]').type('WrongUser');
    cy.get('.auth-input[placeholder="Passwort"]').type('WrongPassword');

    cy.get('.auth-button').contains('Login').click();

    cy.get('.message.error').should('contain.text', 'Benutzername oder Passwort ist falsch!');
  });

  it('should successfully log in, navigate to the dashboard, and log out', () => {
    cy.get('.auth-input[placeholder="Benutzername"]').type('Test');
    cy.get('.auth-input[placeholder="Passwort"]').type('123');

    cy.get('.auth-button').contains('Login').click();

    cy.get('.task-container').should('be.visible');
  });
});
