// import changeTheNumber from './UpDownNumber'
import todoReducers from './todoReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    // changeTheNumber
    todoReducers
});

export default rootReducer;