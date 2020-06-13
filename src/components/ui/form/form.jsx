import React, { Component } from 'react';
import './style.scss';

const KEYS = ['a', 'b', 'c'];
const COLORS = ['major', 'minor'];
const INSTRUMENTS = ['guitar', 'bass', 'banjo', 'mandolin', 'custom'];

class Form extends Component {

  constructor(props) {
    super(props);

    this.state = {
      key: '',
      color: '',
      instrument: ''
    };
  }

  onSelectUpdate = (e) => {
    let newState = {},
        { name, value } = e.currentTarget;        
    newState[name] = value;
    this.setState(newState, () => {
      this.props.updateFretboard(this.state);
    });
  } 

  render() {
    return (
      <div className="form">
        <select 
          required 
          name="key"
          onChange={this.onSelectUpdate}
          value={this.state.activeKey}
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
          name="color"
          onChange={this.onSelectUpdate}
          value={this.state.activeColor}
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
          name="instrument"
          onChange={this.onSelectUpdate}
          value={this.state.activeColor}
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
