import React, { Component } from 'react';
import classes from './App.css';
//import axios from 'axios';

class Checkout extends Component {

constructor() {
	super();
	this.state = {
		name: '',
		email: '',
		password: ''
		
	}
	this.checkoutCancelHandler = this.checkoutCancelHandler.bind(this);
	this.checkoutContinueHandler = this.checkoutContinueHandler.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
	this.onChangeName = this.onChangeName.bind(this);
	this.onChangeEmail = this.onChangeEmail.bind(this);
	this.onChangePassword = this.onChangePassword.bind(this);
    }

	checkoutCancelHandler () {
		this.props.history.goBack();
	}

	checkoutContinueHandler () {
		this.handleSubmit();
		this.props.history.push('/checkout/shipment-info');

	}

	onChangeName (event) {
    this.setState({
      name: event.target.value
    });
  	}
  	onChangeEmail (event) {
    this.setState({
      email: event.target.value
    });
  	}
  	onChangePassword (event) {
    this.setState({
      password: event.target.value
    });
  	}


handleSubmit () {
  //event.preventDefault();
  fetch("http://localhost:5000/checkout", {
   method: 'POST',
   headers: {'Content-Type':'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Origin': 'http://localhost:5000/checkout'},
   body: JSON.stringify({
    "name": this.state.name,
    "email": this.state.email,
    "password": this.state.password
   })
  })
 }

	render() {
		return (
			<div> 
			<Checkoutsummary order={this.state.items}
			contactinfo={this.state}
			checkoutCancel={this.checkoutCancelHandler} 
			checkoutContinue={this.checkoutContinueHandler}
			handleSubmit={this.handleSubmit}
			onChangeName={this.onChangeName}
			onChangeEmail={this.onChangeEmail}
			onChangePassword={this.onChangePassword}
			/>
			</div>
			);
	}

}

const Checkoutsummary = (props) => {


	return (
	<div className={classes.Checkout}>
	<h1>Enjoy your new purchase!</h1>
	<h4>Please enter your contact info</h4>

	<div className={classes.ContactInfo}>
	<form>
	<input className={classes.Input} type="text" name="name" placeholder="Your name" onChange={props.onChangeName}/> <br />
	<input className={classes.Input} type="email" name="email" placeholder="email" onChange={props.onChangeEmail}/> <br />
	<input className={classes.Input} type="text" name="password" placeholder="password" onChange={props.onChangePassword}/>
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
export default Checkout;

