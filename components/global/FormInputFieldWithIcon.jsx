import React from "react";
import Image from "next/image";
import { useField } from "formik";

import { StyledInput, InputLabel } from "../styled/sign in/form";
import { FormWarningMessage } from "../styled/global/globalStyles";

const FormInputFieldWithIcon = ({ label, image, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <div style={{ position: "relative" }}>
      <InputLabel htmlFor={props.name}>{label}</InputLabel>
      <br></br>
      <div style={{ position: "absolute", top: "42%", left: "20px" }}>
        <Image
          width="20px"
          height="20px"
          alt="Email"
          src={`/${image}.png`}
        ></Image>
      </div>
      <StyledInput {...field} {...props}></StyledInput>
      {meta.touched && meta.error ? (
        <FormWarningMessage>{meta.error}</FormWarningMessage>
      ) : null}
    </div>
  );
};

export default FormInputFieldWithIcon;
