const express = require('express');
const bodyParser = require('body-parser');

const hello = require('./middlewares/hello');
const ping = require('./middlewares/ping');
const greeting = require('./middlewares/greeting');
const getSimpsons = require('./middlewares/getSimpsons');
const getSimpsonById = require('./middlewares/getSimpsonById');

const app = express();
app.use(bodyParser.json());

app.get('/ping', ping);

app.post('/hello', hello);

app.post('/greeting', greeting);

app.get('/simpsons', getSimpsons);

app.get('/simpsons/:id', getSimpsonById)

app.listen(3000, () => console.log('Listening on port 3000'));
