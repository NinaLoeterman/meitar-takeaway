import React from "react";
import './FormCard.styles.scss';

const FormCard = ({ title, children }) => {
  return (
    <div className={"FormCard"}>
      <div className={'FormCard_title'}>{title}</div>
      {children}
    </div>
  );
};

export default FormCard;
