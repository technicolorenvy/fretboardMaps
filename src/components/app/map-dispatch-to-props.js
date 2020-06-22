import actions from '../../redux/actions';

let mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: (params) => {
      dispatch(actions.bootstrap(params));
    },    
    setActiveInstrument: (instrumentId) => {
      dispatch(actions.setActiveInstrument(instrumentId));
    },
    setActiveKey: (key) => {
      dispatch(actions.setActiveKey(key));
    },
    setActiveScale: (scaleId) => {
      dispatch(actions.setActiveScale(scaleId));
    },
    updateFretboard: (params) => {
      dispatch(actions.updateFretboard(params));
    },
    tuneString: (params) => {
      dispatch(actions.tuneString(params));
    }    
  }
};

export default mapDispatchToProps
