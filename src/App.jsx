import React, { useEffect } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import Contacts from 'pages/Contacts/Contacts';
import NotFound from 'pages/NotFound/NotFound';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';

import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefresh } from './redux/authorization/authSlice';
import { refreshThunk } from './redux/authorization/operations';
import { PrivateRoute } from 'routes/PrivateRoute';
import { PublicRoute } from 'routes/PublicRoute';
import Home from 'pages/Home/Home';

const App = () => {
  const isRefresh = useSelector(selectIsRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);

  return isRefresh ? (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <BeatLoader
        color="#AD88C6"
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  ) : (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
