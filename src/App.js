import React, { useState, useEffect, useContext } from "react";
import "./App.scss";
import Form from "./Components/Form/Form.jsx";
import Button from "./Components/Button/Button.jsx";
import FormCard from './Components/FormCard/FormCard.jsx'
import AOS from "aos";
import "aos/dist/aos.css";
import TakeawayLogo from "./Components/TakeawayLogo/TakeawayLogo.jsx";
import { repertiore, RepertioreContext } from "./store/DuoContextProvider.jsx";

function App() {
  const [isTitleOpen, setIsTitleOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [repertioreState, setRepertioreState] = useState(repertiore.duo1);

  const toggleForm = (item) => {
    setRepertioreState(
      item.duo === "הגר ויונתן" ? repertiore.duo1 : repertiore.duo2
    );
    setIsOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsTitleOpen(false);
    }, 3000);
  }, []);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });
  console.log(repertioreState);
  return (
    <div className="landing">
      {isTitleOpen ? (
        <div className="App_logo_wrapper">
          <TakeawayLogo type={"primary"} />
        </div>
      ) : (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className="main_wrapper"
        >
          <TakeawayLogo type={"secondary"} />
          <FormCard title={"im a title"}>
            <div>im a child</div>
          </FormCard>

          {/* <div className="button_wrapper">
            <div className="chose_title">{text.chose}</div>
            <div className="button_wrapper_buttons">
              <RepertioreContext.Provider value={repertioreState}>
                <Button onClick={() => toggleForm(text.item1)} item={text.item1} />
                <Button onClick={() => toggleForm(text.item2)} item={text.item2} />
              </RepertioreContext.Provider>
            </div>
          </div>
          {isOpen && (
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="form-wrapper"
            >
              <Form repertiore={repertioreState} />
            </div>
          )} */}
        </div>
      )}
    </div>
  );
}

export default App;
