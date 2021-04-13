Cypress.Commands.add('writeContent', (actualId, window) => {
  cy.writeFile(`tmp/${actualId.join('->')}`, window.document.body.outerHTML);
});

Cypress.Commands.add(
  'clearThenType',
  { prevSubject: true },
  (subject, text) => {
    cy.wrap(subject).clear().type(text);
  }
);

Cypress.Commands.add('clickIfExist', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible')) {
          $id.click();
          cy.wait(200);
        }
      });
    }
  });
});

Cypress.Commands.add('clickIfExistClass', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then((classId) => {
        classId[0].click();
      });
      cy.wait(200);
    }
  });
});
