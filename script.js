const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16];

const returnEven = (numbers) => {
  let result = []
  numbers.forEach((item) => {
    if (item % 2 === 0) result.push(item);
  }) 
  console.log(result)
}

returnEven(array)

const citiesAndStates = [
  {
    city: 'Belo Horizonte',
    state: 'Minas Gerais',
  },
  {
    city: 'Salvador',
    state: 'Bahia',
  },
  {
    city: 'Porto Alegre',
    state: 'Rio Grande do Sul',
  },
  {
    city: 'Manaus',
    state: 'Amazonas',
  },
];

let newCitiesAndStates = [];

citiesAndStates.forEach((index, state) => {

  newCitiesAndStates.push(`${state} - ${city}`);
})

console.log(newCitiesAndStates)