import React from 'react';
import Navbar from '../global/Navbar';
import SideBar from '../global/SideBar/SideBar';
import RecentExpenses from '../recentExpenses/recentExpenses';
import RecurExpenses from './../recurringExpenses/recurExpenses';
import {
  GlobalPageContainer,
  MainContentContainer,
} from '../styled/global/globalStyles';
import LineChart from './LineChart';

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
        <MainContentContainer width={'60vw'}>
          <Navbar></Navbar>
          <LineChart />
          <RecentExpenses data={defaultExpenseData} />
        </MainContentContainer>
        <RecurExpenses data={defaultRecurExpenseData} />
      </GlobalPageContainer>
    </>
  );
};

export default Dashboard;
