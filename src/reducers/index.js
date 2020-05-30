import { combineReducers } from 'redux';
import basketReducer from './basket';
import userReducer from './user';

export default combineReducers({
     basket: basketReducer,
     user: userReducer
});