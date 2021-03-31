Cypress.Commands.add('writeContent', (actualId, window) =>
  cy.writeFile('tmp/' + actualId, window.document.body.outerHTML)
);
