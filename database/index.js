const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/customerdata', { useNewUrlParser: true });
const db = mongoose.connection;

// var customerData = mongoose.Schema({

// 	name: String,
// 	email: String,
// 	password: String
// });
var customerData = mongoose.Schema({


	name: String,
	email: String,
	password: String,
	housenumber: String,
	streetname: String,
	city: String,
	state: String,
	zipcode: String,
	phonenumber: String,
	cardnumber: String,
	expirydate: String,
	cvv: String,
	billingzipcode: String	

});


var customerOrder = mongoose.model('Order', customerData);

  var save = function (newdata) {
  var newOrder = new customerOrder(newdata);
  newOrder.save();
 

 }

module.exports.save = save;
module.exports.customerOrder = customerOrder;
