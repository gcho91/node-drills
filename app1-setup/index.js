const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');

const app = express();

//middleware//
app.use(bodyParser.json());
app.use(cors());
//
