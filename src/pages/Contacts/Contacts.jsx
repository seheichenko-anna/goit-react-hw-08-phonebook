import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContactsThunk } from '../../redux/contacts/operations';
import ContactList from '../../components/ContactList/ContactList';

function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return <ContactList />;
}

export default Contacts;
