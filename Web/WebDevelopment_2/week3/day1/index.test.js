const { formatPhoneNumber, tuckIn, getOnlyEvens } = require("./index");

test("func: formatPhoneNumber", () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toEqual(
    "(123) 456-7890"
  );
  expect(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])).toEqual(
    "(519) 555-4468"
  );
  expect(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])).toEqual(
    "(345) 501-2527"
  );
});

test("func: tuckIn", () => {
  expect(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])).toEqual([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
  ]);

  expect(tuckIn([15, 150], [45, 75, 35])).toEqual([15, 45, 75, 35, 150]);
  expect(
    tuckIn(
      [
        [1, 2],
        [5, 6],
      ],
      [[3, 4]]
    )
  ).toEqual([
    [1, 2],
    [3, 4],
    [5, 6],
  ]);
});

test("func: getOnlyEvens", () => {
  expect(getOnlyEvens([1, 3, 2, 6, 4, 8])).toEqual([2, 4]);
  expect(getOnlyEvens([0, 1, 2, 3, 4])).toEqual([0, 2, 4]);
});
