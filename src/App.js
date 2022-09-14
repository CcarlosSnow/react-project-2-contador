import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './images/freecodecamp-logo.jpeg';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      clickNumbers: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    this.setState(({clickNumbers}) => ({
      clickNumbers: clickNumbers + 1
    }));
  };

  handleReset() {
    this.setState({
      clickNumbers: 0
    });
  };

  render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-container'>
          <img
          className='freecodecamp-logo'
            src={logo}
            alt='Logo de freecodecamp' />
        </div>
        <div className='main-container'>
          <Counter clickNumbers={this.state.clickNumbers}></Counter>
          <Button text='Click' isClick={true} handleClick={this.handleClick} />
          <Button text='Reset' isClick={false} handleClick={this.handleReset} />
        </div>
      </div>
    );
  }
}
