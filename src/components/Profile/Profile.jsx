import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';
import { useDispatch } from 'react-redux';
import { updateAvatar } from 'redux/auth/operations';

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (avatar) dispatch(updateAvatar(avatar));
  }, [avatar, dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    setAvatar(formData);
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
    </div>
  );
}

export default Profile;
