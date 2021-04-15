/**
 * Using Knowledge from Both Lab A and Lab B create the following additional functions in strings.js
Write a function IsPalindrome(aWord) 
To check if a number is a palindrome or not
return true if is is, false if it is not 


Write a function RandomWord(length);
Generate a random word of size length
Write a function RandomWord(length,charList);
Generate a random word of size length, using only char’s in charList

 */

const isPalindrome = (text) => {
  const half = Math.floor(text.length / 2);
  for (let i = 0; i < half; i++) {
    if (text[i] !== text[text.length - 1 - i]) return false;
  }
  return true;
};

const CHAR_CODE_OF_A = 97;
const LENGTH_OF_ALPHABET = 26;
const CHAR_LIST = Array.from({ length: LENGTH_OF_ALPHABET }, (_v, idx) =>
  String.fromCharCode(CHAR_CODE_OF_A + idx)
);
const randomChar = () => {
  return CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)];
};
const randomWord = (length) => {
  return Array.from({ length }, (_v) => randomChar()).join("");
};

const randomWordFromCharList = (length, charList) => {
  return Array.from(
    { length },
    (_v) => charList[Math.floor(Math.random() * charList.length)]
  ).join("");
};
