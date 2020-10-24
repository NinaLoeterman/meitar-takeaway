import React, { useState, useEffect } from "react";
import "./App.scss";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import Form from "./Components/Form/Form.jsx";
import Button from "./Components/Button/Button.jsx";
// import { Collapse } from "react-collapse";
import AOS from "aos";
import "aos/dist/aos.css";
import { Collapse } from "@material-ui/core";
import Grow from "@material-ui/core/Grow";

const item1 = {
  duo: "הגר ויונתן",
  instruments: "חליל וקלרינט",
};
const item2 = {
  duo: "רעות ונדב",
  instruments: "סופרן ובסון",
};

function App() {
  const [itemOpacity, setItemOpacity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const disapear = () => {
    setIsScrolled(true);
    setItemOpacity(0);
    // const newOpacity =
    //   (document.body.offsetHeight - window.scrollY * 4) /
    //   document.body.offsetHeight;
    // setItemOpacity(newOpacity.toFixed(2));
  };

  const toggleForm = () => {
    console.log("hello");
    setIsOpen(true);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  useEffect(() => {
    window.addEventListener("scroll", disapear);
  }, []);
  console.log(isOpen);
  return (
    <>
      <div onScroll={disapear} className="landing">
        {isScrolled && (
          <div className="main_wrapper">
            <div data-aos="fade-up" className="button_wrapper">
              <Button onClick={toggleForm} item={item1} />
              <Button onClick={toggleForm} item={item2} />
            </div>
            {isOpen && (
              <div className="form-wrapper">
                <Form />
              </div>
            )}
          </div>
        )}

        <MdArrowDropdown
          style={{ opacity: itemOpacity }}
          className="scrollDown"
          fontSize={"130px"}
          color="white"
        />
      </div>
    </>
  );
}

export default App;
