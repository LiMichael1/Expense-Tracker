import Image from 'next/image';

import LogoImg from '../../../public/Logo.png';

import styles from './Logo.module.css';

export default function Logo() {
  return (
    <div>
      <Image src={LogoImg} alt='Logo' className={styles.Logo} />
    </div>
  );
}
