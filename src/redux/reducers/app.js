let appReducer = (services) => {
  let { builderService, fretboardService } = services;
  
  const DEFAULT_VALUES = {
    bootstrapped: false,
    bootstrapping: false,
    bootstrapError: null,    
    frets: fretboardService.frets,
    instruments: [],
    supportedKeys: fretboardService.supportedKeys,
    alpha: fretboardService.alpha,
    scales: fretboardService.scales
  }

  return (state=DEFAULT_VALUES, action) => {
    switch(action.type) {
      case 'BOOTSTRAPPING':
        return {
          ...state,
          bootstrapping: true
        };
      case 'BOOTSTRAP_SUCCESS':
        return {
          ...state,
          bootstrapping: false,
          bootstrapped: true,
          instruments: builderService.instruments
        };
      case 'BOOTSTRAP_FAIL':
        console.error('BOOTSTRAP_FAIL', action.error);
        return {
          ...state,
          bootstrapping: false,
          bootstrapError: action.error
        };      
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

export default appReducer;