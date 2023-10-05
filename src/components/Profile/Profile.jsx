import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import {
  updateAvatar,
  refreshUser,
} from 'redux/auth/operations';
import { useAuth } from '../../hooks/auth';
import Title from 'components/Title';

function Profile() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleSubmit = e => {
    const file = e.target;
    e.preventDefault();
    if (file) {
      dispatch(updateAvatar(file));
      dispatch(refreshUser());
    }
  };

  return (
    <div className={styles.Container}>
      <Title title={'Here you can change your avatar'} />
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={styles.profileForm}
      >
        <div className={styles.avatar_container}>
          <div className={styles.avatar}>
            <img src={user.avatarURL} alt="avatar" />
          </div>
          <div className={styles.avatar_icon}></div>
          <input
            name="avatar"
            type="file"
            accept="image/*"
            className={styles.file_input}
          />
        </div>
        <button className={styles.buttonUp} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default Profile;
