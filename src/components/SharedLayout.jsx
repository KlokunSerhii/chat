import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppLoader from './Loader/AppLoader';
import Navigation from './Navigation/Navigation';

function SharedLayout() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
