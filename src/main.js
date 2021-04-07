requireUncached = (module) => {
  delete require.cache[require.resolve(module)];
  return require(module);
};
const fs = requireUncached('fs');
const { execSync } = require('child_process');
const util = require('./util');
const generate = require('./generate');
const path_project = require('path');

const pathTestFile = 'cypress/integration';
const fileTestName = 'cytestion.spec.js';

const generateCode = () => {
  const date = new Date().toISOString().slice(0, 10);
  const fileTest = `${pathTestFile}/${date}/${fileTestName}`;

  if (!fs.existsSync(fileTest)) {
    fs.mkdirSync(`${pathTestFile}/${date}/`, { recursive: true });
    const rootFile = util.getRootTestFile();
    fs.writeFileSync(fileTest, rootFile);
    execSync(`npm run test-file ${fileTest}`);
  } else {
    const a = fs.readFileSync(fileTest).toString();
    const contentTestFile = a;
    const codeList = contentTestFile.split('//--CODE--');

    const header = codeList.shift();
    const footer = codeList.pop();

    let codeListProcessed = util.dataProcessor(codeList);

    const pathToTmp = '../tmp/';
    let filesTmp = fs
      .readdirSync(path_project.resolve(__dirname, pathToTmp))
      .filter((file) => file !== '.gitkeep');

    //remove if ids was not visible
    codeListProcessed = codeListProcessed.filter((code) =>
      filesTmp.includes(code.actualId)
    );

    const filesTmpRead = util.readTmpFiles(codeListProcessed, filesTmp);

    let newCodes = [];
    codeListProcessed.forEach((code) => {
      if (util.canContinue(code, filesTmpRead)) {
        const actualFile = filesTmpRead.find(
          (file) => file.name === code.actualId
        );

        generate.generateUnique(code, actualFile, newCodes, contentTestFile);
        generate.generateDuplicate(code, actualFile, newCodes, contentTestFile);
      }
    });

    let result = [];
    result.push(header);
    result.push(...codeListProcessed.map((elem) => elem.codeText));
    result.push(...newCodes);
    result.push(footer);
    if (newCodes.length > 0) {
      fs.writeFileSync(fileTest, result.join('//--CODE--'));
      execSync(`npm run test-file ${fileTest}`);
    } else {
      execSync(`rm -v ${path_project.resolve(__dirname, pathToTmp)}/*`);
    }
  }
};

generateCode();
