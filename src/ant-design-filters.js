//functions for ant design
const filterNotClickablePanel = (idStrings) => {
  return idStrings.filter(
    (elem) =>
      !/rc-tabs-[0-9]-panel/.test(elem.id) &&
      !/rc-tabs-[0-9]-more/.test(elem.id)
  );
};

const filterNotButtonClass = (idStrings) => {
  return idStrings.filter(
    (elem) =>
      (elem.typeId === 'class=' && /ant-btn/.test(elem.id)) ||
      elem.typeId !== 'class='
  );
};

const filterNotIdUppercase = (idStrings) => {
  return idStrings.filter(
    (elem) =>
      (elem.typeId === 'id=' && /[A-Z]/.test(elem.id)) || elem.typeId !== 'id='
  );
};

module.exports = {
  filterNotClickablePanel,
  filterNotButtonClass,
  filterNotIdUppercase,
};
