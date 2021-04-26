const fs = require('fs');
const path_project = require('path');
const ahocorasick = require('ahocorasick');
const filters = require('./ant-design-filters');
let rawdata = fs.readFileSync(
  path_project.resolve(__dirname, '../data/ant-design/identifiers.json')
);
const identifiers = JSON.parse(rawdata).identifiers;
const ac = new ahocorasick(identifiers);

const searchContent = (obj, getIdByIdx, getTagOfIdx) => {
  const listResult = ac.search(obj.content);

  let idStrings = listResult.map((elem) => {
    const newObj = {};
    newObj.id = getIdByIdx(obj.content, elem[0]);
    newObj.tag = getTagOfIdx(obj.content, elem[0]);
    newObj.typeId = elem[1][0];
    return newObj;
  });

  //remove not clickable ids
  idStrings = filters.filterNotClickablePanel(idStrings);
  idStrings = filters.filterNotButtonClass(idStrings);

  //remove duplicates and make priority
  let idStringUnique = [];
  idStrings.forEach((curr) => {
    let bestId;
    bestId =
      idStrings.find(
        (elem) => elem.tag === curr.tag && elem.typeId === identifiers[0]
      ) ||
      idStrings.find(
        (elem) => elem.tag === curr.tag && elem.typeId === identifiers[1]
      ) ||
      idStrings.find(
        (elem) => elem.tag === curr.tag && elem.typeId === identifiers[2]
      );
    if (!idStringUnique.find((elem) => elem.tag === bestId.tag)) {
      idStringUnique.push(curr);
    }
  });

  obj.idClick = [];
  obj.idsForm = [];
  obj.classClick = [];

  idStringUnique.forEach((elem) => {
    if (elem.typeId === 'class=') {
      obj.classClick.push(elem);
    } else {
      if (elem.tag.includes('<input')) {
        processTypeForm(elem, obj, getIdByIdx);
      } else {
        obj.idClick.push(elem);
      }
    }
  });
};

const processTypeForm = (elem, obj, getIdByIdx) => {
  let rawdata = fs.readFileSync(
    path_project.resolve(__dirname, '../data/ant-design/dictionary.json')
  );
  const data = JSON.parse(rawdata);
  const keysData = Object.keys(data);

  const idxClass = elem.tag.indexOf('class=');
  if (idxClass !== -1) {
    const classInput = getIdByIdx(elem.tag, idxClass);
    if (keysData.includes(classInput)) {
      elem.classId = data[classInput];
    }
  } else {
    //detected that the datepicker ant input has no class of its own
    elem.classId = 'input-picker';
  }
  obj.idsForm.push(elem);
};

module.exports = {
  searchContent,
};
