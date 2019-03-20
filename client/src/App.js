import React, { Component} from "react";
import Checkout from './Checkout.js';
import { Route, Switch } from 'react-router-dom';
import Mainpage from './Mainpage.js';
import Shipment from './Shipment.js';
import Payment from './Payment.js';



class App extends Component{
  render(){
    return(
      <div className="App">
      	<Switch>
        <Route path="/checkout/shipment-info/payment-info" component={Payment} />
        <Route path="/checkout/shipment-info" component={Shipment} />
        <Route path="/checkout" component={Checkout} />   
        <Route path="/" exact component={Mainpage} />   
        </Switch> 
      </div>
    );
  }
}

export default App;