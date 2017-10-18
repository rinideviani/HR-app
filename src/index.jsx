import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { Provider } from 'react-redux';

import App from '../containers/App';
import Whoops from '../containers/Whoops';
import configureStore from '../store/configureStore';
import store from '../store/store'; 

import { Router, Route, hashHistory } from 'react-router'
 
 
// ...

//Needed for React Developer Tools
window.React = React;

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin(); 
//const store = configureStore();

ReactDOM.render(
  <Provider store={store}> 
  	<Router history={hashHistory}>

  		<Route path="/" component ={App} /> 
  		<Route path="add" component ={App} />
  		<Route path="*" component ={Whoops} />
  		  
  	</Router>
        
      
    </Provider>,
  document.getElementById("root")
);
