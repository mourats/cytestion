describe('Automatic generated test file to click on elements on the page', () => {
  //--CODE--
  it('Visits index page', () => {
    const actualId = ['root'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.writeContent(actualId, window);
      cy.get('@consoleError').should('not.be.called');
    });
  });
  //--CODE--
  after(() => {
    cy.exec('yarn start-generate', { timeout: 600000 });
  });
});
