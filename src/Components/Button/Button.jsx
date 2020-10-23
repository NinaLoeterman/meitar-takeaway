import React from "react";
import './Button.styles.scss';

const Button = ({text, onClick}) => {
  return (
      <button onClick={onClick} className="Button">{text}</button>
  );
};

export default Button;
