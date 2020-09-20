import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import Course from "./Course";

const text = {
  fullName: "שם מלא",
  phoneNumber: "מס. טלפון",
  placeOrder: "הזמינו",
  firstCourse: {
    title: "ראשונה",
    firstOption: "גריד - ״בוקר״ מתוך פר גינט",
    secondOption: "צ׳ייקובסקי - ריקוז פיית הסוכר",
    thirdOption: "טלמן - דואט קאנוני",
  },
  mainCourse: {
    title: "עיקרית",
    firstOption: "דביסי - ״סירינקס״",
    secondOption: "״סטרוונסקי - קטע לקלרינט סולו״",
    thirdOption: "״באך - אריה על מיתר סול״",
  },
  dessert: {
    title: "קינוח",
    firstOption: "״בראש השנה״",
    secondOption: "״שנה טובה״",
  },
};

const Form = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  // console.log(watch("example")); // watch input value by passing the name of it

  return ( <form onSubmit={handleSubmit(onSubmit)}>
  <h1 className="form-title">{text.placeOrder}</h1>
  <input
    className="Form_general_info"
    name="fullName"
    placeholder={text.fullName}
    ref={register({
      required: true
    })}
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
  <Course
    radioName="firstCourse"
    courseTitle={text.firstCourse.title}
    firstOption={text.firstCourse.firstOption}
    secondOption={text.firstCourse.secondOption}
    thirdOption={text.firstCourse.thirdOption}
    register={register}
  />
  <Course
    radioName="secondCourse"
    courseTitle={text.mainCourse.title}
    firstOption={text.mainCourse.firstOption}
    secondOption={text.mainCourse.secondOption}
    thirdOption={text.mainCourse.thirdOption}
    register={register}
  />
  <Course
    radioName="thirdCourse"
    courseTitle={text.dessert.title}
    firstOption={text.dessert.firstOption}
    secondOption={text.dessert.secondOption}
    register={register}
  />

  <input className="input-submit" type="submit" />
</form> );
}
 
export default Form;
