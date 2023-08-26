import Chat from '../components/Chat';
import styles from './ChatView.module.css';

function ChatView() {
  return (
    <div className={styles.container}>
      <Chat />
    </div>
  );
}

export default ChatView;
