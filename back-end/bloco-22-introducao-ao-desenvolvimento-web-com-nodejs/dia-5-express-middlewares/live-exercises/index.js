const express = require('express');
const ping = require('./middlewares/ping');

const app = express();

app.get('/ping', ping);

app.listen(3000, () => console.log('Listening on port 3000'));
