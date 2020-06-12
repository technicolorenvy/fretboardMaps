import actions from '../../redux/actions';

let mapDispatchToProps = (dispatch) => {
  return {
    doBar: (params) => {
      dispatch(actions.doBar(params));
    }
  }
};

export default mapDispatchToProps
