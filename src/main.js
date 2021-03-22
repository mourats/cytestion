const fs = require('fs');
const ahocorasick = require('ahocorasick');
const ac = new ahocorasick(['class=']);

const contentFile = fs.readFileSync('tmp/message3.txt').toString();
const listResult = ac.search(contentFile);

const idStrings = listResult.map((elem) => {
  let cutString = contentFile.substr(elem[0]);
  cutString = cutString.substring(cutString.indexOf('"') + 1);
  cutString = cutString.substring(0, cutString.indexOf('"'));
  return cutString;
});

const tagsTypes = listResult.map((elem) => {
  cutString = contentFile.substring(contentFile.lastIndexOf('<', elem[0]));
  cutString = cutString.substring(0, cutString.indexOf('>'));
  return cutString;
});

console.log([...new Set(tagsTypes)]);

// console.log([...new Set(idStrings)]);
