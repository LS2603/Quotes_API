const express = require('express');
const app = express();

const { quotes } = require('./data');
const { getRandomElement } = require('./utils');

const PORT = process.env.PORT || 4001;

app.use(express.static('public'));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get('/api/quotes/random', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.json({ quote: randomQuote });
});

app.get('/api/quotes', (req, res) => {
  const person = req.query.person;

  if (person) {
    const results = quotes.filter(q => q.person === person);
    res.json({ quotes: results });
  } else {
    res.json({ quotes: quotes });
  }
});

app.post('/api/quotes', (req, res) => {
  const person = req.query.person;
  const quote = req.query.quote;

  if (person && quote) {
    const newId = quotes.length > 0 ? Math.max(...quotes.map(q => q.id)) + 1 : 1;
    const newQuote = { id: newId, quote, person };
    quotes.push(newQuote);
    res.status(201).json({ quote: newQuote });
  } else {
    res.status(400).send('Both quote and person are required');
  }
});

app.put('/api/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = quotes.findIndex(q => q.id === id);

  if (index !== -1) {
    const quote = req.query.quote;
    const person = req.query.person;

    if (quote && person) {
      quotes[index] = { id, quote, person };
      res.json({ quote: quotes[index] });
    } else {
      res.status(400).send('Both quote and person are required');
    }

  } else {
    res.status(404).send('Quote not found');
  }
});

app.delete('/api/quotes/:id', (req, res) => {
  const id = Number(req.params.id);
  const index = quotes.findIndex(q => q.id === id);

  if (index !== -1) {
    quotes.splice(index, 1);
    res.status(200).send('Quote deleted');
  } else {
    res.status(404).send('Quote not found');
  }
});


