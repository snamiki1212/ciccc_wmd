/**
 * Using Knowledge from Both Lab A and Lab B create the following additional functions in numbers.js
Write a function isPrime(n) 
to check if a number N is prime or not
return true if it is prime, false if it is not


Write a function GeneratePrimes(startingAt,numberOfPrimesToFind)
To generate a list of prime numbers starting at X, then finding some number of times after that number

 */

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const GeneratePrimes = (startingAt, numberOfPrimesToFind) => {
  const list = [];
  while (list.length < numberOfPrimesToFind) {
    if (isPrime(startingAt)) list.push(startingAt);
    startingAt += 1;
  }
  return list;
};
