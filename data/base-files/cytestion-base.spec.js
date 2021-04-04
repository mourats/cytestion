describe('Automatic generated test file to click on elements on the page', () => {
  //--CODE--
  const parentId = '';
  const actualId = 'root';
  it('Visits index page', () => {
    cy.visit('/').then((window) => {
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  after(() => {
    cy.exec('npm run generate-files');
  });
});
