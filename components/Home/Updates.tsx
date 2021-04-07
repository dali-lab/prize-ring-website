import styles from './styles.module.scss';

const Updates = (): JSX.Element => {
  return (
    <div className={styles.updates}>
      <div className={styles['sign-up-notice']}>
        Ready to get more out of your social media than just likes? Sign up below to get notified of our upcoming launch!
      </div>

      <div className={styles['sign-up-form']}>
        <input type="text" className={styles.email} placeholder="Email" />
        <button type="button" className={styles.submit}>Sign up</button>
      </div>
    </div>
  );
};

export default Updates;
