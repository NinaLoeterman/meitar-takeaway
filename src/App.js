import React, { useState, useEffect } from "react";
import "./App.scss";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import Form from "./Components/Form/Form.jsx";

let mobile =
  typeof window.orientation !== "undefined" ||
  navigator.userAgent.indexOf("IEMobile") !== -1;

function App() {
  const [itemOpacity, setItemOpacity] = useState(1);

  const disapear = () => {
    const newOpacity =
      (document.body.offsetHeight - (window.scrollY*4)) /
      document.body.offsetHeight;

    setItemOpacity(newOpacity.toFixed(2));
  };

  useEffect(() => {
    window.addEventListener("scroll", disapear);
  }, []);

  return (
    <>
      <div onScroll={disapear} className="landing">
        <MdArrowDropdown style={{opacity: itemOpacity}} className="scrollDown" fontSize={"130px"} color="white" />
      </div>
      <div className="form-wrapper">
        <Form />
      </div>
    </>
  );
}

export default App;
