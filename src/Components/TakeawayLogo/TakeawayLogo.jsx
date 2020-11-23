import React from "react";
import "./TakeawayLogo.styles.scss";

const TakeawayLogo = ({ type }) => {
  const text = {
    meitar: "אנסמבל מיתר",
    takeaway: "Takeaway",
  };

  return (
    <div className={`TakeawayLogo_title_wrapper ${type}`}>
      <div className="TakeawayLogo_title">{text.meitar}</div>
      <div className="TakeawayLogo_subTitle">{text.takeaway}</div>
    </div>
  );
};

export default TakeawayLogo;
