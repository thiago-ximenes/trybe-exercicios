const a = 90;
const b = 45;
const c = 45;

let sum = a + b + c;
let response;

if (sum === 180 && Math.sign(a) === 1 && Math.sign(b) === 1 && Math.sign(c) === 1) {
  response = true;
  console.log(response)
} else {
  response = false;
  console.log(response)
}
