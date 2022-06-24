import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import styles from './SideBar.module.css';

import Logo from '../Logo/Logo';

import DashboardIcon from '../../../public/Icons/DashboardIcon.png';
import ExpensesIcon from '../../../public/Icons/ExpensesIcon.png';
import SettingsIcon from '../../../public/Icons/SettingsIcon.png';
import LogOutIcon from '../../../public/Icons/LogOutIcon.png';

/* 
  Potentially use Styled Components inside of pure css
*/

export default function SideBar() {
  const route = useRouter().route;

  const logOut = (e) => {
    e.preventDefault();
    console.log('Log Out');
  };

  return (
    <div className={styles.container}>
      <div className={styles.topSideBar}>
        <Logo className={styles.logo} />
        <div className={styles.btnList}>
          <Link href='/dashboard'>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/dashboard' ? styles.highlightBtn : ''}`
              }
            >
              <Image
                src={DashboardIcon}
                alt='DashboardIcon'
                className={styles.icon}
              />
              <p className={styles.btnTxt}>Dashboard</p>
            </button>
          </Link>

          <Link href='/expenses'>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/expenses' ? styles.highlightBtn : ''}`
              }
            >
              <Image
                src={ExpensesIcon}
                alt='ExpensesIcon'
                className={styles.icon}
              />
              <p className={styles.btnTxt}>Expenses</p>
            </button>
          </Link>

          <Link href='/settings'>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/settings' ? styles.highlightBtn : ''}`
              }
            >
              <Image
                src={SettingsIcon}
                alt='SettingsIcon'
                className={styles.icon}
              />
              <p className={styles.btnTxt}>Settings</p>
            </button>
          </Link>
        </div>
      </div>

      <div className={styles.bottomSideBar}>
        <Link href='/api/auth/signout'>
          <button className={styles.logOutBtn} onClick={(e) => logOut(e)}>
            <Image
              src={LogOutIcon}
              alt='log out icon'
              className={styles.icon}
            />
            <p className={styles.btnTxt}>Log Out</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
