import { combineReducers } from 'redux';
import { counterReducer } from './counter/counter-reducer';
import { technologyReducer } from './technologies/technologies-reducer';

export const rootReducer = combineReducers({
  counter: counterReducer,
  technology: technologyReducer,
});
