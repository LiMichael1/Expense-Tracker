import React from "react";
import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import { GlobalPageContainer } from "../styled/global/globalStyles";
import { MainContentContainer } from "../styled/global/globalStyles";
import SettingsMain from "./SettingsMain";

const Settings = () => {
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
          <SettingsMain></SettingsMain>
        </MainContentContainer>
      </GlobalPageContainer>
    </>
  );
};

export default Settings;
