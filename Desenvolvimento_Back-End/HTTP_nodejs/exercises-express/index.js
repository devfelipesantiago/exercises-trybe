const express = require('express');

const app = express();

app.get('/ping', (req, res) => {
  res.json({ 'message': 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ 'message': `Hello, ${name}!`})
})
