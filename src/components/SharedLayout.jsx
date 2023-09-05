import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/Appbar/AppBar';
import styles from './App.module.css';

function SharedLayout() {
  return (
    <div className={styles.background}>
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
