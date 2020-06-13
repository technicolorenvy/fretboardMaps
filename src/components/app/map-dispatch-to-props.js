import actions from '../../redux/actions';

let mapDispatchToProps = (dispatch) => {
  return {
    updateFretboard: (params) => {
      dispatch(actions.updateFretboard(params));
    },
    tuneString: (params) => {
      dispatch(actions.tuneString(params));
    }    
  }
};

export default mapDispatchToProps
