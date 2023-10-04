import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useAuth } from '../../huks/auth';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

function AppBar() {
  const { isLoggedIn } = useAuth();
  const [className, setClassName] = useState(styles.header);

  useEffect(() => {
    setClassName(
      !isLoggedIn ? styles.header : styles.headerLogin
    );
  }, [isLoggedIn]);

  return (
    <header className={className}>
      <Navigation />
      {isLoggedIn && <UserMenu />}
    </header>
  );
}

export default AppBar;
