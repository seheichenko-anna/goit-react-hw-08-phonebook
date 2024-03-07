import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/filterSlice';
import ContactListItem from './ContactListItem/ContactListItem';
import Filter from './Filter/Filter';
import s from './ContactList.module.css';
import ContactForm from 'components/ContactList/ContactForm/ContactForm';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = filter
    ? contacts.filter(item => item.name.toLowerCase().includes(filter))
    : contacts;

  return (
    <div className={s.contacts_wrapper}>
      <h1>Contacts</h1>
      <ContactForm />
      <Filter />
      <ul className={s.contacts_list}>
        {filteredContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
