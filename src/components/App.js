import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ChatView from 'Page/ChatView';
import RegisterPage from 'Page/SingUp';
import LoginPage from 'Page/SingIn/';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { useAuth } from 'huks/auth';
import { refreshUser } from 'redux/auth/operations';
import { AppLoader } from './Loader/Loader';
import stales from './App.module.css';
import SigningChat from 'Page/SigningChat';
import ProfileView from 'Page/ProfileView';
import WelcomPage from 'Page/Welcome';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <div className={stales.loader}>
      <AppLoader />
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<WelcomPage />} />
        <Route
          path="login"
          element={
            <RestrictedRoute
              redirectto="/join"
              component={LoginPage}
            />
          }
        />
        <Route
          path="register"
          element={
            <RestrictedRoute
              redirectto="/join"
              component={RegisterPage}
            />
          }
        />
        <Route
          path="join"
          element={
            <PrivateRoute
              redirectto="/login"
              component={SigningChat}
            />
          }
        />
        <Route
          path="chat/:id"
          element={
            <PrivateRoute
              redirectto="/login"
              component={ChatView}
            />
          }
        />
        <Route
          path="profile"
          element={
            <PrivateRoute
              redirectto="/login"
              component={ProfileView}
            />
          }
        />
        <Route path="*" element={<div>NotFound </div>} />
      </Route>
    </Routes>
  );
};

export default App;
