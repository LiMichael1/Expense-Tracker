import React from "react";

import { Formik, Form } from "formik";
import {
  SettingsMainInlineWrapper,
  UpdateButton,
} from "../styled/settings/settings";
import FormInputFieldWithIcon from "../global/FormInputFieldWithIcon";
import FormInputField from "../global/FormInputField";

const SettingsMainForm = ({ change }) => {
  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(values, null, 2);
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form>
          <SettingsMainInlineWrapper>
            <div style={{ width: "100%" }}>
              <FormInputField
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Enter your first name"
                readOnly={change}
              ></FormInputField>
            </div>
            <div style={{ width: "100%" }}>
              <FormInputField
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Enter your last name"
              ></FormInputField>
            </div>
          </SettingsMainInlineWrapper>
          <SettingsMainInlineWrapper>
            <div style={{ width: "100%" }}>
              <FormInputFieldWithIcon
                label="Email"
                name="email"
                type="text"
                image="email icon"
                placeholder="Enter your email"
              ></FormInputFieldWithIcon>
            </div>
          </SettingsMainInlineWrapper>
          <SettingsMainInlineWrapper>
            <div style={{ width: "100%" }}>
              <FormInputFieldWithIcon
                label="New Password"
                name="password"
                type="password"
                image="lock icon"
                placeholder="Enter your password"
              ></FormInputFieldWithIcon>
            </div>
            <div style={{ width: "100%" }}>
              <FormInputFieldWithIcon
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                image="lock icon"
                placeholder="Confirm your password"
              ></FormInputFieldWithIcon>
            </div>
          </SettingsMainInlineWrapper>
          {change === "readonly" ? null : (
            <UpdateButton type="submit">Update</UpdateButton>
          )}
        </Form>
      </Formik>
    </>
  );
};

export default SettingsMainForm;
