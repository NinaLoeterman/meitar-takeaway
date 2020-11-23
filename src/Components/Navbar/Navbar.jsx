import React from "react";
import TakeawayLogo from "../TakeawayLogo/TakeawayLogo.jsx";
import './Navbar.styles.scss'

const Navbar = () => {
  return (
    <div className={"Navbar"}>
      <TakeawayLogo type={"secondary"}/>
    </div>
  );
};

export default Navbar;
