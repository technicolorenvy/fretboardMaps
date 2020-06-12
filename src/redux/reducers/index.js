import { combineReducers } from 'redux';

import scaleReducer from './scale';

export default combineReducers({
  scale: scaleReducer()
});