/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import styles from './styles.module.scss';

const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.row}>
        <div className={styles.col}>
          <div className={styles.logo}>
            <Image src="/logo.svg" height={50} width={50} />
            <div style={{ marginLeft: 10 }}>PrizeRing</div>
          </div>
        </div>

        <div className={styles.col}>
          <div className={styles['footer-header']}>NAVIGATION</div>
          <a className={styles['footer-link']}>About</a>
          <a className={styles['footer-link']}>Sign Up</a>
        </div>
      </div>

      <div className={styles.details}>
        <a className={styles['details-link']}>Privacy Policy</a>
        <div>© 2021 PrizeRing</div>
      </div>
    </footer>
  );
};

export default Footer;
