import React, { Component } from 'react';
import classes from './App.css';

class Shipment extends Component {

constructor() {
	super();
	this.state = {
	housenumber: '',
	streetname: '',
	city: '',
	state: '',
	zipcode: '',
	phonenumber: ''
		
	}
	this.checkoutCancelHandler = this.checkoutCancelHandler.bind(this);
	this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);

	this.onChangeHouseNumber = this.onChangeHouseNumber.bind(this);
	this.onChangeStreetName = this.onChangeStreetName.bind(this);
	this.onChangeCity = this.onChangeCity.bind(this);
	this.onChangeState = this.onChangeState.bind(this);
	this.onChangeZipCode = this.onChangeZipCode.bind(this);
	this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
    }

	checkoutCancelHandler () {
		this.props.history.goBack();
	}

	checkoutContinueHandler () {
		this.handleSubmit();
		this.props.history.push('/checkout/shipment-info/payment-info');

	}

	onChangeHouseNumber (event) {
    this.setState({
     housenumber: event.target.value
    });
  	}
  	onChangeStreetName (event) {
    this.setState({
    streetname: event.target.value
    });
  	}
  	onChangeCity (event) {
    this.setState({
    city: event.target.value
    });
  	}
  	onChangeState (event) {
    this.setState({
    state: event.target.value
    });
  	}
  	onChangeZipCode (event) {
    this.setState({
    zipcode: event.target.value
    });
  	}
  	onChangePhoneNumber (event) {
    this.setState({
    phonenumber: event.target.value
    });
  	}



handleSubmit () {
  //event.preventDefault();
  fetch("http://localhost:5000/checkout/shipment-info", {
   method: 'POST',
   headers: {'Content-Type':'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/checkout'},
   body: JSON.stringify({
 	housenumber: this.state.housenumber,
	streetname: this.state.streetname,
	city: this.state.city,
	state: this.state.state,
	zipcode: this.state.zipcode,
	phonenumber: this.state.phonenumber
   })
  })
 }

	render() {
		return (
			<div> 
			<Shipmentsummary order={this.state.items}
			contactinfo={this.state}
			checkoutCancel={this.checkoutCancelHandler} 
			checkoutContinue={this.checkoutContinueHandler}
			handleSubmit={this.handleSubmit}
			onChangeHouseNumber={this.onChangeHouseNumber}
			onChangeStreetName={this.onChangeStreetName}
			onChangeCity={this.onChangeCity}
			onChangeState={this.onChangeState}
			onChangeZipCode={this.onChangeZipCode}
			onChangePhoneNumber={this.onChangePhoneNumber}

			/>
			</div>
			);
	}

}

const Shipmentsummary = (props) => {


	return (
	<div className={classes.Checkout}>
	<h1>We hope you will like it!</h1>
	<h4>Please enter your shipment address</h4>

	<div className={classes.ContactInfo}>
	<form>
	<input className={classes.Input} type="housenumber" name="housenumber" placeholder="Your house or apartment number" onChange={props.onChangeHouseNumber}/> <br />
	<input className={classes.Input} type="streetname" name="streetname" placeholder="Street name" onChange={props.onChangeStreetName}/> <br />
	<input className={classes.Input} type="city" name="city" placeholder="City" onChange={props.onChangeCity}/> <br />
	<input className={classes.Input} type="state" name="state" placeholder="State" onChange={props.onChangeState}/> <br />
	<input className={classes.Input} type="zipcode" name="zipcode" placeholder="Zip code" onChange={props.onChangeZipCode}/> <br />
	<input className={classes.Input} type="phonenumber" name="phonenumber" placeholder="Phone number" onChange={props.onChangePhoneNumber}/>
	</form>
														</div>
	<div style={{width: '100%', height: '200px', margin: 'auto'}}>
	</div>
	<button className="cancel"
			onClick={props.checkoutCancel}>Cancel</button>
	<button className="continue"
			onClick={props.checkoutContinue}>Continue</button>
							</div>
	)

}
export default Shipment;