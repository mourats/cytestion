/* eslint-disable no-undef */
describe('My First Test', () => {
  it('Visits index page', () => {
    cy.visit('/').then((window) => {
      console.log(window.document.activeElement.innerHTML);
    });
    cy.get('div[id="rc-tabs-1-tab-despesa"]', { timeout: 10000 }).click();
  });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});