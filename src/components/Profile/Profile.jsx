import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import {
  updateAvatar,
  refreshUser,
} from 'redux/auth/operations';
import { useAuth } from '../../hooks/auth';

function Profile() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    if (form) dispatch(updateAvatar(form));
    dispatch(refreshUser());
  };

  return (
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={styles.pofileForm}
      >
        <div className={styles.avatar_container}>
          <div className={styles.avatar}>
          <img
            src={user.avatarURL}
            alt="avatar"
          />
          </div>
          <div className={styles.avatar_icon}></div>
          <input
            name="avatar"
            type="file"
            accept="image/*"
            className={styles.file_input}
          />
        </div>
      </form>
  );
}

export default Profile;
