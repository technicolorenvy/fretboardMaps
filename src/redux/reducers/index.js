import { combineReducers } from 'redux';
import builderService from '../../services/builder'
import fretboardService from '../../services/fretboard'
import appReducer from './app';

export default combineReducers({
  app: appReducer({ builderService, fretboardService })
});