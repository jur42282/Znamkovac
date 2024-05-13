const names = ["John", "Jane", "Jim", "Jill", "Jack", "Jenny"];
const results = [2.3, 3.2, 3.3, 1.5, 3.2, 1.3];

const one = results.filter(result => result < 1.4);
const two = results.filter(result => result >= 1.4 && result < 2.4);
const three = results.filter(result => result >= 2.4 && result < 3.4);
const four = results.filter(result => result >= 3.4 && result < 4.4);
const five = results.filter(result => result >= 4.4);

console.log(one.length, two.length, three.length, four.length, five.length); 


// ostatní využití

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//

const words = ["apple", "banana", "cat", "dog", "elephant", "fox", "grape"];
const longWords = words.filter(word => word.length > 4);
console.log(longWords);

//

const users = [
  { name: "John", age: 23 },
  { name: "Jane", age: 18 },
  { name: "Jim", age: 30 },
  { name: "Jill", age: 16 },
  { name: "Jack", age: 20 }
];
const adults = users.filter(user => user.age >= 18);
console.log(adults);