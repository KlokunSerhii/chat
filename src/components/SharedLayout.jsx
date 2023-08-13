import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import background from '../img/bg.jpg';
import AppBar from 'components/Appbar/AppBar';

function SharedLayout() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
