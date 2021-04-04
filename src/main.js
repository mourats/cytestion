const fs = require('fs');
const util = require('./util');
const ahocorasick = require('ahocorasick');
const { execSync } = require('child_process');
const ac = new ahocorasick(['id=', 'idtest=']);

const pathTestFile = 'cypress/integration';
const fileTestName = 'cytestion.spec.js';

const generateCode = () => {
  const date = new Date().toISOString().slice(0, 10);

  const fileTest = `${pathTestFile}/${date}/${fileTestName}`;

  if (!fs.existsSync(fileTest)) {
    fs.mkdirSync(`${pathTestFile}/${date}/`, { recursive: true });
    const rootFile = util.getRootTestFile();
    console.log(rootFile);
    fs.writeFileSync(fileTest, rootFile);
    execSync(`npm run test-file ${fileTest}`);
  } else {
    const contentTestFile = fs.readFileSync(fileTest).toString();
    const codeList = contentTestFile.split('//--CODE--');

    const header = codeList.shift();
    const footer = codeList.pop();

    const codeListProcessed = util.dataProcessor(codeList);
    let filesTmp = fs.readdirSync('tmp/').filter((file) => file !== '.gitkeep');

    console.log(codeListProcessed);
    console.log(filesTmp);

    // const contentFile = fs.readFileSync('tmp/message.txt').toString();
    // const listResult = ac.search(contentFile);

    // const idStrings = listResult.map((elem) => {
    //   return util.getIdByIdx(contentFile, elem[0]);
    // });

    // const tagsTypes = listResult.map((elem) => {
    //   return util.getTagOfIdx(contentFile, elem[0]);
    // });
    // console.log(listResult);
    // console.log([...new Set(tagsTypes)]);
    // console.log([...new Set(idStrings)]);
  }
};

generateCode();
