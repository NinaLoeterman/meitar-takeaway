import React, { useState, useEffect } from "react";
import "./App.scss";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import Form from "./Components/Form/Form.jsx";

const text = {
  order: "להזמין",
};

let mobile = typeof window.orientation !== "undefined" || navigator.userAgent.indexOf("IEMobile") !== -1;

function App() {
  const [appear, setAppear] = useState(true);

  const disapear = () => {
      setAppear(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", disapear);
  }, []);

  return (
    <>
      <div onScroll={disapear} className="landing">
        <MdArrowDropdown
          fontSize={!appear ? "0px" : "130px"}
          color="white"
          beat={true}
        />
      </div>
      <div className="form-wrapper">
        <Form />
      </div>
    </>
  );
}

export default App;
