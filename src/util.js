const fs = require('fs');
const path_project = require('path');
const search = require('./search');

const getContentBetween = (string, begin, end) => {
  let cutString = string.substring(string.indexOf(begin) + begin.length);
  cutString = cutString.substring(0, cutString.indexOf(end));
  return cutString;
};

const getIdByIdx = (string, idx) => {
  let cutString = string.substr(idx);
  cutString = cutString.substring(cutString.indexOf('"') + 1);
  cutString = cutString.substring(0, cutString.indexOf('"'));
  return cutString;
};

const getTagOfIdx = (string, idx) => {
  let cutString = string.substring(string.lastIndexOf('<', idx));
  cutString = cutString.substring(0, cutString.indexOf('>'));
  return cutString;
};

const getRootTestFile = () => {
  const pathToBaseTest = '../data/base-files/cytestion-base.spec.js';
  return fs
    .readFileSync(path_project.resolve(__dirname, pathToBaseTest))
    .toString();
};

const dataProcessor = (codeList) => {
  return codeList.map((elem) => {
    const obj = {};
    obj.codeText = elem;
    obj.actualId = getContentBetween(elem, "const actualId = '", "';");
    obj.parentId = getContentBetween(elem, "const parentId = '", "';");
    return obj;
  });
};

const readTmpFiles = (codeList, filesTmp) => {
  const filteredFilesTmp = filesTmp.filter(
    (file) =>
      codeList.map((elem) => elem.actualId).includes(file) ||
      codeList.map((elem) => elem.parentId).includes(file)
  );
  const result = [];
  filteredFilesTmp.forEach((file) => {
    const obj = {};
    obj.name = file;
    obj.content = fs.readFileSync('tmp/' + file).toString();

    search.searchContent(obj, getIdByIdx);
    result.push(obj);
  });
  return result;
};

const canContinue = (code, filesTmp) => {
  const actualFile = filesTmp.find((file) => file.name === code.actualId);
  const parentFile = filesTmp.find((file) => file.name === code.parentId);

  if (actualFile && parentFile) {
    if (actualFile.content === parentFile.content) return false;
  }
  return true;
};

module.exports = {
  getContentBetween,
  getIdByIdx,
  getTagOfIdx,
  getRootTestFile,
  dataProcessor,
  readTmpFiles,
  canContinue,
};
