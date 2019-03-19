const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
const cors = require('cors');
//const db = require('../database/index.js');

//app.use(express.static(__dirname + './client/public'));
// app.get('/checkout', (req, res) => {
// 	console.log('checkout');
// 	res.end();
// })
// app.get('/', function(req, res) {
//     res.sendFile(__dirname + '/client/public/index.html');
// });
const port = 5000;
app.use (cors());

app.post('/checkout', jsonParse, function (req, res) {
//Save data to database
//db.save(contactInfo);
  console.log(req.body);
 	
});

app.listen(port, () => console.log(`Server started on port ${port}`));
