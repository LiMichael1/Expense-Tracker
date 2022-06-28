import React, { useEffect } from "react";
import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import RecentExpenses from "../recentExpenses/recentExpenses";
import RecurExpenses from "./../recurringExpenses/recurExpenses";

import {
  GlobalPageContainer,
  MainContentContainer,
} from "../styled/global/globalStyles";

// Sample Data for the tables
import {
  defaultExpenseData,
  defaultRecurExpenseData,
} from "./../global/DefaultData/defaultExpenses";

import { userContext } from "../../pages/_app";
import { useContext } from "react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { currentUser } = useContext(userContext);
  const c = currentUser;
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/sign-in");
  }, [currentUser, router]);

  if (!c) return <div></div>;

  return (
    <>
      (
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
          {/* GRAPH HERE */}
          <RecentExpenses data={defaultExpenseData} />
        </MainContentContainer>
        <div style={{ width: "30%" }}>
          <RecurExpenses data={defaultRecurExpenseData} />
        </div>
      </GlobalPageContainer>
      )
    </>
  );
};

export default Dashboard;
