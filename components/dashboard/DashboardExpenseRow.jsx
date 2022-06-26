import React from "react";
import ExpenseCard from "../global/ExpenseCard/ExpenseCard";
import { ExpenseRowWrapper } from "../styled/dashboard/dashboardexepnserow";

const DashboardExpenseRow = () => {
  return (
    <>
      <ExpenseRowWrapper>
        <ExpenseCard></ExpenseCard>
      </ExpenseRowWrapper>
    </>
  );
};

export default DashboardExpenseRow;
