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

let odd = 0;

for (item of numbers) {
  if (item % 2 == 1) {
    odd++;
  }
}
if ((odd = 0)) {
  console.log("Nenhum valor ímpar encontrado: " + odd);
} else {
  console.log("Quantidade de números ímpares: " + odd);
}

let smaller = numbers[1];

for (item of numbers) {
  if (item < smaller) {
    smaller = item;
  }
}

console.log(smaller);

let array = [];

for (let index = 1; index <= 25; index += 1) {
  array.push(index);
}

console.log(array);

for (let item of array) {
  console.log(item / 2);
}

sortedNumbers = numbers.sort(function (a, b) {
  return a - b;
});
console.log(sortedNumbers);

let anything = [7, 2, 14, 5];

for (let index = 1; index < anything.length; index += 1) {
  for (let secondIndex = 0; secondIndex < anything.length; secondIndex += 1) {
    if (anything[index] < anything[secondIndex]) {
      let position = anything[index];
      anything[index] = anything[secondIndex];
      anything[secondIndex] = position;
    }
  }
}
console.log(anything);

let something = [7, 2, 14, 5];

for (let index = 1; index < something.length; index += 1) {
  for (let secondIndex = 0; secondIndex < something.length; secondIndex += 1) {
    if (something[index] > something[secondIndex]) {
      let position = something[index];
      something[index] = something[secondIndex];
      something[secondIndex] = position;
    }
  }
}
console.log(something);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumber = [];

for (let index = 0; index < numbers.length; index += 1) {
  for (let secondIndex = 1; secondIndex < numbers.length; secondIndex += 1) {
     if (index === secondIndex - 1) {
      let multiplyNumber = numbers[index] * numbers[secondIndex];
      newNumber.push(multiplyNumber);
    }
  }
  if (index === numbers.length - 1) {
      multiplyNumber = numbers[index] * 2;
      newNumber.push(multiplyNumber);
    }
}

console.log(newNumber);
