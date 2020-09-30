const express = require('express');

const app = express();

app.get('/hashtags', (req, res) => {
  res.send('REQUEST');
});

app.listen(8088);
