import React, { useState, useEffect } from "react";
import "./App.scss";
import MdArrowDropdown from "react-ionicons/lib/MdArrowDropdown";
import Form from "./Components/Form/Form.jsx";
import Button from "./Components/Button/Button.jsx";
import { Collapse } from "react-collapse";

const text = {
  item1: "הגר(חליל) ויונתן(קלרינט)",
  item2: "רעות(סופרן) ונדב(בסון)",
};

function App() {
  const [itemOpacity, setItemOpacity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const disapear = () => {
    const newOpacity =
      (document.body.offsetHeight - window.scrollY * 4) /
      document.body.offsetHeight;
    setItemOpacity(newOpacity.toFixed(2));
  };

  const toggleForm = () => {
    console.log('hello')
    setIsOpen(true)
  }

  useEffect(() => {
    window.addEventListener("scroll", disapear);
  }, []);
  console.log(isOpen)
  return (
    <>
      <div onScroll={disapear} className="landing">
        <MdArrowDropdown
          style={{ opacity: itemOpacity }}
          className="scrollDown"
          fontSize={"130px"}
          color="white"
        />
      </div>
      <div className="button_wrapper">
        <Button onClick={toggleForm} text={text.item1} />
        <Button onClick={toggleForm} text={text.item2} />
      </div>
      <Collapse isOpened={isOpen}>
        <div className="form-wrapper">
          <Form />
        </div>
      </Collapse>
    </>
  );
}

export default App;
