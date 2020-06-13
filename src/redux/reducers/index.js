import { combineReducers } from 'redux';
import fretboardService from '../../services/fretboard'
import fretboardReducer from './fretboard';

export default combineReducers({
  fretboard: fretboardReducer({ fretboardService })
});