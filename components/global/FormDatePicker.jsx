import React from "react";
import { useFormikContext, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputLabel } from "../styled/sign in/form";
const FormDatePicker = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <>
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <DatePicker
        style={{ width: "100%", padding: "100px" }}
        {...field}
        {...props}
        selected={(field.value && new Date(field.value)) || null}
        onChange={(val) => {
          setFieldValue(field.name, val);
        }}
      />
    </>
  );
};

export default FormDatePicker;
