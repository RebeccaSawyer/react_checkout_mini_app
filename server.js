const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParse = bodyParser.json();
const cors = require('cors');
const db = require('./database/index.js');
const customerOrder = require('./database/index.js');
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

//var customerPassword; // <== to find a document in the database by unique password provided with each POST request to /checkout;
  var newOrder = {
  	name: '',
  	email: '',
  	password: '',
    housenumber: '',
	streetname: '',
	city: '',
	state: '',
	zipcode: '',
	phonenumber: '',
	cardnumber: '',
	expirydate: '',
	cvv: '',
	billingzipcode: ''	

  };

app.post('/checkout', jsonParse, function (req, res) {
//Save data to database
//db.save(contactInfo);
  console.log(req.body);
  customerPassword = req.body.password;
  console.log(customerPassword);
 
  	newOrder.name = req.body.name;
  	newOrder.email = req.body.email;
  	newOrder.password = req.body.password;
 	
});
app.post('/checkout/shipment-info', jsonParse, function (req, res) {
  console.log(req.body);

    newOrder.housenumber = req.body.housenumber;
	newOrder.streetname = req.body.streetname;
	newOrder.city = req.body.city;
	newOrder.state = req.body.state;
	newOrder.zipcode = req.body.zipcode;
	newOrder.phonenumber =req.body.phonenumber;

 //  let newOrder = {
  
	// housenumber: req.body.housenumber,
	// streetname: req.body.streetname,
	// city: req.body.city,
	// state: req.body.state,
	// zipcode: req.body.zipcode,
	// phonenumber: req.body.phonenumber
 //  };
//  	var housenumber = req.body.housenumber;
// 	var streetname = req.body.streetname;
// 	var city = req.body.city;
// 	var state = req.body.state;
// 	var zipcode = req.body.zipcode;
// 	var phonenumber =req.body.phonenumber;

//   customerOrder.customerOrder.update(
//     {password: customerPassword}, // find a document with that filter
//     {$push: {housenumber: housenumber,
// 	streetname: streetname,
// 	city: city,
// 	state: state,
// 	zipcode: zipcode,
// 	phonenumber: phonenumber}},
//     {new: true} 

// );
 	
});
app.post('/checkout/shipment-info/payment-info', jsonParse, function (req, res) {
//Save data to database
//db.save(contactInfo);
  console.log(req.body);
  
    newOrder.cardnumber = req.body.cardnumber;
	newOrder.expirydate = req.body.expirydate;
	newOrder.cvv = req.body.cvv;
	newOrder.billingzipcode = req.body.billingzipcode;

  db.save(newOrder)
 	
});

app.listen(port, () => console.log(`Server started on port ${port}`));
