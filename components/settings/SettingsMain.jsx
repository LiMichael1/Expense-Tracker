import React from "react";
import {
  SettingsMainEditButton,
  SettingsMainFlexWrapper,
  SettingsMainHeader,
  SettingsMainSubHeader,
  SettingsMainWrapper,
} from "../styled/settings/settings";

import Image from "next/image";
import { useState } from "react";
import SettingsMainForm from "./SettingsMainForm";

const SettingsMain = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  console.log(isEditMode);

  return (
    <>
      <SettingsMainWrapper>
        <SettingsMainHeader>Account Information</SettingsMainHeader>
        <SettingsMainSubHeader>
          Update your account information
        </SettingsMainSubHeader>
        <SettingsMainFlexWrapper>
          <div style={{ margin: "50px 0" }}>
            <span style={{ fontSize: "1.25rem" }}>Personal Information</span>
            <SettingsMainEditButton
              onClick={() => setIsEditMode((prev) => !prev)}
            >
              <Image
                alt="Edit"
                src="/edit.png"
                width="20px"
                height="20px"
              ></Image>
              <span
                style={{
                  color: "#29A073",
                  fontWeight: "600",
                  fontSize: "1rem",
                  marginLeft: "10px",
                }}
              >
                Edit
              </span>
            </SettingsMainEditButton>
          </div>
          {isEditMode ? (
            <SettingsMainForm change={null}></SettingsMainForm>
          ) : (
            <SettingsMainForm change={"readonly"}></SettingsMainForm>
          )}
        </SettingsMainFlexWrapper>
      </SettingsMainWrapper>
    </>
  );
};

export default SettingsMain;
