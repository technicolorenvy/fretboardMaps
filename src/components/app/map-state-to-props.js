let mapStateToProps = (state) => {
  return {
    frets: state.fretboard.frets,
    instruments: state.fretboard.instruments,
    supportedKeys: state.fretboard.supportedKeys,
    alpha: state.fretboard.alpha,
    scales: state.fretboard.scales    
  }
};

export default mapStateToProps
