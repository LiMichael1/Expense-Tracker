import React from "react";

import Navbar from "../global/Navbar";
import SideBar from "../global/SideBar/SideBar";
import { GlobalPageContainer } from "../styled/global/globalStyles";
import { MainContentContainer } from "../styled/global/globalStyles";
import AllExpenses from "../allExpenses/allExpenses";

import { defaultExpenseData } from "../global/DefaultData/defaultExpenses";
import { userContext } from "../../pages/_app";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";

const Expenses = () => {
  const { currentUser } = useContext(userContext);
  const c = currentUser;
  const router = useRouter();

  useEffect(() => {
    if (!currentUser) router.push("/sign-in");
  }, [currentUser, router]);

  if (!c) return <div></div>;
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
          <AllExpenses data={defaultExpenseData} />
        </MainContentContainer>
      </GlobalPageContainer>
    </>
  );
};

export default Expenses;
