import { combineReducers } from 'redux';
import dicts from './dicts';
import todos from './todos';

const rootReducer = combineReducers({
  dicts, todos
});

export default rootReducer;