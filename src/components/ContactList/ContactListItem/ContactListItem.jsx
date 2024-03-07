import { Box, Button, Modal } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../../redux/contacts/operations';
import ContactForm from '../ContactForm/ContactForm';
import s from './ContactListItem.module.css';

const ContactListItem = ({ id, name, number }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '4px',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const dispatch = useDispatch();

  const handleDeleteContact = id => {
    dispatch(deleteContactThunk(id));
  };

  return (
    <li key={id} className={s.contacts_item}>
      <p>
        {name}: {number}
      </p>
      <div className={s.button_wrapper}>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ alignSelf: 'center' }}
        >
          Edit contact
        </Button>

        <Button
          variant="contained"
          onClick={() => handleDeleteContact(id)}
          sx={{ alignSelf: 'center' }}
        >
          Delete
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ContactForm formType="edit" id={id} handleClose={handleClose} />
        </Box>
      </Modal>
    </li>
  );
};

export default ContactListItem;
