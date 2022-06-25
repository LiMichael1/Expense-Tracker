import React from "react";

import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import { GlobalPageContainer } from "../styled/global/globalStyles";
import { MainContentContainer } from "../styled/global/globalStyles";

const Expenses = () => {
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
        </MainContentContainer>
      </GlobalPageContainer>
    </>
  );
};

export default Expenses;
