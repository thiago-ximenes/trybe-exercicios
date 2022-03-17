const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
]

app.get('/recipes', (req, res) => {
  const sortRecipes = recipes.sort((a, b) => a.name.localeCompare(b.name));
  res.json(sortRecipes);
});

app.get('/recipes/search', (req, res) => {
  const { name, maxPrice, minPrice } = req.query;
  const  filteredRecipes = recipes.filter(
    (recipe) => recipe.name.toLowerCase().includes(name.toLowerCase())
    && recipe.price < maxPrice && recipe.price >= minPrice);
  res.status(200).json(filteredRecipes);
})

app.get('/recipes/:id', (req, res) => {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/drinks', (req, res) => {
  const sortDrinks = drinks.sort((a, b) => a.name.localeCompare(b.name));
  return res.json(sortDrinks);
})

app.get('/drinks/search', (req, res) => {
  const { name } = req.query;
  const filteredDrinks = drinks
    .filter((drink) => drink.name.toLowerCase().includes(name.toLowerCase()));
  return res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', (req, res) => {
  const { id } = req.params;
  const drinkById = drinks.find((drink) => drink.id === parseInt(id));

  if (!drinkById) return res.status(404).json({ message: 'Drink not found!'});
  
  return res.status(200).json(drinkById);
})

app.get('/validateToken', (req, res) => {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

app.post('/recipes', (req, res) => {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  return res.status(201).json({ message: 'Recipe created successfully!'});
});

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});