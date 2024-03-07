import Form from 'components/Form/Form';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerThunk } from '../../redux/authorization/operations';

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(registerThunk(data))
      .then(() => {
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };
  return <Form onDataSubmit={handleSubmit} />;
};

export default Register;
