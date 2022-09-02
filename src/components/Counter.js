import '../css/Counter.css';

function Counter({clickNumbers}) {
  return (
    <div className='counter'>
      {clickNumbers}
    </div>
  );
}

export default Counter;