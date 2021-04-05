describe('Automatic generated test file to click on elements on the page', () => {
  //--CODE--
  it('Visits index page', () => {
    const parentId = '';
    const actualId = 'root';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.writeContent(actualId, window);
    });
  });
  //--CODE--
  it('Click on element app', () => {
    const parentId = 'root';
    const actualId = 'app';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="app"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-tab-welcome', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-welcome';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-tab-user', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-user';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-tab-paymentType', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-paymentType';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-tab-despesa', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-despesa';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-tab-renda', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-tab-renda';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-1-panel-welcome', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-1-panel-welcome';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-panel-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-2-tab-01/2021', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-2-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-2-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-2-tab-02/2021', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-2-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-2-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-2-tab-03/2021', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-2-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-2-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-2-panel-01/2021', () => {
    const parentId = 'root';
    const actualId = 'rc-tabs-2-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-2-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-more', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-more';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-more"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-panel-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-welcome';
    const actualId = 'rc-tabs-4-panel-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-welcome"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-more', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-more';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-more"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-panel-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-user';
    const actualId = 'rc-tabs-4-panel-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-user"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-more', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-more';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-more"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-panel-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-paymentType';
    const actualId = 'rc-tabs-4-panel-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-paymentType"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-more', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-more';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-more"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-panel-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-despesa';
    const actualId = 'rc-tabs-4-panel-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-despesa"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-tab-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-tab-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-tab-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-tab-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-tab-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-more', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-more';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-more"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-01/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-panel-01-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-01/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-02/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-panel-02-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-02/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  it('Click on element rc-tabs-4-panel-03/2021', () => {
    const parentId = 'rc-tabs-1-tab-renda';
    const actualId = 'rc-tabs-4-panel-03-2021';
    cy.visit('/').then((window) => {
      cy.wait(500);
      cy.get('[id="rc-tabs-1-tab-renda"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.get('[id="rc-tabs-4-panel-03/2021"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(500);
            cy.writeContent(actualId, window);
        }
      });
        }
      });
    });
  });
  //--CODE--
  after(() => {
    cy.exec('npm run generate-files');
  });
});
