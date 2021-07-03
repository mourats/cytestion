Cypress.Commands.add('writeContent', (actualId) => {
  cy.window().then((win) => {
    cy.writeFile(`tmp/${actualId.join('->')}`, win.document.body.outerHTML);
  });
});

Cypress.Commands.add(
  'clearThenType',
  { prevSubject: true },
  (subject, text) => {
    cy.wrap(subject).clear().type(text).should('have.value', text);
  }
);

Cypress.Commands.add('clickIfExist', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element)
        .first()
        .then(($id) => {
          if ($id.is(':visible') && !$id.is(':disabled')) {
            $id.click({ force: true });
            cy.waitUntilAllAPIFinished();
          }
        });
    }
  });
});

Cypress.Commands.add('clickIfExistClass', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).first().click({ force: true });
      cy.waitUntilAllAPIFinished();
    }
  });
});

Cypress.Commands.add('fillInput', (element, value) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible') && !$id.is(':disabled')) {
          cy.get(element).click({ force: true }).clearThenType(value);
        }
      });
    }
  });
});

Cypress.Commands.add('fillInputSelect', (element) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible') && !$id.is(':disabled')) {
          cy.get(element)
            .click({ force: true })
            .wait(50)
            .type('{downarrow}')
            .type('{enter}');
        }
      });
    }
  });
});

Cypress.Commands.add('fillInputDate', (element, classToPick) => {
  cy.get('body').then((body) => {
    if (body.find(element).length > 0) {
      cy.get(element).then(($id) => {
        if ($id.is(':visible') && !$id.is(':disabled')) {
          cy.get(element).click({ force: true });
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
      cy.waitUntilAllAPIFinished();
    }
  });
});

Cypress.Commands.add('waitUntilAllAPIFinished', () => {
  cy.get('body', { timeout: 60 * 1000, log: false }).should(() => {
    expect(
      cy._data.api.pendingAPICount,
      'Waiting for pending API requests'
    ).to.eq(0);
    cy.wait(50);
  });
});
