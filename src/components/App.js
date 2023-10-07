import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/operations';
import AppLoader from './Loader/AppLoader';
import PrivateRoute from '../routes/PrivateRoute';
import RestrictedRoute from '../routes/RestrictedRoute';

const WelcomePage = lazy(() => import('page/Welcome'));
const ChatView = lazy(() => import('page/ChatPage/ChatPage'));
const RegisterPage = lazy(() => import('page/SingUp'));
const LoginPage = lazy(() => import('page/SingIn'));
const SharedLayout = lazy(() => import('./SharedLayout'));
const SigningChat = lazy(() => import('page/SingInChat/SigningChat'));
const ProfilePage = lazy(() => import('page/Profile/ProfilePage'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<AppLoader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<WelcomePage />} />
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
              <PrivateRoute redirectto="/" component={SigningChat} />
            }
          />
          <Route
            path="chat/:id"
            element={
              <PrivateRoute redirectto="/" component={ChatView} />
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute redirectto="/" component={ProfilePage} />
            }
          />
          <Route path="*" element={<div>NotFound </div>} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
