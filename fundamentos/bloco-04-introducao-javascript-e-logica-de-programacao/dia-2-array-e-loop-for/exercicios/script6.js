let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (item of numbers) {
  console.log(item);
}

let sum = 0;

for (item of numbers) {
  sum += item;
}

console.log(sum);

let avg = sum / numbers.length;
console.log(avg);

if (avg > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor qyue 20");
}

let bigger = 0;

for (item of numbers) {
  if (item > bigger) {
    bigger = item;
  }
}

console.log(bigger);

odd
