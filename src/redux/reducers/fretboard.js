let scaleReducer = (services) => {
  let { fretboardService } = services;
  
  const DEFAULT_VALUES = {
    frets: fretboardService.frets,
    instruments: fretboardService.instruments,
    supportedKeys: fretboardService.supportedKeys,
    alpha: fretboardService.alpha,
    scales: fretboardService.scales
  }

  return (state=DEFAULT_VALUES, action) => {
    switch(action.type) {
      case 'UPDATE_FRETBOARD':
        return {
          ...state,
          foo: 'FLURP!'
        }
      case 'TUNE_STRING':
        return {
          ...state,
          foo: 'zip!'
        }        
      default:
        return {
          ...state
        }
    }
  }
}

export default scaleReducer;