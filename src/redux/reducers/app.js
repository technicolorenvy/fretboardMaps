let appReducer = (services) => {
  let { fretboardService } = services;
  
  const DEFAULT_VALUES = {
    bootstrapped: false,
    bootstrapping: false,
    bootstrapError: null,    
    frets: fretboardService.frets,
    supportedKeys: fretboardService.supportedKeys,
    alpha: fretboardService.alpha,
    scales: fretboardService.scales,
    instruments: [],
    activeInstrument: null,
    activeKey: null,
    activeScale: null
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
          instruments: fretboardService.instruments,
          activeKey: fretboardService.activeKey,
          activeInstrument: fretboardService.getActiveInstrument(),
          activeScale: fretboardService.getActiveScale()
        };
      case 'BOOTSTRAP_FAIL':
        console.error('BOOTSTRAP_FAIL', action.error);
        return {
          ...state,
          bootstrapping: false,
          bootstrapError: action.error
        };      
      case 'SET_ACTIVE_INSTRUMENT':
        fretboardService.activeInstrumentId = action.instrumentId;
        return {
          ...state,
          activeInstrument: fretboardService.getActiveInstrument()
        }  
      case 'SET_ACTIVE_KEY':
        fretboardService.activeKey = action.key;
        return {
          ...state,
          activeKey: fretboardService.activeKey
        }  
      case 'SET_ACTIVE_SCALE':
        fretboardService.scaleId = action.scale;
        return {
          ...state,
          activeScale: fretboardService.getActiveScale()
        }                      
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