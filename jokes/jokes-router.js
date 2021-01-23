const axios = require('axios');
const {authenticate} = require("../auth/authenticate-middleware")

const router = require('express').Router();

router.get('/', authenticate(), async (req, res, next) => {
  const requestOptions = {
    headers: { accept: 'application/json' },
  };

  await axios
    .get('https://icanhazdadjoke.com/search', requestOptions)
    .then(response => {
      res.status(200).json(response.data.results);
      next()
    })
    .catch(err => {
      res.status(500).json({ message: 'Error Fetching Jokes', error: err });
    });
});

module.exports = router;
