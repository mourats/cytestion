import './commands';
import './test-setup';

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
const failApiExpectTest =
  /Waiting for pending API requests: expected [0-9]+ to equal 0/;

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

Cypress.on('fail', (err) => {
  if (failApiExpectTest.test(err.message)) {
    return false;
  }
  throw err;
});
