import React, { Component } from 'react';
import '../css/Button.css';

export default class Button extends Component {
  render() {
    return (
      <button className={this.props.isClick ? 'button-click' : 'button-reset'} onClick={this.props.handleClick}>
        {this.props.text}
      </button>  
    );
  }
}
