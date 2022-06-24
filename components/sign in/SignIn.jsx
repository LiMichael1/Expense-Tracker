import React from "react";
import SignUpForm from "../sign up/Form";
import { FormContainer } from "../styled/sign in/form";
import {
  SignUpFormContainer,
  SignUpContainer,
  SignUpImageContainer,
} from "../styled/sign up/SignUp";
import SignInForm from "./Form";
import Image from "next/image";

const SignIn = () => {
  return (
    <>
      <SignUpContainer>
        <SignUpFormContainer>
          <SignInForm></SignInForm>
        </SignUpFormContainer>
        <SignUpImageContainer>
          <Image
            alt="image"
            src="/authpage.png"
            width="655px"
            height="955px"
          ></Image>
        </SignUpImageContainer>
      </SignUpContainer>
    </>
  );
};

export default SignIn;
