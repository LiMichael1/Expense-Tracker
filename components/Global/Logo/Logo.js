import Image from 'next/image';
import LogoImg from '../../../public/Logo.png';
import styles from './Logo.module.css';

function Logo() {
  return (
    <>
      <Image src={LogoImg} alt='Logo' className={styles.Logo} />
    </>
  );
}

export default Logo;
