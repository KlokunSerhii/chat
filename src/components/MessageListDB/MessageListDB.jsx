import React from 'react';
import styles from '../Chat/Chat.module.css';
import { useMessage } from '../../huks/message';
import imgDefault from '../../img/bot.jpg';

function MessageListDB({ params }) {
  const { items } = useMessage();

  return (
    <>
      {items.map(({ user, message }, i) => {
        const avatar = user.avatar
          ? user.avatar
          : imgDefault;
        const you =
          user.name.trim().toLowerCase() ===
          params.name.trim().toLowerCase();
        return you ? (
          <div key={i} className={styles.containerYou}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
            />
            <div className={styles.messageContainerYou}>
              <div className={styles.infoMessage}>
                <p className={styles.time}>{}</p>
                <p className={styles.nameYou}>
                  {user.name}
                </p>
              </div>
              <p className={styles.you}>{message}</p>
            </div>
          </div>
        ) : (
          <div key={i} className={styles.containerUser}>
            <img
              src={avatar}
              alt="avatar"
              className={styles.avatar}
            />
            <div className={styles.messageContainerUser}>
              <div className={styles.infoMessageUser}>
                <p className={styles.time}>{}</p>
                <p className={styles.nameUser}>
                  {user.name}
                </p>
              </div>

              <p className={styles.user}>{message}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default MessageListDB;
