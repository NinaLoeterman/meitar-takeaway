import React from "react";
import "./MeitarTakeaway.styles.scss";

const MeitarTakeaway = () => {
  const text = {
    meitar: "אנסמבל מיתר",
    takeaway: "Takeaway",
  };

  return (
    <div className="MeitarTakeaway">
      <div className="MeitarTakeaway_meitar">{text.meitar}</div>
      <div className="MeitarTakeaway_takeaway">{text.takeaway}</div>
    </div>
  );
};

export default MeitarTakeaway;
