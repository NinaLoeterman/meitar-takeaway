import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";
import Course from "./Course";
import { postFormData } from "../../lib/api";

const Form = ({repertiore}) => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (data) => {
    postFormData(data);
  };
  console.log("repertiore", repertiore)

  return (
    <form className="Form_wrapper" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">{}</h1>
      {/* <input
        data-aos-delay="100"
        className="Form_general_info"
        name="fullName"
        // placeholder={}
        ref={register({
          required: true,
        })}
      />
      <input
        className="Form_general_info"
        type="tel"
        // placeholder={}
        name="mobileNumber"
        ref={register({
          required: true,
          minLength: 9,
          maxLength: 13,
          pattern: /^[0]\d{1,2}-?\d{3}-?\d{4}$/,
        })}
      /> */}
      {/* {errors.mobileNumber && <span>Enter a valid phone number</span>} */}
      <div>
        <Course
          radioName="firstCourse"
          courseTitle={repertiore.firstCourse.title}
          firstOption={repertiore.firstCourse.firstOption}
          secondOption={repertiore.firstCourse.secondOption}
          thirdOption={repertiore.firstCourse.thirdOption}
          register={register}
        />
      </div>

      <div>
        <Course
          radioName="secondCourse"
          courseTitle={repertiore.mainCourse.title}
          firstOption={repertiore.mainCourse.firstOption}
          secondOption={repertiore.mainCourse.secondOption}
          thirdOption={repertiore.mainCourse.thirdOption}
          register={register}
        />
      </div>
      <div>
        <Course
          radioName="thirdCourse"
          courseTitle={repertiore.dessert.title}
          firstOption={repertiore.dessert.firstOption}
          secondOption={repertiore.dessert.secondOption}
          register={register}
        />
      </div>
      <input className="input-submit" type="submit" />
    </form>
  );
};

export default Form;
