import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ChatView from 'views/ChatView';
import RegisterViews from 'views/RegisterViews';
import LoginViews from 'views/LoginViews';
import SharedLayout from './SharedLayout';
import PrivateRoute from './PrivateRoute';
import RestrictedRoute from './RestrictedRoute';
import { useAuth } from 'huks/auth';
import { refreshUser } from 'redux/auth/operations';
import { AppLoader } from './Loader/Loader';
import { Loader } from './App.styled';
import SigningChat from 'views/SigningChat';

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader>
      <AppLoader />
    </Loader>
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<LoginViews />} />

        <Route
          path="/login"
          element={
            <RestrictedRoute
              redirectto="/join"
              component={LoginViews}
            />
          }
        />

        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectto="/join"
              component={RegisterViews}
            />
          }
        />

        <Route
          path="/chat"
          element={
            <PrivateRoute
              redirectto="/login"
              component={ChatView}
            />
          }
        />

        <Route
          path="/join"
          element={
            <PrivateRoute
              redirectto="/login"
              component={SigningChat}
            />
          }
        />
        <Route path="*" element={<div>NotFound </div>} />
      </Route>
    </Routes>
  );
};

export default App;
