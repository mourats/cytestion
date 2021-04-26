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
      cy.get(element)
        .first()
        .then(($id) => {
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
      cy.get(element).first().click();
      cy.wait(200);
    }
  });
});

Cypress.Commands.add('fillInput', (element, value) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible')) {
          cy.get(element).click().clearThenType(value);
        }
      });
    }
  });
});

Cypress.Commands.add('fillInputSelect', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible')) {
          cy.get(element).click({ force: true }).wait(50).type('{enter}');
        }
      });
    }
  });
});

Cypress.Commands.add('fillInputDate', (element, classToPick) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible')) {
          cy.get(element).click();
          cy.clickIfExistClass(classToPick);
        }
      });
    }
  });
});

Cypress.Commands.add('submitIfExist', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).first().submit();
      cy.wait(200);
    }
  });
});
