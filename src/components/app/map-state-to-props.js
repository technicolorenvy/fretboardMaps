let mapStateToProps = (state) => {
  return {
    bootstrapping: state.app.bootstrapping,
    bootstrapped: state.app.bootstrapped,
    bootstrapError: state.app.bootstrapError,    
    frets: state.app.frets,
    instruments: state.app.instruments,
    supportedKeys: state.app.supportedKeys,
    alpha: state.app.alpha,
    scales: state.app.scales    
  }
};

export default mapStateToProps
