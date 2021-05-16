describe('Automatic generated test file to click on elements on the page', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.wait(200);
  });
  //--CODE--
  it('Visits index page', () => {
    const actualId = ['root'];
    cy.writeContent(actualId);
    cy.get('@consoleError').should('not.be.called');
  });
  //--CODE--
  after(() => {
    cy.exec('yarn start-generate', { timeout: 600000 });
  });
});
