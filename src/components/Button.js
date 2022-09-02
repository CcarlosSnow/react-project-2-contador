import '../css/Button.css';

function Button({ text, isClick, handleClick }) {
    return (
      <button className={isClick ? 'button-click' : 'button-reset'} onClick={handleClick}>
        {text}
      </button>  
    );
}

export default Button;
