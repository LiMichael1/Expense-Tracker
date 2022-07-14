import React from 'react';

import Navbar from '../global/Navbar';
import SideBar from '../global/SideBar/SideBar';
import { GlobalPageContainer } from '../styled/global/globalStyles';
import { MainContentContainer } from '../styled/global/globalStyles';
import AllExpenses from '../allExpenses/allExpenses';

import { defaultExpenseData } from '../global/DefaultData/defaultExpenses';

const Expenses = () => {
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer width={'100%'}>
          <Navbar></Navbar>
          <AllExpenses data={defaultExpenseData} />
        </MainContentContainer>
      </GlobalPageContainer>
    </>
  );
};

export default Expenses;
