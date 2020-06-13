import React, { Component } from 'react';
import Frets from './frets/frets';
import InstrumentString from './instrument-string/instrument-string';
import './style.scss';

const STRINGS_MOCK = [ 'g','d','g','b','d' ];

class Fretboard extends Component {
  render() {
    return (
      <div className="fretboard">
        <Frets
          count={this.props.frets}
        />
        <div className="instrument-strings">
          {STRINGS_MOCK.map((n,i) => {
            return <InstrumentString key={`${n}-${i}`} base={n}/>
          })}
        </div>
      </div>
    );
  }
}

export default Fretboard;
