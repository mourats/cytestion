describe('Automatic generated test file to click on elements on the page', () => {
  //--CODE--
  it('Visits index page', () => {
    const parentId = '';
    const actualId = 'root';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->app', () => {
    const parentId = 'root';
    const actualId = 'app';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="app"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-welcome', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-welcome';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-welcome"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-user';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-paymentType';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-despesa';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-renda';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-2-tab-01/2021', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-2-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-2-tab-01/2021"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-user->ant-btn ant-btn-primary', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'ant-btn ant-btn-primary';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-user->ant-btn ant-btn-icon-only', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'ant-btn ant-btn-icon-only';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-user->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-paymentType->ant-btn ant-btn-primary', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'ant-btn ant-btn-primary';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-paymentType->ant-btn ant-btn-icon-only', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'ant-btn ant-btn-icon-only';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-paymentType->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-despesa->ant-btn ant-btn-primary', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'ant-btn ant-btn-primary';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-despesa->ant-btn ant-btn-icon-only', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'ant-btn ant-btn-icon-only';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-despesa->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-renda->ant-btn ant-btn-primary', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'ant-btn ant-btn-primary';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-renda->ant-btn ant-btn-icon-only', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'ant-btn ant-btn-icon-only';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class rc-tabs-1-tab-renda->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on element ant-btn ant-btn-primary->rcDialogTitle0', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'rcDialogTitle0';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExist('[id="rcDialogTitle0"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class ant-btn ant-btn-primary->ant-btn ant-btn-primary btn', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'ant-btn ant-btn-primary btn';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-primary->nome-sobrenome-email and submit', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'nome-sobrenome-email';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Elinor');
cy.get('[id="sobrenome"]').click().clearThenType('Ella');
cy.get('[id="email"]').click().clearThenType('Elta.Gibson@yahoo.com');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element ant-btn ant-btn-icon-only->rcDialogTitle0', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'rcDialogTitle0';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExist('[id="rcDialogTitle0"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class ant-btn ant-btn-icon-only->ant-btn ant-btn-primary btn', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'ant-btn ant-btn-primary btn';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-icon-only->nome-sobrenome-email and submit', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'nome-sobrenome-email';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Wilmer');
cy.get('[id="sobrenome"]').click().clearThenType('Peyton');
cy.get('[id="email"]').click().clearThenType('Ned_Dibbert63@yahoo.com');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on class ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn', () => {
    const parentId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    const actualId = 'ant-btn';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Click on class ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn ant-btn-dangerous', () => {
    const parentId = 'ant-btn ant-btn-danger ant-btn-icon-only btn-action';
    const actualId = 'ant-btn ant-btn-dangerous';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-dangerous"]');
      cy.writeContent(parentId, actualId, window);
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-primary->nome-diaVencimentoPadrao and submit', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'nome-diaVencimentoPadrao';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Patrick');
cy.get('[id="diaVencimentoPadrao"]').click().clearThenType('5');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-icon-only->nome-diaVencimentoPadrao and submit', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'nome-diaVencimentoPadrao';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Marquise');
cy.get('[id="diaVencimentoPadrao"]').click().clearThenType('2');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-primary->nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo and submit', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Oren');
cy.get('[id="descricao"]').click().clearThenType('Samoa');
cy.get('[id="valor"]').click().clearThenType('6');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="tipoPagamentoId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="parcelas"]').click().clearThenType('6');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-icon-only->nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo and submit', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Sally');
cy.get('[id="descricao"]').click().clearThenType('microchip');
cy.get('[id="valor"]').click().clearThenType('1');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="tipoPagamentoId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="parcelas"]').click().clearThenType('10');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-primary->nome-descricao-valor-usuarioId-periodo and submit', () => {
    const parentId = 'ant-btn ant-btn-primary';
    const actualId = 'nome-descricao-valor-usuarioId-periodo';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Domenico');
cy.get('[id="descricao"]').click().clearThenType('Direct');
cy.get('[id="valor"]').click().clearThenType('10');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Filling values ant-btn ant-btn-icon-only->nome-descricao-valor-usuarioId-periodo and submit', () => {
    const parentId = 'ant-btn ant-btn-icon-only';
    const actualId = 'nome-descricao-valor-usuarioId-periodo';
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Erich');
cy.get('[id="descricao"]').click().clearThenType('payment');
cy.get('[id="valor"]').click().clearThenType('6');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  after(() => {
    // cy.exec('npm run generate-files');
  });
});
