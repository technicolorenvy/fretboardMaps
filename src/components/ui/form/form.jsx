import React, { Component } from 'react';
import './style.scss';


const KEYS = ['a', 'b', 'c'];
const COLORS = ['major', 'minor'];
const INSTRUMENTS = ['guitar', 'bass', 'banjo', 'mandolin'];

class Form extends Component {

  onSelectUpdate = () => {

  } 

  render() {
    return (
      <div className="form">
        <select 
          required 
          name="keys"
          onChange={this.onSelectUpdate}
        >
          <option value='' selected="true" disabled="disabled">
            Choose a key
          </option>
          {KEYS.map(v => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>
        <select 
          required 
          name="colors"
          onChange={this.onSelectUpdate}
        >
          <option value='' selected="true" disabled="disabled">
            Choose a scale color
          </option>          
          {COLORS.map(v => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>   
        <select 
          required 
          name="instruments"
          onChange={this.onSelectUpdate}
        >
        <option value='' selected="true" disabled="disabled">
            Choose an instrument
          </option>           
          {INSTRUMENTS.map(v => {
            return (
              <option key={v} value={v}>
                {v}
              </option>
            );
          })}
        </select>              
      </div>
    );
  }
}

export default Form;
