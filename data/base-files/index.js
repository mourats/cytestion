import './commands';

Cypress.on('window:before:load', (win) => {
  cy.stub(win.console, 'error', (msg) => {
    cy.now('task', 'error', msg);
    throw new Error(msg); // all we needed to add!
  }).as('consoleError');

  cy.stub(win.console, 'warn', (msg) => {
    cy.now('task', 'warn', msg);
  });
});
