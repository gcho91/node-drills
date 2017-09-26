const express = require('express');
const bodyParser = require('body-Parser');
const cors = require('cors');
const port = 3000;

const app = express();

//middleware//
app.use(bodyParser.json());
app.use(cors());
//

app.listen(port, function() {
  console.log("Mom's spaghetti")
})
