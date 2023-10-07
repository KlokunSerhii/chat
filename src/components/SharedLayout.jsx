import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/Appbar/AppBar';
import AppLoader from './Loader/AppLoader';

function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
