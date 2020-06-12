import React, { Component } from 'react';
import './style.scss';

class InstrumentString extends Component {
  
  render() {
    return (
      <div className="instrument-string">
        Imma string {this.props.base}
      </div>
    );
  }
}

export default InstrumentString;
