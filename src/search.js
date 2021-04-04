const ahocorasick = require('ahocorasick');
const ac = new ahocorasick(['id=', 'idtest=']);

const searchContent = (obj, getIdByIdx) => {
  const listResult = ac.search(obj.content);

  let unique = [];
  let duplicate = {};
  const idStrings = listResult.map((elem) => {
    const newObj = {};
    newObj.id = getIdByIdx(obj.content, elem[0]);
    newObj.typeId = elem[1];
    return newObj;
  });

  idStrings.forEach((elem) => {
    if (!unique.find((uniq) => uniq.id === elem.id)) {
      unique.push(elem);
    } else {
      if (!Object.keys(duplicate).includes(elem.id)) {
        duplicate[elem.id] = [elem, elem];
      } else {
        duplicate[elem.id].push(elem);
      }
    }
  });

  duplicate = Object.values(duplicate);
  unique = unique.filter(
    (uniq) => !duplicate.find((dupl) => dupl.includes(uniq))
  );

  obj.idUnique = unique;
  obj.idDuplicate = duplicate;
};

module.exports = {
  searchContent,
};
