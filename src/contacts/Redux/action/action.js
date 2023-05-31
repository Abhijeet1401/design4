import ADD_CONTACTS from './actionTypes';

export const addContacts = contact => ({
  type: ADD_CONTACTS,
  payload: contact,
});
