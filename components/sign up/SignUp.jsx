import React from "react";

import Image from "next/image";
import {
  SignUpContainer,
  SignUpFormContainer,
  SignUpImageContainer,
} from "../styled/sign up/SignUp";
import SignUpForm from "./Form";
import Logo from "../global/Logo/Logo";

const SignUp = () => {
  return (
    <>
      <SignUpContainer>
        <SignUpFormContainer>
          <SignUpForm></SignUpForm>
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

export default SignUp;
