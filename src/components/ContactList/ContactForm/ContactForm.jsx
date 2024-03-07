import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContactThunk,
  editContactThunk,
} from '../../../redux/contacts/operations';
import { selectContacts } from '../../../redux/contacts/contactsSlice';
import { Button, TextField } from '@mui/material';
import s from './ContactsForm.module.css';
import { useForm } from 'react-hook-form';

const ContactForm = ({ formType = 'add', id = null, handleClose }) => {
  const { register, handleSubmit, reset } = useForm();

  const contacts = useSelector(selectContacts);

  const dispatch = useDispatch();

  const submit = ({ name, number }) => {
    const newContact = {
      name,
      number,
    };
    const isContactExist = contacts.some(contact => contact.name === name);
    if (isContactExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    if (formType === 'edit') {
      dispatch(editContactThunk({ ...newContact, id }));
      handleClose();
    } else {
      dispatch(addContactThunk(newContact));
    }
    reset();
  };

  return (
    <form className={s.form} onSubmit={handleSubmit(submit)}>
      <TextField
        fullWidth
        type="text"
        label="Name"
        name="name"
        required
        {...register('name')}
      />
      <TextField
        fullWidth
        type="tel"
        label="Number"
        name="number"
        required
        {...register('number')}
      />
      <Button
        variant="contained"
        sx={{ alignSelf: 'center', marginTop: '10px' }}
        type="submit"
      >
        {formType === 'edit' ? 'Edit contact' : 'Add contact'}
      </Button>
    </form>
  );
};
export default ContactForm;
