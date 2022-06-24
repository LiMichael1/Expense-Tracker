import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Logo from '../Logo/Logo';

import styles from './SideBar.module.css';

import DashboardIcon from '../../../public/Icons/Dashboard.png';
import ExpensesIcon from '../../../public/Icons/Expenses.png';
import SettingsIcon from '../../../public/Icons/Settings.png';
import LogOutIcon from '../../../public/Icons/LogOut.png';

const SideBar = () => {
  const route = useRouter().route;

  const LogOut = (e) => {
    e.preventDefault();
    // Log Out
    console.log('Sign Out');
  };

  return (
    <div className={styles.sideBarContainer}>
      {/* Top */}
      <div className={styles.topSideBar}>
        <Logo />

        <div className={styles.btnList}>
          <Link href='/dashboard' className={styles.sideBarLink}>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/dashboard' ? styles.highlightBtn : ''}`
              }
              id='DashboardBtn'
            >
              <Image src={DashboardIcon} alt='Dashboard' />
              <p className={styles.btnText}>Dashboard</p>
            </button>
          </Link>
          <Link href='/expenses' className={styles.sideBarLink}>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/expenses' ? styles.highlightBtn : ''}`
              }
              id='ExpensesBtn'
            >
              <Image src={ExpensesIcon} alt='Expenses' />
              <p className={styles.btnText}>Expenses</p>
            </button>
          </Link>
          <Link href='/settings' className={styles.sideBarLink}>
            <button
              className={
                styles.sideBarBtn +
                ` ${route === '/settings' ? styles.highlightBtn : ''}`
              }
              id='SettingsBtn'
            >
              <Image src={SettingsIcon} alt='Settings' />
              <p className={styles.btnText}>Settings</p>
            </button>
          </Link>
        </div>
      </div>

      {/* Bottom */}
      <div className={styles.bottomSideBar}>
        <Link href='/api/auth/signout'>
          <button onClick={(e) => LogOut(e)} className={styles.LogOutBtn}>
            <Image src={LogOutIcon} alt='Log Out' />
            <p className={styles.btnText}>Log Out</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
