const express = require('express');
const port = 3000;

let app = express();
app.use(express.static(__dirname));
//app.get('/', (req, res) => {
  //res.send('index.html');
//
//});

app.listen(port, () => {
  console.log(`listening on ${port}...`);
})
