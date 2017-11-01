import { combineReducers } from 'redux'; 
import employees from './userReducer';


const rootReducer = combineReducers({  
      employees
});

export default rootReducer;
