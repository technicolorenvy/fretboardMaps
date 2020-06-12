const DEFAULT_VALUES = {
  foo: 'bar'
}

let scaleReducer = () => {
  return (state=DEFAULT_VALUES, action) => {
    switch(action.type) {
      case 'THING':
        return {
          ...state,
          foo: 'thing'
        }
      default:
        return {
          ...state
        }
    }
  }
}

export default scaleReducer;