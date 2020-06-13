import React, { Component } from 'react';
import './style.scss';

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
          {this.props.supportedKeys.map(v => {
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
            Choose a scale
          </option>          
          {this.props.scales.map(v => {
            return (
              <option key={v.id} value={v.id}>
                {v.id}
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
          {this.props.instruments.map(v => {
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
