import './commands';
const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;

Cypress.on('uncaught:exception', (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

Cypress.on('window:before:load', (win) => {
  cy.stub(win.console, 'error', (msg) => {
    cy.now('task', 'error', msg);
    throw new Error(msg);
  }).as('consoleError');
});
