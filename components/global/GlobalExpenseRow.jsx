import React from "react";
import {
  ExpenseColumnName,
  ExpenseRowWrapper,
} from "../styled/global/globalexpenserow";

const GlobalExpenseRow = () => {
  return (
    <>
      <ExpenseRowWrapper>
        <ExpenseColumnName>NAME/BUSINESS</ExpenseColumnName>
        <ExpenseColumnName>TYPE</ExpenseColumnName>
        <ExpenseColumnName>AMOUNT</ExpenseColumnName>
        <ExpenseColumnName>DATE</ExpenseColumnName>
      </ExpenseRowWrapper>
    </>
  );
};

export default GlobalExpenseRow;
