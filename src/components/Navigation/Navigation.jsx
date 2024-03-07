import { Button } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectUser,
} from '../../redux/authorization/authSlice';
import { logoutThunk } from '../../redux/authorization/operations';
import s from './Navigation.module.css';

const Navigation = () => {
  const { email } = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  return (
    <nav className={s.nav}>
      <Link to="/" className={s.logo}>
        Phonebook
      </Link>
      <NavLink className={s.nav_item} to="/">
        Home
      </NavLink>
      <NavLink className={s.nav_item} to="/contacts">
        Contacts
      </NavLink>
      <div className={s.auth_wrapper}>
        {!isLoggedIn && (
          <>
            <NavLink className={s.nav_item} to="/login">
              Login
            </NavLink>
            <NavLink className={s.nav_item} to="/register">
              Register
            </NavLink>
          </>
        )}
        {isLoggedIn && (
          <>
            {' '}
            <p className={s.user_email}>{email}</p>
            <Button
              variant="contained"
              onClick={() => dispatch(logoutThunk())}
              sx={{ alignSelf: 'center' }}
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
