const DEFAULT_VALUES = {
  foo: 'bar'
}

let scaleReducer = (services) => {
  let { fretboardService } = services;

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