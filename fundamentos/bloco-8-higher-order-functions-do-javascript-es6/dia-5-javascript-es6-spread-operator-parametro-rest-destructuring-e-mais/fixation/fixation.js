// Faça uma lista com as suas frutas favoritas
const specialFruit = ['strawberry', 'grapple', 'apple'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['sugar', 'chocolate', 'canned milk'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional]
};

console.log(fruitSalad(specialFruit, additionalItens));
