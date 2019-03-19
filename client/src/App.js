import React, { Component} from "react";
import Checkout from './Checkout.js';
import { Route, Switch } from 'react-router-dom';
import Mainpage from './Mainpage.js';



class App extends Component{
  render(){
    return(
      <div className="App">
      	<Switch>
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={Mainpage} />   
        </Switch> 
      </div>
    );
  }
}

export default App;