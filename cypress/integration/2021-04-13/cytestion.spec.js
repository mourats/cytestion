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
  it('Click on element root->app', () => {
const actualId = ['root','app'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="app"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-welcome', () => {
const actualId = ['root','rc-tabs-1-tab-welcome'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-welcome"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user', () => {
const actualId = ['root','rc-tabs-1-tab-user'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa', () => {
const actualId = ['root','rc-tabs-1-tab-despesa'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda', () => {
const actualId = ['root','rc-tabs-1-tab-renda'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-2-tab-01-2021', () => {
const actualId = ['root','rc-tabs-2-tab-01-2021'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-2-tab-01/2021"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-primary', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-primary'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-icon-only', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-icon-only'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-danger ant-btn-icon-only btn-action'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-primary', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-primary'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-icon-only', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-icon-only'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-danger ant-btn-icon-only btn-action'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-primary', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-primary'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-icon-only', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-icon-only'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-danger ant-btn-icon-only btn-action'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-primary', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-primary'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-icon-only', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-icon-only'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-danger ant-btn-icon-only btn-action', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-danger ant-btn-icon-only btn-action'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-primary->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-primary','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-user->ant-btn ant-btn-primary->nome-sobrenome-email and submit', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-primary','nome-sobrenome-email'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Jayden');
cy.get('[id="sobrenome"]').click().clearThenType('Kayley');
cy.get('[id="email"]').click().clearThenType('Obie83@yahoo.com');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-icon-only->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-icon-only','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-user->ant-btn ant-btn-icon-only->nome-sobrenome-email and submit', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-icon-only','nome-sobrenome-email'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Frankie');
cy.get('[id="sobrenome"]').click().clearThenType('Terrill');
cy.get('[id="email"]').click().clearThenType('Garrick_Ruecker@gmail.com');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-user->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn ant-btn-dangerous', () => {
const actualId = ['root','rc-tabs-1-tab-user','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn ant-btn-dangerous'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-user"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-dangerous"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-primary->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-primary','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-primary->nome-diaVencimentoPadrao and submit', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-primary','nome-diaVencimentoPadrao'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Alda');
cy.get('[id="diaVencimentoPadrao"]').click().clearThenType('4');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-icon-only->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-icon-only','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-icon-only->nome-diaVencimentoPadrao and submit', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-icon-only','nome-diaVencimentoPadrao'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Dorothy');
cy.get('[id="diaVencimentoPadrao"]').click().clearThenType('3');
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-paymentType->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn ant-btn-dangerous', () => {
const actualId = ['root','rc-tabs-1-tab-paymentType','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn ant-btn-dangerous'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-paymentType"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-dangerous"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-primary->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-primary','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-despesa->ant-btn ant-btn-primary->nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo and submit', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-primary','nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Jessica');
cy.get('[id="descricao"]').click().clearThenType('Health');
cy.get('[id="valor"]').click().clearThenType('4');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="tipoPagamentoId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="parcelas"]').click().clearThenType('3');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-icon-only->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-icon-only','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-despesa->ant-btn ant-btn-icon-only->nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo and submit', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-icon-only','nome-descricao-valor-usuarioId-tipoPagamentoId-parcelas-periodo'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Jess');
cy.get('[id="descricao"]').click().clearThenType('Dollar');
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
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-despesa->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn ant-btn-dangerous', () => {
const actualId = ['root','rc-tabs-1-tab-despesa','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn ant-btn-dangerous'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-despesa"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-dangerous"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-primary->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-primary','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-renda->ant-btn ant-btn-primary->nome-descricao-valor-usuarioId-periodo and submit', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-primary','nome-descricao-valor-usuarioId-periodo'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary"]');
      cy.get('[id="nome"]').click().clearThenType('Elsie');
cy.get('[id="descricao"]').click().clearThenType('withdrawal');
cy.get('[id="valor"]').click().clearThenType('4');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-icon-only->ant-btn ant-btn-primary btn', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-icon-only','ant-btn ant-btn-primary btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-primary btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Filling values root->rc-tabs-1-tab-renda->ant-btn ant-btn-icon-only->nome-descricao-valor-usuarioId-periodo and submit', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-icon-only','nome-descricao-valor-usuarioId-periodo'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-icon-only"]');
      cy.get('[id="nome"]').click().clearThenType('Dalton');
cy.get('[id="descricao"]').click().clearThenType('Dollar');
cy.get('[id="valor"]').click().clearThenType('7');
cy.get('[id="usuarioId"]').click({ force: true }).wait(50).type('{enter}');
cy.get('[id="periodo"]').click();
    cy.clickIfExistClass('[class="ant-picker-cell-inner"]');;
cy.get('.ant-form').submit();
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element root->rc-tabs-1-tab-renda->ant-btn ant-btn-danger ant-btn-icon-only btn-action->ant-btn ant-btn-dangerous', () => {
const actualId = ['root','rc-tabs-1-tab-renda','ant-btn ant-btn-danger ant-btn-icon-only btn-action','ant-btn ant-btn-dangerous'];
    cy.visit('/').then((window) => {
      cy.wait(200);
      cy.clickIfExist('[id="rc-tabs-1-tab-renda"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-danger ant-btn-icon-only btn-action"]');
      cy.clickIfExistClass('[class="ant-btn ant-btn-dangerous"]');
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  after(() => {
    // cy.exec('npm run generate-files');
  });
});
