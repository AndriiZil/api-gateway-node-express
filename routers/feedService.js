const { Router } = require('express');
const router = Router();
const apiAdapter = require('./apiAdapter');

const BASE_URL = 'http://localhost:8088';
const api = apiAdapter(BASE_URL);

router.get('/hashtags', async (req, res) => {
  console.log('GET: /hashtags');
  try {
    const { data } = await api.get(req.path);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.get('/hashtags/:name', async (req, res) => {
  console.log('GET: /hashtags/:name');
  try {
    const { data } = await api.get(req.path);
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
