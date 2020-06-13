let actions = {
  updateFretboard: (params) => {
    return {
      type: 'UPDATE_FRETBOARD',
      params      
    };
  },
  tuneString: (params) => {
    return {
      type: 'TUNE_STRING',
      params      
    };
  }  
};

export default actions;