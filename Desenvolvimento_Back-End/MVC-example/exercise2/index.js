const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

