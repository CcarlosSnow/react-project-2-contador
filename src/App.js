import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logo from './images/freecodecamp-logo.jpeg';
import { useState } from 'react';

function App() {

  const [clickNumbers, setClickNumbers] = useState(0);

  const handleClick = () => {
    setClickNumbers(clickNumbers + 1);
  };

  const handleReset = () => {
    setClickNumbers(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img
        className='freecodecamp-logo'
          src={logo}
          alt='Logo de freecodecamp' />
      </div>
      <div className='main-container'>
        <Counter clickNumbers={clickNumbers}></Counter>
        <Button text='Click' isClick={true} handleClick={handleClick} />
        <Button text='Reset' isClick={false} handleClick={handleReset} />
      </div>
    </div>
  );
}

export default App;
