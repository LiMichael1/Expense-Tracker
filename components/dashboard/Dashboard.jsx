import React from "react";
import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import {
  GlobalPageContainer,
  MainContentContainer,
} from "../styled/global/globalStyles";

const Dashboard = () => {
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

export default Dashboard;
