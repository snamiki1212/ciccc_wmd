const {
  addition,
  increment,
  minutes,
  arrayOfMultiples,
  toArray,
} = require("./index.js");

test("func: addition", () => {
  expect(addition(3, 2)).toEqual(5);
  expect(addition(-3, -6)).toEqual(-9);
  expect(addition(7, 3)).toEqual(10);
});

test("func: increment", () => {
  expect(increment(0)).toEqual(1);
  expect(increment(9)).toEqual(10);
  expect(increment(-3)).toEqual(-2);
});

test("func: minutes", () => {
  expect(minutes(5)).toEqual(300);
  expect(minutes(3)).toEqual(180);
  expect(minutes(2)).toEqual(120);
});

test("func: arrayOfMultiples", () => {
  expect(arrayOfMultiples(7, 5)).toEqual([7, 14, 21, 28, 35]);
  expect(arrayOfMultiples(12, 10)).toEqual([
    12,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    108,
    120,
  ]);
  expect(arrayOfMultiples(17, 6)).toEqual([17, 34, 51, 68, 85, 102]);
});

test("func: toArray", () => {
  expect(toArray({ a: 1, b: 2 })).toEqual([
    ["a", 1],
    ["b", 2],
  ]);
  expect(toArray({ shrimp: 15, tots: 12 })).toEqual([
    ["shrimp", 15],
    ["tots", 12],
  ]);
  expect(toArray({})).toEqual([]);
});
