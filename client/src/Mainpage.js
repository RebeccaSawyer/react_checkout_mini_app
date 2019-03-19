import React, { Component } from 'react';

class Mainpage extends Component {
	constructor() {
	super();
	// this.state = {
	// }
	this.gotoCheckoutlHandler = this.gotoCheckoutHandler.bind(this);
	
}

gotoCheckoutHandler () {
   this.props.history.push('/checkout');

}
	render() {
		return (
			<div> 
			<button className="checkoutbutton"
			onClick={this.gotoCheckoutlHandler}
			>CHECKOUT</button> 
			</div>
			);
	}

}

export default Mainpage;