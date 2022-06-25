import React from "react";
import {
  NavbarContainer,
  NavbarPageName,
  NavbarProfileButton,
  NavbarProfileButtonName,
} from "../styled/global/navbar";

import { useRouter } from "next/router";
import Image from "next/image";

const Navbar = () => {
  const route = useRouter().route;

  return (
    <>
      <NavbarContainer>
        <NavbarPageName>
          {route.charAt(1).toUpperCase() + route.substring(2)}
        </NavbarPageName>
        <NavbarProfileButton>
          <Image
            alt="Profile picture"
            src="/profile.png"
            width="36px"
            height="36px"
          ></Image>
          <NavbarProfileButtonName>Mahfuzul Nabil</NavbarProfileButtonName>
          <Image
            alt="Arrow"
            src="/navbararrow.png"
            width="10px"
            height="6px"
          ></Image>
        </NavbarProfileButton>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
