/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from 'next/image';
import styles from './styles.module.scss';

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <Image src="/logo.svg" height={60} width={60} />
      <div className={styles.links}>
        <a className={styles['header-link']}>About</a>
        <a className={styles['header-link']}>Join the waitlist</a>
      </div>
    </header>
  );
};

export default Header;
