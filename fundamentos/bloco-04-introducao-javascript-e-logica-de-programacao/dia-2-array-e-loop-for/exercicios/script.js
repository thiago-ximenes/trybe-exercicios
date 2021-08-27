const a = 5;
const b = 3;

let sum = a + b;
let sub = a - b;
let multiply = a * b;
let divide = a / b;
let modulo = a % b;

let log = [sum, sub, multiply, divide, modulo, divide];

for (item of log) {
  console.log(item);
}
