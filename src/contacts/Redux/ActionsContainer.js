let cId = 0;
export const addContact = props => {
  const name = props[0].name;
  const names = name.split(' ');
  const initial = names.map(name => name.charAt(0).toUpperCase());

  return {
    type: 'ADD_CONTACT',
    payload: {
      id: cId++,
      // initial: 'AK',
      initial: initial.join(''),
      name: props[0].name,
      MobileNumber: props[0].mobileNo,
      email: props[0].email,
      company: props[0].company,
      key: props[0].key,
      // key1: props[0].selectedTags,
    },
  };
};
