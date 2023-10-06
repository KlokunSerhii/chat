import { useFriends } from 'hooks/friend';
import styles from './FriendsList.module.css';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllFriends } from 'redux/friend/operations';
import { useAuth } from 'hooks/auth';
import { AiOutlineUsergroupDelete } from 'react-icons/ai';

function FriendsList() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getAllFriends(user._id));
  }, [dispatch, user._id]);

  const { friendsList } = useFriends();

  return (
    <div className={styles.box}>
      <h2 className={styles.title}>Friends List</h2>
      <div className={styles.boxList}>
        <ul className={styles.roomList}>
          {(friendsList.name !== '') &
            (friendsList.avatarURL !== '') &&
            friendsList.map(({ name, avatarURL }, i) => (
              <li key={i} className={styles.roomItem}>
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
                      onClick={() => console.log('видалити')}
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
