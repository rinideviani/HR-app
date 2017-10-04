import { combineReducers } from 'redux';
import todos from './todos';
import user from './userReducer';


const rootReducer = combineReducers({  
     user
});

export default rootReducer;
