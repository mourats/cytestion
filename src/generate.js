const util = require('./util');
const faker = require('faker');

const generateNewTestCodes = (code, actualFile, codes, newCodes) => {
  actualFile.idClick.length > 0 &&
    generateIdClick(code, actualFile.idClick, codes, newCodes);
  actualFile.classClick.length > 0 &&
    generateClassClick(code, actualFile.classClick, codes, newCodes);
  actualFile.idsForm.length > 0 &&
    generateIdsForm(code, actualFile.idsForm, codes, newCodes);
};

const generateIdClick = (code, idList, codes, newCodes) => {
  idList.forEach((elem) => {
    const treatedId = [...code.actualId, elem.id.split('/').join('-')];
    const actualString = `const actualId = [${
      "'" + treatedId.join("','") + "'"
    }];`;
    if (
      util.willNotGenerateDuplicate(
        actualString,
        elem.id.split('/').join('-'),
        codes,
        newCodes
      )
    ) {
      let newCode = putIdClickSnippet(code.codeText, elem.id, elem.typeId);
      newCode = newCode.replace(/^.*const actualId = .*$/gm, actualString);

      newCode = newCode.replace(
        util.getContentBetween(newCode, "it('", "',"),
        `Click on element ${treatedId.join('->')}`
      );

      newCodes.push(newCode);
    }
  });
};

const generateClassClick = (code, classList, codes, newCodes) => {
  classList.forEach((elem) => {
    const treatedId = [...code.actualId, elem.id.split('/').join('-')];
    const actualString = `const actualId = [${
      "'" + treatedId.join("','") + "'"
    }];`;
    if (
      util.willNotGenerateDuplicate(
        actualString,
        elem.id.split('/').join('-'),
        codes,
        newCodes
      )
    ) {
      let newCode = putClassClickSnippet(code.codeText, elem.id, elem.typeId);
      newCode = newCode.replace(/^.*const actualId = .*$/gm, actualString);

      newCode = newCode.replace(
        util.getContentBetween(newCode, "it('", "',"),
        `Click on element ${treatedId.join('->')}`
      );

      newCodes.push(newCode);
    }
  });
};
const generateIdsForm = (code, idsForm, codes, newCodes) => {
  const listOnlyId = idsForm.map((elem) => elem.id);
  const treatedId = [
    ...code.actualId,
    listOnlyId.join('-').split('/').join('-'),
  ];
  const actualString = `const actualId = [${
    "'" + treatedId.join("','") + "'"
  }];`;
  if (
    util.willNotGenerateDuplicate(
      actualString,
      listOnlyId.join('-').split('/').join('-'),
      codes,
      newCodes
    )
  ) {
    let newCode = putIdFormSnippet(code.codeText, idsForm);
    newCode = newCode.replace(/^.*const actualId = .*$/gm, actualString);

    newCode = newCode.replace(
      util.getContentBetween(newCode, "it('", "',"),
      `Filling values ${treatedId.join('->')} and submit`
    );

    newCodes.push(newCode);
  }
};

const putIdClickSnippet = (codeText, id, typeId) => {
  const clickCode = `cy.clickIfExist('[${typeId}"${id}"]');
      cy.writeContent(actualId, window);\n`;
  return codeText.replace('cy.writeContent(actualId, window);\n', clickCode);
};

const putClassClickSnippet = (codeText, classId, typeId) => {
  const clickCode = `cy.clickIfExistClass('[${typeId}"${classId}"]');
      cy.writeContent(actualId, window);\n`;
  return codeText.replace('cy.writeContent(actualId, window);\n', clickCode);
};

const putIdFormSnippet = (codeText, idsForm) => {
  let fillingCode = '';
  idsForm.forEach((elem) => (fillingCode += getCorrectTest(elem)));
  fillingCode += `cy.get('.ant-form').submit();\n`;

  return codeText.replace('cy.writeContent(actualId, window);\n', fillingCode);
};

const getCorrectTest = (element) => {
  if (!element.classId || element.classId === 'input') {
    let value = faker.random.word();
    if (element.tag.includes('name') || element.tag.includes('nome')) {
      value = faker.name.firstName();
    } else if (
      element.tag.includes('lastname') ||
      element.tag.includes('sobrenome')
    ) {
      value = faker.name.lastName();
    } else if (
      element.tag.includes('phone') ||
      element.tag.includes('telefone')
    ) {
      value = faker.phone.phoneNumber();
    } else if (element.tag.includes('email')) {
      value = faker.internet.email();
    }
    return `cy.fillInput('[${element.typeId}"${element.id}"]', '${value}');\n`;
  } else if (element.classId === 'input-number') {
    return `cy.fillInput('[${element.typeId}"${
      element.id
    }"]', '${faker.datatype.number({
      min: 1,
      max: 10,
    })}');\n`;
  } else if (element.classId === 'input-select') {
    return `cy.fillInputSelect('[${element.typeId}"${element.id}"]');\n`;
  } else if (element.classId === 'input-picker') {
    return `cy.fillInputDate('[${element.typeId}"${element.id}"]', '[class="ant-picker-cell-inner"]');\n`;
  }
};

module.exports = {
  generateNewTestCodes,
};
