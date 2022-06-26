import React from "react";
import GlobalExpenseWrapperHeader from "../global/GlobalExpenseWrapperHeader";
import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import {
  DashboardHeroWrapper,
  DashboardMainContent,
  DashboardRecurringExpensesWrapper,
} from "../styled/dashboard/dashboard";
import {
  GlobalPageContainer,
  MainContentContainer,
} from "../styled/global/globalStyles";
import DashboardExpenseRow from "./DashboardExpenseRow";
import DashboardGraph from "./DashboardGraph";
import DashboardRecentExpenses from "./DashboardRecentExpenses";

const Dashboard = () => {
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
          <DashboardHeroWrapper>
            <DashboardMainContent>
              <DashboardExpenseRow></DashboardExpenseRow>
              <DashboardGraph></DashboardGraph>
              <DashboardRecentExpenses></DashboardRecentExpenses>
            </DashboardMainContent>
            <DashboardRecurringExpensesWrapper>
              <GlobalExpenseWrapperHeader>
                Recurring Expenses
              </GlobalExpenseWrapperHeader>
            </DashboardRecurringExpensesWrapper>
          </DashboardHeroWrapper>
        </MainContentContainer>
      </GlobalPageContainer>
    </>
  );
};

export default Dashboard;
