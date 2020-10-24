import React from "react";
import "./Button.styles.scss";

const Button = ({ item, onClick }) => {
  return (
    <button onClick={onClick} className="Button">
      <div>{item.duo}</div>
      <div className="Button_subText">{item.instruments}</div>
    </button>
  );
};

export default Button;
