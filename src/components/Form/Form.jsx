import { Button, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import s from './Form.module.css';

const Form = ({ onDataSubmit, formType }) => {
  const { register, reset, handleSubmit } = useForm();

  const submit = data => {
    onDataSubmit(data);

    reset();
  };

  return (
    <div className={s.form_wrapper}>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        {formType !== 'login' && (
          <TextField
            variant="standard"
            type="text"
            label="Name"
            required
            {...register('name')}
          />
        )}
        <TextField
          variant="standard"
          type="email"
          label="Email"
          required
          {...register('email')}
        />
        <TextField
          variant="standard"
          type="password"
          label="Password"
          required
          {...register('password')}
        />
        <Button
          variant="contained"
          sx={{ alignSelf: 'center', marginTop: '10px' }}
          type="submit"
        >
          {formType === 'login' ? 'Login' : 'Register'}
        </Button>
        {formType === 'login' && (
          <p className={s.register_link}>
            {' '}
            Don't have an account yet? <Link to="/register ">Sign up here</Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
