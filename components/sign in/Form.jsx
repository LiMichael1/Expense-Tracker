import React from "react";

import { Formik, Form } from "formik";
import FormInputField from "../global/FormInputField";
import * as Yup from "yup";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Please enter your password"),
});

const FormComponent = () => {
  return (
    <div>
      <h1>Welcome back</h1>
      <h2>Welcome back! Please enter your details</h2>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={signUpSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(values, null, 2);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <FormInputField
            label="Email"
            name="email"
            type="text"
            placeholder="Enter your email"
          ></FormInputField>
          <br></br>
          <FormInputField
            label="Password"
            name="password"
            type="password"
            placeholder="Enter your password"
          ></FormInputField>
          <br></br>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
