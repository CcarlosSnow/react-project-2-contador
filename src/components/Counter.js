import '../css/Counter.css';
import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    return (
      <div className='counter'>
        {this.props.clickNumbers}
      </div>
    );
  }
}
