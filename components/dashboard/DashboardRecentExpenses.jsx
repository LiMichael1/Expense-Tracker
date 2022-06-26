import React from "react";
import GlobalExpenseRow from "../global/GlobalExpenseRow";
import GlobalExpenseWrapperHeader from "../global/GlobalExpenseWrapperHeader";
import GlobalProductRow from "../global/GlobalProductRow";
import { ExpenseRowWrapper } from "../styled/dashboard/dashboardexepnserow";
import { RecentExpensesWrapper } from "../styled/dashboard/dashboardrecentexpenses";
import { GlobalHeaderExpandText } from "../styled/global/globalexpensewrapperheader";

const DashboardRecentExpenses = () => {
  return (
    <>
      <RecentExpensesWrapper>
        <GlobalExpenseWrapperHeader>Recent Expenses</GlobalExpenseWrapperHeader>
        <GlobalExpenseRow></GlobalExpenseRow>
        <GlobalProductRow></GlobalProductRow>
      </RecentExpensesWrapper>
    </>
  );
};

export default DashboardRecentExpenses;
