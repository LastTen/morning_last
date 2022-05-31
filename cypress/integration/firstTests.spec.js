/// <reference types="cypress" />

describe('User can', () => {
  it('registr', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();

    cy.get('#sign-username').type('Qwerty');
    cy.get('#sign-password').type('Qa1@345678');
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
  });

  it('registration', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#login2').click();

    cy.get('#loginusername').type('Qwerty');
    cy.get('#loginpassword').type('Qa1@345678');
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();

  });


});
