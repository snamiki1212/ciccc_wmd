// No1
const societyName = (list) =>
  list
    .map((item) => item[0])
    .sort(asc)
    .join("")
    .toUpperCase();

const asc = function (a, b) {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
};

// No2
const countTrue = (list) => list.filter((item) => item === true).length;

// No3
const objectToArray = (obj) => Object.entries(obj);

// No4
const clone = (list) => {
  list.push(...list);
  return list;
};

// No5
const removeDups = (list) => Array.from(new Set(list));
