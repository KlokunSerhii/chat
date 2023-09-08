import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import {
  updateAvatar,
  refreshUser,
} from 'redux/auth/operations';
import { useAuth } from '../../huks/auth';

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
    <div className={styles.pofileContainet}>
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        className={styles.pofileForm}
      >
        <label htmlFor="file" className={styles.label}>
          Choose file to upload
        </label>

        <input
          name="avatar"
          type="file"
          accept="image/*"
          className={styles.addAvatar}
        />

        <button className={styles.button}>Submit</button>
      </form>
      <div>
        <img
          src={user.avatarURL}
          alt="avatar"
          className={styles.avatar}
        />
      </div>
    </div>
  );
}

export default Profile;
