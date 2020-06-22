/**
 * A collection of redux actions
 */
class Actions {

  /**
   * Triggers the BOOTSTRAPPING state change
   * @returns {object}
   */
  bootstrapping() {
    return {
      type: 'BOOTSTRAPPING'
    };
  }

  /**
   * Triggers the BOOTSTRAP_SUCCESS state change
   * @returns {object}
   */
  bootstrapSuccess() {
    return {
      type: 'BOOTSTRAP_SUCCESS'
    };
  }

  /**
   * Triggers the BOOTSTRAP_FAIL state change
   * @param {string} error
   * @returns {object}
   */
  bootstrapFail(error) {
    return {
      type: 'BOOTSTRAP_FAIL',
      error
    };
  }

  /**
   * Updates any appwide messageing
   * @param {object} params
   * @returns {object}
   */
  setAppMessage(params) {
    return {
      type: 'APP_MESSAGE',
      message: params.message || undefined,
      messageType: params.messageType || undefined
    };
  }

  /**
   * Updates the current theme
   * @param {object} themeName
   * @returns {object}
   */
  updateTheme(themeName) {
    return {
      type: 'UPDATE_THEME',
      themeName,
    }
  }

  /**
   * Dispatch the bootstrapping, bootstrapSuccess, and bootstrap fail fns
   * @param {object} ob
   * @returns {object}
   */
  bootstrap(ob){
    const {bootstrapper, ...bootstrapArgs} = ob;
    return (dispatch) => {
      dispatch(this.bootstrapping());
      bootstrapper(bootstrapArgs)
        .then(() => {
          dispatch(this.bootstrapSuccess())
        })
        .catch((error) => {
          dispatch(this.bootstrapFail(error))
        });
    };
  }

  setActiveInstrument(instrumentId) {
    return {
      type: 'SET_ACTIVE_INSTRUMENT',
      instrumentId
    };
  }
  
  setActiveKey(key) {
    return {
      type: 'SET_ACTIVE_KEY',
      key
    };
  }

  setActiveScale(scaleId) {
    return {
      type: 'SET_ACTIVE_SCALE',
      scaleId
    };
  }

  updateFretboard(params) {
    return {
      type: 'UPDATE_FRETBOARD',
      params      
    };
  }

  tuneString(params) {
    return {
      type: 'TUNE_STRING',
      params      
    };
  }   
}

/*
 *  A 'new-ed' Actions object ready for export
 *  @constant
 *  @type {object}
 */
const instance = new Actions();

export default instance;

