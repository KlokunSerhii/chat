import { useFriends } from 'hooks/friend';
import styles from './FriendsList.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { deleteFriend, getAllFriends } from 'redux/friend/operations';
import { useAuth } from 'hooks/auth';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';

function FriendsList() {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const { friendsList } = useFriends();

  const handlerDelete = _id => {
    dispatch(deleteFriend(_id));
  };

  useEffect(() => {
    dispatch(getAllFriends(user._id));
  }, [dispatch, user._id]);

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Friends List</h2>
      <div className={styles.boxList}>
        <ul className={styles.roomList}>
          {(friendsList.name !== '') &
            (friendsList.avatarURL !== '') &&
            friendsList.map(({ name, avatarURL, _id }) => (
              <li key={_id} className={styles.roomItem}>
                <div className={styles.userContainer}>
                  <img
                    className={styles.avatarRoom}
                    src={avatarURL}
                    alt="avatar"
                  />
                  <p className={styles.nameUser}>{name}</p>
                </div>
                <div className={styles.btnContainer}>
                  {user.name !== name && (
                    <button
                      className={styles.btnDelete}
                      onClick={() => handlerDelete(_id)}
                    >
                      <AiOutlineUsergroupDelete />
                    </button>
                  )}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

export default FriendsList;
