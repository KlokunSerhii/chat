import { MainNav, MainNavLink } from './Navigation.styled';
import { useAuth } from 'huks/auth';
import { AiOutlineWechat } from 'react-icons/ai';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MainNav>
      <MainNavLink to="/">Home</MainNavLink>
      {isLoggedIn && (
        <MainNavLink to="/join">Chat
          <AiOutlineWechat style={{ marginLeft: "5px", strokeWidth: "2" }}
          />
        </MainNavLink>
      )}
    </MainNav>
  );
};
export default Navigation;
