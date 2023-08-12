import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserName,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectIsLoggedIn),
    isRefreshing: useSelector(selectIsRefreshing),
    user: useSelector(selectUserName),
  };
};
