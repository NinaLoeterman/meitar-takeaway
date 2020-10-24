import React, { useState, useEffect } from "react";
import "./App.scss";
import Form from "./Components/Form/Form.jsx";
import Button from "./Components/Button/Button.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import MeitarTakeaway from "./Components/MeitarTakeaway/MeitarTakeaway.jsx";

const text = {
  chose: "בחרו הרכב",
};

const item1 = {
  duo: "הגר ויונתן",
  instruments: "חליל וקלרינט",
};
const item2 = {
  duo: "רעות ונדב",
  instruments: "סופרן ובסון",
};

function App() {
  const [isTitleOpen, setIsTitleOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleForm = () => {
    console.log("hello");
    setIsOpen(true);
  };

  useEffect(() => {
      setTimeout(() => {
        setIsTitleOpen(false);
        setIsScrolled(true)
      }, 3000);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }); 

  return (
    <div className="landing">
      {isScrolled && (
        <div data-aos="fade-up" data-aos-duration="1000" className="main_wrapper">
          <div className="button_wrapper">
            <div className="chose_title">{text.chose}</div>
            <div>
              <Button onClick={toggleForm} item={item1} />
              <Button onClick={toggleForm} item={item2} />
            </div>
          </div>
          {isOpen && (
            <div data-aos="fade-up" data-aos-duration="1000" className="form-wrapper">
              <Form />
            </div>
          )}
        </div>
      )}
      {isTitleOpen && (
        <div className="meitar_title_wrapper">
          <MeitarTakeaway />
        </div>
      )}
    </div>
  );
}

export default App;
