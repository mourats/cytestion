const fs = require('fs');
const path_project = require('path');

const getContentBetween = (string, begin, end) => {
  let cutString = string.substring(string.indexOf(begin) + 1);
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

module.exports = {
  getContentBetween,
  getIdByIdx,
  getTagOfIdx,
  getRootTestFile,
};
