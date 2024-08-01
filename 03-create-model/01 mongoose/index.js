const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send("Home")
});

const port = 5000;
app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`);
});