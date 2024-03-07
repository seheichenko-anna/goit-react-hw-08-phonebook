import { TextField } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts, selectFilter } from '../../../redux/filterSlice';

const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  const handleSearch = e => {
    dispatch(filterContacts(e.target.value.toLowerCase().trim()));
  };

  return (
    <TextField
      type="text"
      value={filter}
      onChange={handleSearch}
      sx={{ width: '320px', marginTop: '40px' }}
      placeholder="Find contacs by name"
    />
  );
};

export default Filter;
