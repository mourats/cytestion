Cypress.Commands.add('writeContent', (parentId, actualId, window) => {
  cy.writeFile(`tmp/${parentId}-${actualId}`, window.document.body.outerHTML);
});

Cypress.Commands.add(
  'clearThenType',
  { prevSubject: true },
  (subject, text) => {
    cy.wrap(subject).clear().type(text);
  }
);
