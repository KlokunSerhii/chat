import React from 'react';
import styles from './Title.module.css';

function Title({ title }) {
  return (
    <h1 className={styles.titleContainer}>{title} </h1>
  );
}

export default Title;
