import React from 'react';

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="btn rad-5x col-white bg-purple wdt-3x">{text}</button>
  );
}

export default Button;