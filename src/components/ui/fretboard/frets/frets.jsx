import React, { Component } from 'react';
import './style.scss';

class Fretboard extends Component {

  constructor(props) {
    super(props);

    this.frets = [];
    this.fretPercent = null;

    this.buildFrets();
  }
  
  buildFrets() {
    let fretCount = this.props.count;
    this.fretPercent = 100 / fretCount;
    for (let i = 1; i < fretCount; i++) {
      this.frets.push(i);
    }
    console.log(this.frets)
  }

  render() {
    return (
      <div className="frets">
        {this.frets.map(v => {
          let _style = { top: `${this.fretPercent * v}%` };
          return <div key={v} className="fret" style={_style} />
        })}
    </div>
    );
  }
}

export default Fretboard;
