import { ColorRing } from 'react-loader-spinner';
import styles from './AppLoader.module.css';
function AppLoader() {
  return (
    <div className={styles.container}>
      <ColorRing
        visible={true}
        height="80"
        width="80"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={[
          'rgb(15, 133, 15)',
          'rgba(45, 181, 45)',
          'rgba(45, 181, 45, 0.5)',
          'rgb(15, 133, 15)',
          'rgba(45, 181, 45)',
        ]}
      />
    </div>
  );
}
export default AppLoader;
