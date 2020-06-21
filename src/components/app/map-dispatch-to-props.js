import actions from '../../redux/actions';

let mapDispatchToProps = (dispatch) => {
  return {
    bootstrap: (ob) => {
      dispatch(actions.bootstrap(ob));
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
