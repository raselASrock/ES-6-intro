const max = Math.max(12, 85, 999, 78);
// console.log(max)

const numbers = [12, 85, 999, 79];
// console.log(numbers);
// console.log(...numbers);
// const largest = Math.max(...numbers);
// console.log(largest);

const numbers2 = [...numbers];
numbers.push(65)
numbers2.push(84)
console.log(numbers);
console.log(numbers2);


const number3 = [...numbers];

const number4 = [44, 55, 95, ...numbers, 49, 67, 82];
console.log(number4);