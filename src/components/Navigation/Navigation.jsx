import { NavLink, useLocation } from 'react-router-dom';
import { AiOutlineWechat } from 'react-icons/ai';
import styles from './Navigation.module.css';
import { useAuth } from '../../hooks/auth';
import { useEffect, useState } from 'react';
import imgDefault from '../../img/bot.jpg';
import { socket } from '../../options/socket';

const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const [params, setParams] = useState({
    room: '',
    user: '',
    avatar: imgDefault,
  });
  const { search } = useLocation();

  useEffect(() => {
    const searchParams = Object.fromEntries(
      new URLSearchParams(search)
    );
    setParams(searchParams);
  }, [search]);

  return (
    <nav className={styles.nav}>
      {isLoggedIn ? (
        <NavLink
          className={styles.navLink}
          to="/join"
          onClick={() =>
            socket.emit('leftRoom', { params })
          }
        >
          Chat
          <AiOutlineWechat className={styles.icon} />
        </NavLink>
      ) : (
        <NavLink className={styles.navLink} to="/">
          Chat
          <AiOutlineWechat className={styles.icon} />
        </NavLink>
      )}
    </nav>
  );
};
export default Navigation;
