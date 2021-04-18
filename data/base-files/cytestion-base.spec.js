describe('Automatic generated test file to click on elements on the page', () => {
  //--CODE--
  it('Visits index page', () => {
    const actualId = ['root'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  after(() => {
    cy.exec('npm run generate-test');
  });
});
