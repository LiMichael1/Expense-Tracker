import React from 'react';
import Navbar from '../global/Navbar';
import SideBar from '../global/SideBar/SideBar';
import RecentExpenses from '../recentExpenses/recentExpenses';
import RecurExpenses from './../recurringExpenses/recurExpenses';

import {
  GlobalPageContainer,
  MainContentContainer,
} from '../styled/global/globalStyles';

// Sample Data for the tables
import {
  defaultExpenseData,
  defaultRecurExpenseData,
} from './../global/DefaultData/defaultExpenses';

const Dashboard = () => {
  return (
    <>
      <GlobalPageContainer>
        <SideBar></SideBar>
        <MainContentContainer>
          <Navbar></Navbar>
          {/* GRAPH HERE */}
          <RecentExpenses data={defaultExpenseData} />
        </MainContentContainer>
        <div style={{ width: '40%' }}>
          <RecurExpenses data={defaultRecurExpenseData} />
        </div>
      </GlobalPageContainer>
    </>
  );
};

export default Dashboard;
