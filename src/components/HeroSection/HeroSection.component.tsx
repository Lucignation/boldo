import styles from './HeroSection.module.scss';
import Header from '../Header/Header.component';

import HeroGfx from '../../public/herographics.svg';

import Partners from '../Partners/Partners.component';

const HeroSection = () => {
  return (
    <div className={styles.hero_section_container}>
      <Header />

      <div className={styles.hero_section_info}>
        <div className={styles.hero_section_left_info}>
          <h1 className={styles.hero_section_left_heading}>
            Save time by building fast with Boldo Template{' '}
          </h1>
          <p className={styles.hero_section_left_description}>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className={styles.action_buttons}>
            <p className={styles.buy_btn}>Buy template</p>
            <p className={styles.explore_btn}>Explore</p>
          </div>
        </div>
        <div className={styles.hero_section_right_info}>
          <img src={HeroGfx} alt='explore more templates' />
        </div>
      </div>

      <Partners />

      <div className={styles.hero_section_spot_bg}></div>
    </div>
  );
};

export default HeroSection;
