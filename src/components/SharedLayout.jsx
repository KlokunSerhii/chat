import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/Appbar/AppBar';

function SharedLayout() {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<b>LOAD...</b>}>
        <Outlet />
      </Suspense>
    </div>
  );
}

export default SharedLayout;
