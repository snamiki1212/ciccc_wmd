// Implement the following functions

const stringLib = () => {
  function add(a, b) {
    return a + b;
  }

  function sub(a, b) {
    return a - b;
  }

  function mul(a, b) {
    return a * b;
  }

  function div(a, b) {
    return a / b;
  }

  function Exponentiation(a, b) {
    return a ** b;
  }

  function Increment(a, b) {
    return a + b;
  }

  function Decrement(a, b) {
    return a - b;
  }

  function NumberListA(start, end) {
    // return list of numbers starting at start and ending at end
    return Array.from({ length: end - start + 1 }, (_v, idx) => start + idx);
    // // or
    // const list = [];
    // for (let i = start; i <= end; i++) {
    //   list.push(i);
    // }
    // return list;
  }

  function NumberListB(start, count, skipEvery) {
    // return list of numbers starting at start and ending at end but skipping every N (ie: skip every 2, or skip every 3)
    return Array.from({ length: count }, (_v, idx) => start + idx * skipEvery);
    // // or
    // const list = [];
    // for (let i = 0; i < count; i++) {
    //   list.push(start + i * skipEvery);
    // }
    // return list;
  }

  function NumberListC(start, count, shouldBeRandomOrNot) {
    // return list of numbers starting, continuing for (count) and a boolean to determine if the list of numbers should be random or not
    const list = [];
    const skiper = shouldBeRandomOrNot
      ? Math.floor(Math.random() * Math.random() * 100)
      : 1;
    for (let i = 0; i < count; i++) {
      list.push(start + i * skiper);
    }
    return list;
  }

  function IsOdd(aNumber) {
    // is a number odd? true false
    return aNumber % 2 !== 0;
  }

  function IsEven(aNumber) {
    // is a number even? true false
    return aNumber % 2 === 0;
  }

  function RandomNumberList(start, end, count) {
    // return list of random numbers between start and end
    return RandomNumberListDup(start, end, count, true);
  }

  function RandomNumberListDup(start, end, count, allowDuplicates) {
    // return count number of random numbers, between start and end. use allowDuplicates to choose if we should allow duplicates in the list or not
    const list = NumberListA(start, end);
    const result = [];
    for (let i = 0; i < count; i++) {
      if (list.length < 1) break;
      const randomIdx = Math.floor(Math.random() * list.length);
      result.push(list[randomIdx]);
      if (!allowDuplicates) list.splice(randomIdx, 1);
    }
    return result;
  }
};
