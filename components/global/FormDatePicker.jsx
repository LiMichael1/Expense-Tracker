import React from "react";
import { useFormikContext, useField } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { InputLabel } from "../styled/sign in/form";
import { DatePickerStyle } from "../styled/global/formdatepicker";

const FormDatePicker = (props) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <>
      <DatePickerStyle />
      <InputLabel htmlFor={props.name}>{props.label}</InputLabel>
      <DatePicker
        wrapperClassName="date_picker full-width"
        alt="Select your birth date"
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
