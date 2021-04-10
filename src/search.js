const ahocorasick = require('ahocorasick');
const ac = new ahocorasick(['id=', 'class=']);
const filters = require('./ant-design-filters');

const searchContent = (obj, filesName, getIdByIdx, getTagOfIdx) => {
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

  //remove reference yourself
  idStrings = idStrings.filter((elem) => !filesName.includes(elem.id));

  //remove duplicates
  let idStringUnique = [];
  idStrings.forEach((curr) => {
    if (!idStringUnique.find((elem) => elem.id === curr.id)) {
      idStringUnique.push(curr);
    }
  });

  obj.idClick = [];
  obj.idsForm = [];
  obj.classClick = [];

  idStringUnique.forEach((elem) => {
    if (elem.typeId === 'class=') {
      obj.classClick.push(elem);
    } else if (elem.typeId === 'id=') {
      if (elem.tag.includes('<input')) {
        const idxClass = elem.tag.indexOf('class=');
        if (idxClass !== -1) {
          elem.classId = getIdByIdx(elem.tag, idxClass);
          obj.idsForm.push(elem);
        }
      } else {
        obj.idClick.push(elem);
      }
    }
  });
};

module.exports = {
  searchContent,
};
