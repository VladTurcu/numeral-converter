const express = require('express');
const app = express();
const router = express.Router();
const numeralConverter = require('./NumeralConverter');
const port = 3000;

// number endpoint, corresponds to NumeralConverter.toNumeral
router.route('/number')
  // support get request only
  .get((req, res, next) => {
    const number = parseInt(req.query.q);
    const numeral = numeralConverter.toNumeral(number);
    return res.status(200).json({ numeral });
  });

// numeral endpoint, corresponds to NumeralConverter.toNumber
router.route('/numeral')
  // support get request only
  .get((req, res, next) => {
    const number = numeralConverter.toNumber(req.query.q);
    return res.status(200).json({ number });
  });

// return 404 to requests to any other path
router.route('/*')
  .all((req, res, next) => res.status(404).json({ message: 'Invalid path'}));

app.use('/api', router);

// error handler
app.use((err, req, res, next) => {
  if (err instanceof TypeError) res.status(400);
  else if (err instanceof SyntaxError) res.status(400);
  else if (err instanceof RangeError) res.status(400);
  else res.status(500);
  const { message = 'Interal Server Error' } = err;
  res.json({ message });
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));