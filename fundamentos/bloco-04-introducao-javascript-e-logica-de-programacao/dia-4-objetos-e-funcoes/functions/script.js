const a = 5;
const b = 3;

function sum(a, b) {
  return a + b;
}
console.log(sum(a, b));

function sub(a, b) {
  return a - b;
}

console.log(sub(a, b));

function multiply(a, b) {
  return a * b;
}

console.log(multiply(a, b));

function divide(a, b) {
  return a / b;
}

console.log(divide(a, b));

function modulo(a, b) {
  return a % b;
}

console.log(modulo(a, b));
sum = sum(a, b);
sub = sub(a, b);
multiply = multiply(a, b);
divide = divide(a, b);
modulo = modulo(a, b);
let log = [sum, sub, multiply, divide, modulo, divide];

for (item of log) {
  console.log(item);
}
