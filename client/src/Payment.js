import React, { Component } from 'react';
import classes from './App.css';

class Payment extends Component {

constructor() {
	super();
	this.state = {
	cardnumber: '',
	expirydate: '',
	cvv: '',
	billingzipcode: ''	
	}

	this.checkoutCancelHandler = this.checkoutCancelHandler.bind(this);
	this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.onChangeCardNumber = this.onChangeCardNumber.bind(this);
	this.onChangeExpiryDate = this.onChangeExpiryDate.bind(this);
	this.onChangeCVV = this.onChangeCVV.bind(this);
	this.onChangeBillingZipCode = this.onChangeBillingZipCode.bind(this);

    }

	checkoutCancelHandler () {
		this.props.history.goBack();
	}

	checkoutContinueHandler () {
		this.handleSubmit();
		this.props.history.push('/');

	}

	onChangeCardNumber (event) {
    this.setState({
    cardnumber: event.target.value
    });
  	}
  	onChangeExpiryDate (event) {
    this.setState({
    expirydate: event.target.value
    });
  	}
  	onChangeCVV (event) {
    this.setState({
    cvv: event.target.value
    });
  	}
  	onChangeBillingZipCode (event) {
    this.setState({
    billingzipcode: event.target.value
    });
  	}

handleSubmit () {
  //event.preventDefault();
  fetch("http://localhost:5000/checkout/shipment-info/payment-info", {
   method: 'POST',
   headers: {'Content-Type':'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/checkout'},
   body: JSON.stringify({
 	cardnumber: this.state.cardnumber,
	expirydate: this.state.expirydate,
	cvv: this.state.cvv,
	billingzipcode: this.state.billingzipcode
   })
  })
 }

	render() {
		return (
			<div> 
			<Paymentsummary order={this.state.items}
			contactinfo={this.state}
			checkoutCancel={this.checkoutCancelHandler} 
			checkoutContinue={this.checkoutContinueHandler}
			handleSubmit={this.handleSubmit}
			onChangeCardNumber={this.onChangeCardNumber}
			onChangeExpiryDate ={this.onChangeExpiryDate }
			onChangeCVV={this.onChangeCVV}
			onChangeBillingZipCode={this.onChangeBillingZipCode}

			/>
			</div>
			);
	}

}

const Paymentsummary = (props) => {


	return (
	<div className={classes.Checkout}>
	<h1>Almost done!</h1>
	<h4>Please enter your credit card info</h4>

	<div className={classes.ContactInfo}>
	<form>
	<input className={classes.Input} type="cardnumber" name="cardnumber" placeholder="Your house or apartment number" onChange={props.onChangeCardNumber}/> <br />
	<input className={classes.Input} type="expirydate" name="expirydate" placeholder="Street name" onChange={props.onChangeExpiryDate}/> <br />
	<input className={classes.Input} type="cvv" name="cvv" placeholder="City" onChange={props.onChangeCVV}/> <br />
	<input className={classes.Input} type="billingzipcode" name="billingzipcode" placeholder="Phone number" onChange={props.onChangeBillingZipCode}/>
	</form>
														</div>
	<div style={{width: '100%', height: '200px', margin: 'auto'}}>
	</div>
	<button className="cancel"
			onClick={props.checkoutCancel}>Cancel</button>
	<button className="continue"
			onClick={props.checkoutContinue}>SUBMIT</button>
							</div>
	)

}
export default Payment;