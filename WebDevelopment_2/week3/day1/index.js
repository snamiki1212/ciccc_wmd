validateFormatPhoneNumberList = (list) => list.length === 10;
validateFormatPhoneNumberItem = (item) =>
  typeof item === "number" && item >= 0 && item <= 9;

const formatPhoneNumber = (list) => {
  const isValid =
    validateFormatPhoneNumberList(list) &&
    list.every(validateFormatPhoneNumberItem);
  if (!isValid) return console.error("invalid data");

  return `(${list[0]}${list[1]}${list[2]}) ${list[3]}${list[4]}${list[5]}-${list[6]}${list[7]}${list[8]}${list[9]}`;
};

const tuckIn = ([head, tail], list) => [head, ...list, tail];

const getOnlyEvens = (list) => list.filter((item) => item % 2 === 0);
