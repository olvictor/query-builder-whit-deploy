const express = require('express');
const rotas = require('./rotas');
const cors = require('cors');
require('dotenv').config()

const port = process.env.PORT || 3000
const app = express();

app.use(express.json());
app.use(cors());
app.use(rotas);

app.listen(port);