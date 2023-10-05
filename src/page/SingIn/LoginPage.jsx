import Login from 'components/Login/Login';
import styles from './LoginPage.module.css';
import Title from 'components/Title';
import { NavLink } from 'react-router-dom';

function LoginViews() {
  return (
    <section className={styles.backGround}>
      <div className={styles.ContainerTitle}>
        <Title title={'Glad to see you again :)'} />
        <Login />
        <p className={styles.noaccount}>
          Don't have an account?
          <NavLink to="/register" className={styles.link}>
            Sign Up
          </NavLink>
        </p>
      </div>
    </section>
  );
}

export default LoginViews;
