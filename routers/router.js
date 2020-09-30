const { Router } = require('express');
const router = Router()

const feedService = require('./feedService')
const hashtagService = require('./hashtagService')

router.use((req, res, next) => {
  console.log("Called: ", req.path)
  next();
});

router.use(feedService);
router.use(hashtagService);

module.exports = router;
