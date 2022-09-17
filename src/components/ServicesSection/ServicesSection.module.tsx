import styles from './ServicesSection.module.scss';
import Services1 from '../../public/services1.svg';
import Services2 from '../../public/services2.svg';
import Services3 from '../../public/services3.svg';

const ServicesSection = () => {
  return (
    <div className={styles.service_section_container}>
      <h5 className={styles.service_section_heading}>Our Services</h5>
      <h1 className={styles.service_section_subtitle}>
        Handshake infographic mass market crowdfunding iteration.
      </h1>

      <div className={styles.service_section_features}>
        <div className={styles.service_section_feature}>
          <img src={Services1} alt='Cool feature title' />
          <h3 className={styles.service_section_feature_heading}>
            Cool feature title
          </h3>
          <p className={styles.service_section_feature_description}>
            Learning curve network effects return on investment.
          </p>
          <h3 className={styles.service_section_feature_link}>
            Explore page &rarr;
          </h3>
        </div>
        <div className={styles.service_section_feature}>
          <img src={Services2} alt='Cool feature title' />
          <h3 className={styles.service_section_feature_heading}>
            Even cooler feature
          </h3>
          <p className={styles.service_section_feature_description}>
            Learning curve network effects return on investment.
          </p>
          <h3 className={styles.service_section_feature_link}>
            Explore page &rarr;
          </h3>
        </div>
        <div className={styles.service_section_feature}>
          <img src={Services3} alt='Cool feature title' />
          <h3 className={styles.service_section_feature_heading}>
            Cool feature title
          </h3>
          <p className={styles.service_section_feature_description}>
            Learning curve network effects return on investment.
          </p>
          <h3 className={styles.service_section_feature_link}>
            Explore page &rarr;
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
