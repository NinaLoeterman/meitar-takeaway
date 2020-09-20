import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

const text = {
  fullName: 'שם מלא',
  phoneNumber: 'מס. טלפון',
  placeOrder: 'הזמינו',
  firstCourse: {
    title: "ראשונה",
    firstOption: "גריד - ״בוקר״ מתוך פר גינט",
    secondOption: "צ׳ייקובסקי - ריקוז פיית הסוכר",
    thirdOption: "טלמן - דואט קאנוני",
  },
  mainCourse: {
    title: "עיקרית",
    firstOption: "",
    secondOption: "",
    thirdOption: "",
  },
  dessert: {
    title: "קינוח",
    firstOption: "",
    secondOption: "",
    thirdOption: "",
  },
};

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">{text.placeOrder}</h1>
      <input
        className="Form_general_info"
        name="fullName"
        placeholder={text.fullName}
        ref={register}
      />
      <input
        className="Form_general_info"
        type="tel"
        placeholder={text.phoneNumber}
        name="mobileNumber"
        ref={register({
          required: true,
          minLength: 9,
          maxLength: 13,
          pattern: /^[0]\d{1,2}-?\d{3}-?\d{4}$/,
        })}
      />
      {errors.mobileNumber && <span>Enter a valid phone number</span>}
      <div className="Form_menu_item">
        <label className="Form_menu_label">
          <span className="Form_item_title">{text.firstCourse.title}</span>
        </label>
        <div className="Form_menu_options">
          <div className="Form_course_wrapper">
            <input
              name="firstCourse"
              type="radio"
              value="No"
              ref={register({ required: true })}
              />
              <label>{text.firstCourse.firstOption}</label>
          </div>
          <div className="Form_course_wrapper">
            <input
              name="firstCourse"
              type="radio"
              value="No"
              ref={register({ required: true })}
              />
              <label>{text.firstCourse.secondOption}</label>
          </div>
          <div className="Form_course_wrapper">
            <input
              name="firstCourse"
              type="radio"
              value="No"
              ref={register({ required: true })}
              />
              <label>{text.firstCourse.thirdOption}</label>
          </div>
        </div>
      </div>

      <input className="input-submit" type="submit" />
    </form>
  );
}
