// Implement the following functions
// your code. Refactor this file as you see fit. Export or modify any function as you see fit. Add additonal functions as you see fit.

const stringLib = () => {
  function concatanate(a, b) {
    // append one string to another
    return a + b;
  }

  function ASCIINumberToChar(Number) {
    // take one number, say, 127 and convert it to its ASCII char representation
    return String.fromCharCode(Number);
  }

  function CharToAsciiNumber(aChar) {
    // take one Character, say, 'A' and convert it to it's Number representation
    return aChar.charCodeAt();
  }

  function ReverseString(origionalString) {
    // return a string, ie: Hello becomes olleH
    return [...originalString].reverse().join("");
  }

  // REF: https://en.wikipedia.org/wiki/List_of_Unicode_characters
  const CHAR_CODE_OF_UPPER_A = 65;
  const CHAR_CODE_OF_LOWER_A = 97;

  const LENGTH_OF_ALPHABET = 26;
  const generateAllAlphabets = (isUpper = false) => {
    const CHAR_CODE_OF_A = isUpper
      ? CHAR_CODE_OF_UPPER_A
      : CHAR_CODE_OF_LOWER_A;
    return Array.from({ length: LENGTH_OF_ALPHABET }, (_v, idx) =>
      String.fromCharCode(CHAR_CODE_OF_A + idx)
    );
  };

  function GenerateOnlyUpperCase() {
    return generateAllAlphabets(true);
    //Ie: A,B,C,D,E,F,G...Z
  }

  function GenerateOnlyLowerCase() {
    return generateAllAlphabets(false);
    //Ie: a,b,c,d,e,f,g...z
  }

  function GenerateOnlyNumbers() {
    return Array.from({ length: 10 }, (_v, idx) => idx);
    //Ie: 0,1,2,3...9
  }

  const range = (from, to) =>
    Array.from({ length: to - from + 1 }, (_v, idx) => from + idx);
  const SYMBOL_RANGE_LIST = [
    // REF: https://en.wikipedia.org/wiki/List_of_Unicode_characters
    [33, 47],
    [58, 64],
    [91, 96],
    [123, 126],
  ];
  function GenerateOnlySymbols() {
    return SYMBOL_RANGE_LIST.reduce(
      (prev, [from, to]) => [...prev, ...range(from, to)],
      []
    ).map((decimal) => String.fromCharCode(decimal));
    //Ie: $, %, !, #, etc
  }

  function GenerateUpperAndLowerCase() {
    const uppers = GenerateOnlyUpperCase();
    const lowers = GenerateOnlyLowerCase();
    return uppers.concat(lowers);
    //Ie: A,B,C,D,E,F,G...Z and  a,b,c,d,e,f,g...z
  }
};
