import React from 'react';

const Button = ({text, onClick}) => {
  return (
    <button onClick={onClick}className="btn rad-5x col-white bg-purple wdt-2x">{text}</button>
  );
}

export default Button;