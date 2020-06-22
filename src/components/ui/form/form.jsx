import React, { Component } from 'react';
import './style.scss';

class Form extends Component {

  onInstrumentUpdate = (e) => {
    this.props.setActiveInstrument(e.currentTarget.value);
  }

  onKeyUpdate = (e) => {
    this.props.setActiveKey(e.currentTarget.value);
  }

  onScaleUpdate = (e) => {
    this.props.setActiveScale(e.currentTarget.value);
  }

  render() {
    return (
      <div className="form">
        <select 
          required 
          name="instrument"
          onChange={this.onInstrumentUpdate}
        >
        <option value='' disabled="disabled">
            Choose an instrument
          </option>           
          {this.props.instruments.map(instrument => {
            return (
              <optgroup key={instrument.id} label={instrument.id}>
                {instrument.types.map(iType => {
                  return (
                    <option 
                      key={iType.id} 
                      value={iType.id}
                      defaultValue={iType.id === this.props.activeInstrument.id}
                    >
                      {iType.name}
                    </option>
                  )
                })}
              </optgroup>
            );
          })}
        </select>         
        <select 
          required 
          name="key"
          onChange={this.onKeyUpdate}
        >
          <option value='' disabled="disabled">
            Choose a key
          </option>
          {this.props.supportedKeys.map(v => {
            return (
              <option 
                key={v} 
                value={v}
                defaultValue={v === this.props.activeKey}
              >
                {v}
              </option>
            );
          })}
        </select>
        <select 
          required 
          name="scale"
          onChange={this.onScaleUpdate}
        >
          <option value='' disabled="disabled">
            Choose a scale
          </option>          
          {this.props.scales.map(v => {
            return (
              <option 
                key={v.id} 
                value={v.id}
                defaultValue={v.id === this.props.activeScale.id}
              >
                {v.id}
              </option>
            );
          })}
        </select>                
      </div>
    );
  }
}

export default Form;
