import app from '../data/app.json';
import { parallel } from 'async-es';


class BuilderService {

  constructor() {
    this.frets = app.frets;
    this.supportedKeys = app.supportedKeys;
    this.alpha = app.alpha;
    this.scales = app.scales;
    this.instruments = [];
  }

  /**
   * Import all instrument configs
   */
  importInstruments() {
    let instruments = {},
        _instruments = {};
    
    // Create the import fns
    app.instruments.forEach((instrument) => {
      instruments[instrument] = (callback) => {
        import(`../data/instruments/${instrument}`).then( res => callback(null, res) ); 
      }  
    })

    return new Promise((resolve) => {
      // Fetch all the things
      parallel(instruments, (innerErr, innerRes) => {
        Object.keys(innerRes).forEach(v => {
          _instruments[v] = innerRes[v].default;
        })
        this.instruments = app.instruments.map(instrument => _instruments[instrument]);   
        resolve();
      })
    });
  }
}

const instance = new BuilderService();
export default instance;