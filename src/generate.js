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
    const treatedId = elem.id.split('/').join('-');
    const actualString = `const actualId = '${treatedId}';`;
    const parentString = `const parentId = '${code.actualId}';`;

    if (
      util.willNotGenerateDuplicate(actualString, parentString, codes, newCodes)
    ) {
      let newCode = putIdClickSnippet(code.codeText, elem.id, elem.typeId);
      newCode = newCode.replace(
        `const parentId = '${code.parentId}';`,
        parentString
      );
      newCode = newCode.replace(
        `const actualId = '${code.actualId}';`,
        actualString
      );

      newCode = newCode.replace(
        util.getContentBetween(newCode, "it('", "',"),
        `Click on element ${elem.id}`
      );

      newCodes.push(newCode);
    }
  });
};

const generateClassClick = (code, classList, codes, newCodes) => {
  classList.forEach((elem) => {
    const treatedId = elem.id.split('/').join('-');
    const actualString = `const actualId = '${treatedId}';`;
    const parentString = `const parentId = '${code.actualId}';`;

    if (
      util.willNotGenerateDuplicate(actualString, parentString, codes, newCodes)
    ) {
      let newCode = putClassClickSnippet(code.codeText, elem.id, elem.typeId);
      newCode = newCode.replace(
        `const parentId = '${code.parentId}';`,
        parentString
      );
      newCode = newCode.replace(
        `const actualId = '${code.actualId}';`,
        actualString
      );

      newCode = newCode.replace(
        util.getContentBetween(newCode, "it('", "',"),
        `Click on class ${elem.id}`
      );

      newCodes.push(newCode);
    }
  });
};
const generateIdsForm = (code, idsForm, codes, newCodes) => {
  const typeId = idsForm[0] && idsForm[0].typeId;
  const listOnlyId = idsForm.map((elem) => elem.id);
  const treatedId = listOnlyId.join('-').split('/').join('-');
  const actualString = `const actualId = '${treatedId}';`;
  const parentString = `const parentId = '${code.actualId}';`;

  if (
    util.willNotGenerateDuplicate(actualString, parentString, codes, newCodes)
  ) {
    let newCode = putIdFormSnippet(code.codeText, listOnlyId, typeId);
    newCode = newCode.replace(
      `const parentId = '${code.parentId}';`,
      parentString
    );
    newCode = newCode.replace(
      `const actualId = '${code.actualId}';`,
      actualString
    );

    newCode = newCode.replace(
      util.getContentBetween(newCode, "it('", "',"),
      `Filling values ${treatedId} and submit`
    );

    newCodes.push(newCode);
  }
};

const putIdClickSnippet = (codeText, id, typeId) => {
  const clickCode = `cy.get('[${typeId}"${id}"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            cy.wait(200);
            cy.writeContent(actualId, window);
        }
      });\n`;
  return codeText.replace('cy.writeContent(actualId, window);\n', clickCode);
};

const putClassClickSnippet = (codeText, classId, typeId) => {
  const clickCode = `cy.get('[${typeId}"${classId}"]').then(($class) => {
          $class[0].click();
          cy.wait(200);
          cy.writeContent(actualId, window);
      });\n`;
  return codeText.replace('cy.writeContent(actualId, window);\n', clickCode);
};

const putIdFormSnippet = (codeText, listId, typeId) => {
  let fillingCode = '';
  listId.forEach(
    (id) =>
      (fillingCode += `cy.get('[${typeId}"${id}"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click();
            $id.clear();
            $id.type('${faker.name.findName()}');
        }
      });\n`)
  );
  fillingCode += `cy.get('.ant-form').submit();\n`;

  return codeText.replace('cy.writeContent(actualId, window);\n', fillingCode);
};

module.exports = {
  generateNewTestCodes,
};
