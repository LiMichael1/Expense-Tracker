import React from "react";

import { useField } from "formik";

const FormCheckbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <>
      <label>
        <input type="checkbox" {...field} {...props} />
        {children}
      </label>
    </>
  );
};

export default FormCheckbox;
