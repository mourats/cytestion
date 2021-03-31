/* eslint-disable no-undef */
describe('My First Test', () => {
  it('Visits index page', () => {
    cy.visit('/').then((window) => {
      console.log(window.document.body.outerHTML);
      cy.writeFile('tmp/message.txt', window.document.body.outerHTML);

      cy.exec('npm run generate-files').then((elem) => console.log(elem));

      cy.get('div[id="rc-tabs-1-tab-despesa"]', { timeout: 10000 })
        .click()
        .then((elem) => {
          cy.get('div[id="rc-tabs-1-panel-despesa"]').then((elem) =>
            cy.get('button.ant-btn').then((buttons) => {
              cy.get('[test-id="button-novo-1"]');

              console.log(buttons);
              Object.keys(buttons).forEach((button, idx) => {
                if (
                  buttons[button].className &&
                  buttons[button].className.includes('ant-btn')
                )
                  setTimeout(() => {
                    buttons[button].click();
                  }, idx * 1000);
                console.log(buttons[button]);
              });
            })
          );

          // console.log(window.document);
          cy.writeFile('tmp/message2.txt', window.document);
        });
      // console.log(window.document.body.innerHTML);
      // cy.writeFile('tmp/message2.txt', window.document.body.innerHTML);

      // console.log(
      //   elem.prevObject[0].defaultView.document.all['rc-tabs-1-panel-despesa']
      //     .innerHTML
      // );
      // console.log(elem.prevObject[0].defaultView.document);
    });
  });
});
