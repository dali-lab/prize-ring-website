import Image from 'next/image';
import styles from './styles.module.scss';

const MainSplash = (): JSX.Element => {
  return (
    <div className={styles.splash}>
      <div className={styles['text-half']}>
        <div className={styles.welcome}>WELCOME TO PRIZERING</div>
        <div className={styles.big}>The social game show network</div>
        <div className={styles.download}>
          <div className={styles['download-image']}><Image src="/google-play.svg" width={150} height="100%" /></div>
          <div className={styles['download-image']}><Image src="/app-store.svg" width={150} height="100%" /></div>
        </div>
      </div>

      <div className={styles['image-half']}>
        <Image src="/splash.png" layout="responsive" width={1298} height={2414} objectFit="cover" objectPosition="left bottom" />
      </div>
    </div>
  );
};

export default MainSplash;
