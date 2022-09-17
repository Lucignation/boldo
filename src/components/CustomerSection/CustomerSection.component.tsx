import styles from './CustomerSection.module.scss';
import Customer1 from '../../public/customer.svg';

import { BsCheck2 } from 'react-icons/bs';
const CustomerSection = () => {
  return (
    <div className={styles.customer_section_container}>
      <div className={styles.customer_section_image}>
        <img src={Customer1} alt='More income in June' />
      </div>
      <div className={styles.customer_section_info}>
        <h1 className={styles.customer_section_info_heading}>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </h1>
        <ul className={styles.customer_section_info_items}>
          <li className={styles.customer_section_info_item}>
            <span className={styles.customer_section_info_item_checked}>
              <BsCheck2 />
            </span>
            <span className={styles.customer_section_info_item_text}>
              We connect our customers with the best.
            </span>
          </li>

          <li className={styles.customer_section_info_item}>
            <span className={styles.customer_section_info_item_checked}>
              <BsCheck2 />
            </span>
            <span className={styles.customer_section_info_item_text}>
              Advisor success customer launch party.
            </span>
          </li>

          <li className={styles.customer_section_info_item}>
            <span className={styles.customer_section_info_item_checked}>
              <BsCheck2 />
            </span>
            <span className={styles.customer_section_info_item_text}>
              Business-to-consumer long tail.
            </span>
          </li>
        </ul>

        <p className={styles.customer_section_info_link}>Start now</p>
      </div>
    </div>
  );
};

export default CustomerSection;
