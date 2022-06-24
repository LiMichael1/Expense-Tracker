import React from "react";

import { Formik, Form } from "formik";
import FormInputField from "../global/FormInputField";
import * as Yup from "yup";

import {
  FormContainer,
  FormHeader,
  FormSubHeader,
  InlineContainer,
} from "../styled/sign in/form";
import {
  FormBottomContainer,
  FormGoogleButton,
  FormLimeButton,
} from "../styled/global/globalStyles";

import Link from "next/link";
import Image from "next/image";

const signUpSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Please enter your password"),
});

const FormComponent = () => {
  return (
    <>
      <FormContainer>
        <FormHeader>Welcome back</FormHeader>
        <FormSubHeader>Welcome back! Please enter your details</FormSubHeader>
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
          <Form style={{ width: "100%" }}>
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
            <InlineContainer>
              <p>hello test</p>
              <Link href="#">
                <a>Forgot password</a>
              </Link>
            </InlineContainer>
            <FormLimeButton>Sign In</FormLimeButton>
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
              <span>Dont have an account?</span>
              <span>Sign up for free</span>
              <div style={{ position: "absolute", left: "55%;" }}>
                <Image src="/arch.png" alt="Deco" width="98px" height="15px" />
              </div>
            </FormBottomContainer>
          </Form>
        </Formik>
      </FormContainer>
    </>
  );
};

export default FormComponent;
