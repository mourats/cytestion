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
  cutString = cutString.substring(0, cutString.indexOf('>') + 1);
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
    obj.actualId = getContentBetween(elem, 'const actualId = [', '];')
      .replace(/'/g, '')
      .split(',');
    return obj;
  });
};

const readTmpFiles = (codeList, filesTmp) => {
  const filteredFilesTmp = filesTmp.filter((file) =>
    codeList.map((elem) => elem.actualId.join('->')).includes(file)
  );
  const result = [];
  const pathToTmp = '../tmp/';
  filteredFilesTmp.forEach((file) => {
    const obj = {};
    obj.name = file;
    obj.content = fs
      .readFileSync(path_project.resolve(__dirname, pathToTmp) + '/' + file)
      .toString();

    search.searchContent(obj, getIdByIdx, getTagOfIdx);
    result.push(obj);
  });
  return result;
};

const canContinue = (code, filesTmp) => {
  if (code.codeText.includes('skip')) return false;

  const actualFile = filesTmp.find(
    (file) => file.name === code.actualId.join('->')
  );
  const parentFile = filesTmp.find(
    (file) =>
      file.name ===
      code.actualId
        .filter((el, idx) => idx < code.actualId.length - 1)
        .join('->')
  );

  if (actualFile && parentFile) {
    if (actualFile.content === parentFile.content) return false;
  }
  return true;
};

const willNotGenerateDuplicate = (actualString, actualId, codes, newCodes) => {
  const actualIdWithoutVariant = actualId.replace(/rc-tabs-[0-9]+/g, '');
  const actualStringWithoutVariant = actualString.replace(
    /rc-tabs-[0-9]+/g,
    ''
  );
  return (
    !codes.some((code) =>
      code.codeText
        .replace(/rc-tabs-[0-9]+/g, '')
        .includes(actualIdWithoutVariant + "'];")
    ) &&
    !newCodes.some((code) =>
      code.replace(/rc-tabs-[0-9]+/g, '').includes(actualStringWithoutVariant)
    )
  );
};

const putSkipInTests = (codeList) => {
  codeList.forEach((code) => {
    code.codeText = code.codeText.replace(/ it\('/g, " it.skip('");
  });
};

module.exports = {
  getContentBetween,
  getIdByIdx,
  getTagOfIdx,
  getRootTestFile,
  dataProcessor,
  readTmpFiles,
  canContinue,
  willNotGenerateDuplicate,
  putSkipInTests,
};
