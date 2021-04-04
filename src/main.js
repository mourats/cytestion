const fs = require('fs');
const util = require('./util');
const ahocorasick = require('ahocorasick');
const ac = new ahocorasick(['id=', 'idtest=']);

const pathTestFile = '../cypress/integration/cytestion.spec.js';

const contentFile = fs.readFileSync('tmp/message.txt').toString();
const listResult = ac.search(contentFile);

const idStrings = listResult.map((elem) => {
  return util.getIdByIdx(contentFile, elem[0]);
});

const tagsTypes = listResult.map((elem) => {
  return util.getTagOfIdx(contentFile, elem[0]);
});

console.log(listResult);
console.log([...new Set(tagsTypes)]);
console.log([...new Set(idStrings)]);

const generateCode = () => {};
