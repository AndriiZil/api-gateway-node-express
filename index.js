const express = require('express');
const app = express();

const router = require('./routers/router')
const bodyParser = require('body-parser');

const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Simple API Gateway');
});

app.use(router);

app.listen(PORT, () => `Simple API Gateway run on localhost:${PORT}`);
