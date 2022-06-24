import React from "react";

import { useField } from "formik";

const FormInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <label htmlFor={props.name}></label>
      <input {...field} {...props}></input>
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </>
  );
};

export default FormInputField;
