import {applyMiddleware, createStore}  from "redux";
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducers from '../reducers';
 

const middleware = applyMiddleware(promise(), 
	thunk, createLogger());
 

export default function configureStore() {  
  return createStore(
    reducers,
    middleware
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}