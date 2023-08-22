import {
  MainNav,
  MainNavLink,
  Icon,
} from './Navigation.styled';
import { useAuth } from '../../huks/auth';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainNav>
      <MainNavLink to="/">Home</MainNavLink>
      {isLoggedIn && (
        <MainNavLink to="/join">
          Chat
          <Icon />
        </MainNavLink>
      )}
    </MainNav>
  );
};
export default Navigation;
