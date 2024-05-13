const names = ["John", "Jane", "Jim", "Jill", "Jack", "Jenny"];
const results = [2.3, 3.2, 3.3, 1.5, 3.2, 1.3];

const one = results.filter(result => result < 1.4);
const two = results.filter(result => result >= 1.4 && result < 2.4);
const three = results.filter(result => result >= 2.4 && result < 3.4);
const four = results.filter(result => result >= 3.4 && result < 4.4);
const five = results.filter(result => result >= 4.4);

console.log(one.length, two.length, three.length, four.length, five.length); 