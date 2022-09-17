import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';

import Logo from '../../public/Logo.svg';

const Header = () => {
  return (
    <section className={styles.header_container}>
      <div className={styles.logo_container}>
        <img src={Logo} alt='logo' />
      </div>

      <nav className={styles.nav_links}>
        <div className={styles.nav_link}>
          <NavLink to='/product'>Product</NavLink>
        </div>

        <div className={styles.nav_link}>
          <NavLink to='/services'>Services</NavLink>
        </div>

        <div className={styles.nav_link}>
          <NavLink to='/about'>About</NavLink>
        </div>

        <div className={styles.login_link}>
          <NavLink to='/login'>Login</NavLink>
        </div>
      </nav>
    </section>
  );
};

export default Header;
