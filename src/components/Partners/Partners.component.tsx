import styles from './Partners.module.scss';
import Partner from '../../public/partner1.svg';
import Partner2 from '../../public/partner2.svg';

const Partners = () => {
  return (
    <div className={styles.slider}>
      <div className={styles.slide_track}>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner} height='100' width='150' alt='' />
        </div>
        <div className={styles.slide}>
          <img src={Partner2} height='100' width='150' alt='' />
        </div>
      </div>
    </div>
  );
};

export default Partners;
