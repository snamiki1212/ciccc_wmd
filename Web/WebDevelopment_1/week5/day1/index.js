// 1. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
// REF: https://en.wikipedia.org/wiki/Heron%27s_formula#:~:text=In%20geometry%2C%20Heron's%20formula%20(sometimes,distances%20in%20the%20triangle%20first.
function calcTriangleAreFromSides(a, b, c) {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return area;
}

// 2. Write a JavaScript program to compute the sum of cubes of all integer from 1 to a given integer.
function factorial(last) {
  let sum = 0;
  for (let i = 1; i <= last; i++) {
    sum += Math.pow(i, 2);
  }
  return sum;
}

// 3. Write a JavaScript program that capitalizes all the letters in a given string.
function capitalize(str) {
  return str.toUpperCase();
}

// 4. Write a JavaScript program where the program takes a random
//    integer between 1 to 10, the user is then prompted to input
//    a guess number. If the user input matches with guess number,
//    the program will display a message &quot;Good Work&quot;
//    otherwise display a message &quot;Not matched&quot;.
const input = 3
function takeRandomBetweenOneToTen() {
  const result = Math.round(Math.random() * 10)

  // NOTE: it's not evenly random but easy way
  if(result <= 0 || result > 10) return 10 
  return result;
}
function getGameResult(input) {
  if(typeof input !=='number'  ) throw new Error ('input must be number');
  const taken = takeRandomBetweenOneToTen();
  return input === taken ? 'Good Work' : "Not match";
}
const gameResult = getGameResult(input)
console.log(gameResult)

// 5. Write a JavaScript program to replace all the numbers with a specified number of a given array of integers.
function replace(list, elem) {
  /** easy and common way */ 
  // return list.map((_) => elem);

  /** learned way */
  for(let i = 0;i <list.length; i++){
    list[i] = elem
  }
  return list
}

// 6. Write a JavaScript program that sorts a given array.
function sortByAsc(list) {
  return list.sort((a, b) => a - b);
}

// 7. Write a JavaScript program that reverses a given array
function reverse(list) {
  return list.reverse();
}

// 8. Create an array “customer” objects. Each customer object should have at least 3 fields: “name”, “email”, “order”. Create at least 3 such objects.
function createCustomer({ name, email, order }) {
  if (typeof order !== "number") throw new Error("Order must be number");
  return { name, email, order };
}
const customers = [
  createCustomer({ name: "nash", email: "abc@gmail.com", order: 3 }),
  createCustomer({ name: "jiro", email: "jiro@gmail.com", order: 2 }),
  createCustomer({ name: "ken", email: "example@example.com", order: 1 }),
];

// 9. Filter the customers array to show the customer with the most expensive order.
/* Way1 */
// function pickMostExpensiveOrder(list) {
//   const max = Math.max(...list.map((e) => e.order));
//   const result = list.find((e) => e.order === max);
//   return result;
// }
// const r = pickMostExpensiveOrder(customers);
// console.log(r);

/** Way2 */
function pickMostExpensiveOrderIndex(list) {
  let index = -1;
  let order = -1;

  list.forEach((value, key) => {
    if (value.order > order) {
      index = key;
      order = value.order;
    }
  });
  return index;
}
const i = pickMostExpensiveOrderIndex(customers);
console.log(customers[i]);
