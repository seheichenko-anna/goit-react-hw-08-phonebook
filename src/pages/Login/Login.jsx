import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { loginThunk } from '../../redux/authorization/operations';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const handleSubmit = data => {
    dispatch(loginThunk(data))
      .then(() => {
        navigate(location.state?.from || '/', { replace: true });
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <Form formType="login" onDataSubmit={handleSubmit} />;
};

export default Login;
