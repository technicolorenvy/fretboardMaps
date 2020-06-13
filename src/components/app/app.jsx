import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStateToProps from './map-state-to-props'
import mapDispatchToProps from './map-dispatch-to-props'
import {
  Form,
  Fretboard
} from '../ui';

import './style.scss';

class App extends Component {

  render() {
    return (
      <div className="app">
        <header>
          <h1>Fretboard Maps</h1>
        </header>
        <section className="content">
          <section className="left">
            <Fretboard 
              {...this.props}
            />            
          </section>
          <section className="right">
            <Form 
              {...this.props}
            />
          </section>
        </section>
        <footer>
          <p>
            Written by Joseph (Jos) Smith. Code on <a href="https://github.com/technicolorenvy/fretboardMaps">Github</a>.        
          </p>
        </footer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
