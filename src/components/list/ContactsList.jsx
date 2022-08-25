import PropTypes from 'prop-types';
import { ContactsListItem } from './ContactsListItem';
import { ContactsTitle, List } from './ContactsListStyled';

export default function ContactList({ contactsInfo, deleteContact }) {
  return (
    <div>
      <ContactsTitle>Contacts list</ContactsTitle>
      <List>
        {contactsInfo?.map(item => (
          <ContactsListItem
            item={item}
            key={item.id}
            deleteContact={deleteContact}
          />
        ))}
      </List>
    </div>
  );
}

ContactList.propTypes = {
  contactsInfo: PropTypes.arrayOf(PropTypes.shape),
  deleteContact: PropTypes.func,
};