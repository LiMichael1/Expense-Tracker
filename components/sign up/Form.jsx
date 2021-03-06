import React from "react";

import { Formik, Form } from "formik";
import FormInputField from "../global/FormInputField";
import * as Yup from "yup";

import {
  FormContainer,
  FormHeader,
  FormSubHeader,
} from "../styled/sign in/form";
import {
  FormBottomContainer,
  FormGoogleButton,
  FormLimeButton,
} from "../styled/global/globalStyles";

import Image from "next/image";

import Logo from "../global/Logo/Logo";

const signUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter a valid email"),
  password: Yup.string().required("Please enter your password"),
  fullName: Yup.string().required("Please enter your full name"),
});

const SignUpForm = () => {
  return (
    <>
      <FormContainer>
        <Logo></Logo>
        <FormHeader>Create new account</FormHeader>
        <FormSubHeader>Welcome back! Please enter your details</FormSubHeader>
        <Formik
          initialValues={{ email: "", password: "", fullName: "" }}
          validationSchema={signUpSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(false);
            }, 500);
          }}
        >
          <Form style={{ width: "100%" }}>
            <FormInputField
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
            ></FormInputField>
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

            <FormLimeButton>Create Account</FormLimeButton>
            <FormGoogleButton>
              <div style={{ position: "absolute", left: "30%" }}>
                <Image
                  src="/google.png"
                  alt="Google logo image"
                  width="25px"
                  height="24px"
                />
              </div>
              Sign in with google
            </FormGoogleButton>
            <FormBottomContainer>
              <span style={{ color: "#929EAE" }}>Already have an account?</span>
              <span style={{ fontWeight: "600" }}>Sign in</span>
              <div style={{ position: "absolute", left: "58%" }}>
                <Image src="/arch.png" alt="Deco" width="98px" height="15px" />
              </div>
            </FormBottomContainer>
          </Form>
        </Formik>
      </FormContainer>
    </>
  );
};

export default SignUpForm;
