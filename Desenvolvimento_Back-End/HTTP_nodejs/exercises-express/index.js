const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.json({
    'message': 'pong'
  });
});

app.post('/hello', (req, res) => {
  const {
    name
  } = req.body;
  res.status(200).json({
    'message': `Hello, ${name}!`
  });
});

app.post('/greetings', (res, req) => {
  const {
    name,
    age
  } = req.body;

  if (parseInt(age, 10) >= 17) res.json({
    'message': `Hello, ${name}!`
  });
  res.status(401).json({
    'message': `Unauthorized`
  });
});

app.put('/users/:name/:age', (req, res) => {
  const {
    name,
    age
  } = req.body;
  res.status(200).json({
    'message': `Seu nome é ${name} e você tem ${age} anos de idade`
  });
});