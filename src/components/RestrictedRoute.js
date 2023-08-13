import { useAuth } from 'huks/auth';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({
  component: Component,
  redirectto = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? (
    <Navigate to={redirectto} />
  ) : (
    <Component />
  );
};

export default RestrictedRoute;
