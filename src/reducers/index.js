import { combineReducers } from 'redux';
import inputString from './inputString';

export default  combineReducers({
	display: inputString,
});
