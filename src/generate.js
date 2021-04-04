const util = require('./util');

const generateUnique = (code, actualFile, newCodes, contentTestFile) => {
  actualFile.idUnique.forEach((elem) => {
    const treatedId = elem.id.split('/').join('-');
    const actualString = `const actualId = '${treatedId}';`;
    if (!contentTestFile.includes(actualString)) {
      let newCode = putNewCodeSnippet(code.codeText, elem.id, elem.typeId);

      newCode = newCode.replace(
        `const parentId = '${code.parentId}';`,
        `const parentId = '${code.actualId}';`
      );
      newCode = newCode.replace(
        `const actualId = '${code.actualId}';`,
        `const actualId = '${treatedId}';`
      );

      newCode = newCode.replace(
        util.getContentBetween(newCode, "it('", "',"),
        `Click on element ${elem.id}`
      );

      newCodes.push(newCode);
    }
  });
};

const generateDuplicate = (code, actualFile, newCodes, contentTestFile) => {};

const putNewCodeSnippet = (codeText, id, typeId) => {
  const clickCode = `cy.get('[${typeId}"${id}"]').then(($id) => {
        if ($id.is(':visible')) {
            $id.click().then((_) => {
              cy.writeContent(actualId, window);
            });
        }
      });\n`;
  return codeText.replace('cy.writeContent(actualId, window);\n', clickCode);
};

const putCorrectTitle = (newCode, id) => {
  console.log(util.getContentBetween(newCode, "it('", "',"));
};

module.exports = {
  generateUnique,
  generateDuplicate,
};
