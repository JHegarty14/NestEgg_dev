var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send({ hi : 'there, pissbitch'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
