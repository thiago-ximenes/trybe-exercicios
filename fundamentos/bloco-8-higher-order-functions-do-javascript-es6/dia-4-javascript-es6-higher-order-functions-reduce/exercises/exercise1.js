const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(list, array) {
  // escreva seu código aqui
  console.log(array)
  array.forEach((item) => list.push(item))
  return list
  
}

console.log(arrays.reduce(flatten, []));