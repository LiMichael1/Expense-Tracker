import React from "react";

import { useField } from "formik";

import { StyledInput, InputLabel } from "../styled/sign in/form";
import { FormWarningMessage } from "../styled/global/globalStyles";

const FormInputField = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <InputLabel htmlFor={props.name}>{label}</InputLabel>
      <br></br>
      <StyledInput {...field} {...props}></StyledInput>
      {meta.touched && meta.error ? (
        <FormWarningMessage>{meta.error}</FormWarningMessage>
      ) : null}
    </>
  );
};

export default FormInputField;
