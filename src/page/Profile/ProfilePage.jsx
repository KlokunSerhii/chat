import Profile from 'components/Profile';
import Title from 'components/Title';
import React from 'react';
import styles from './ProfilePage.module.css';
import UserForm from 'components/Profile/UserForm';
import FriendsList from 'components/Profile/FriendsList';
function ProfilePage() {
  return (
    <section className={styles.backGround}>
      <div className={styles.ContainerTitle}>
        <div className={styles.avatarForm}>
          <Profile />
        </div>
        <div className={styles.userContainer}>
          <Title title={'Here you can change your data'} />
          <UserForm />
        </div>
      </div>
      <FriendsList />
    </section>
  );
}

export default ProfilePage;
