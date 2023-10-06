import { useSelector } from 'react-redux';
import { selectFriends } from '../redux/friend/selectors';

export const useFriends = () => {
  return {
    friendsList: useSelector(selectFriends),
  };
};
