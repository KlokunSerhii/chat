import { useSelector } from 'react-redux';
import { select } from '../redux/message/selectors'



export const useMessage = () => {
    return {
      items: useSelector(select),
    };
  };
  