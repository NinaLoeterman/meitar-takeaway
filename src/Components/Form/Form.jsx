import React from "react";
import { useForm } from "react-hook-form";
import "./Form.scss";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1 className="form-title">Place Your Order</h1>
      <input name="fullName" placeholder="Full Name" ref={register} />
      <input
        type="tel"
        placeholder="Mobile number"
        name="mobileNumber"
        ref={register({ required: true, minLength: 9, maxLength: 13, pattern: /^[0]\d{1,2}-?\d{3}-?\d{4}$/ })}
      />
      {errors.mobileNumber && <span>Enter a valid phone number</span>}

      <input className="input-submit" type="submit" />
    </form>
  );
}
