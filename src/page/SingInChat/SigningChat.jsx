import SigningChatForm from 'components/SigningChatForm';
import React from 'react';
import styles from './SigningChat.module.css'
import Title from 'components/Title';

function SigningChat() {
  return (
    <section className={styles.backGround}>
      <div className={styles.ContainetTitle}>
        <Title title={'Join to room'} />
        <SigningChatForm />
      </div>
    </section>


  );
}

export default SigningChat;
