import { combineReducers } from 'redux';
import fretboardService from '../../services/fretboard'
import appReducer from './app';

export default combineReducers({
  app: appReducer({ fretboardService })
});