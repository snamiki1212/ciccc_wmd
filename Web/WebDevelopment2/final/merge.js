const rand = () => Math.floor(Math.random() * 1_000);
const list = Array.from({ length: 100 }).map(() => rand());

const mergeSort = (list) => {
  if (list.length <= 1) return list;
  const [headList, tailsList] = splitList(list);
  return doMergeSort(mergeSort(headList), mergeSort(tailsList));
};

const splitList = (list) => {
  const halfIdx = Math.floor(list.length / 2);
  return [list.slice(0, halfIdx), list.slice(halfIdx, list.length)];
};

const doMergeSort = (sortedList1, sortedList2) => {
  const result = [];

  while (sortedList1.length !== 0 && sortedList2.length !== 0) {
    const picked =
      sortedList1[0] < sortedList2[0]
        ? sortedList1.shift()
        : sortedList2.shift();
    result.push(picked);
  }
  if (sortedList1.length === 0) return result.concat(sortedList2);
  if (sortedList2.length === 0) return result.concat(sortedList1);
  throw new Error("Something error happen");
};

console.log(mergeSort(list));
