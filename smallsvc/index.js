const express = require('express');

const app = express();
const port = 3002;

app.get('/moreThings', (req, res) => {
  const data = {
    hi: getRandomName(),
    goodbye: getRandomName(),
    hello: getRandomName(),
  };
  res.json(data);
});

function getRandomName() {
  const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace'];
  return names[Math.floor(Math.random() * names.length)];
}

app.listen(port, () => {
  console.log(`smallsvc listening at http://localhost:${port}`);
});
