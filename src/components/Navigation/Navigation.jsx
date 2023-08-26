import { NavLink } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';
import styles from './Navigation.module.css';
import { useAuth } from '../../huks/auth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={styles.nav}>
      {isLoggedIn && (
        <NavLink className={styles.navLink} to="/join">
          Chat
          <AiOutlineWechat className={styles.icon} />
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
