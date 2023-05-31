//import {ADD_CONTACTS} from './action/actionTypes';
const initialState = {
  contacts: [
    {
      //id: 1,
      initial: 'A',
      name: 'Atul',
      MobileNumber: '923 445 9974',
      key: ['Employee', 'Customer'],
    },
    {
      //id: 2,
      initial: 'KS',
      name: 'Kumar Sonu',
      MobileNumber: '979 865 3421',
      // key1: 'Customer',
      key: ['Customer'],
    },
    {
      // id: 3,
      initial: 'My',
      name: 'Madhav Yadav',
      MobileNumber: '933 487 9764',
      // key1: 'Customer',
      key: ['Customer'],
    },
    {
      //id: 4,
      initial: 'RB',
      name: 'Rajeev Bhatt',
      MobileNumber: '919 900 3245',
      //key1: 'Vendor',
      key: ['Vendor'],
    },

    {
      //id: 5,
      initial: 'RP',
      name: 'Ram Prakash',
      MobileNumber: '984 325 6734',
      key: ['Vendor', 'Customer'],
    },
    {
      //id: 6,
      initial: 'KS',
      name: 'Kumar Sanu',
      MobileNumber: '952 349 8733',
      //key1: 'Customer',
      key: ['Customer'],
    },
    {
      // id: 7,
      initial: 'MY',
      name: 'Madhav Mukesh',
      MobileNumber: '853 245 6843',
      //key1: 'Customer',
      key: ['Customer'],
    },

    {
      // id: 8,
      initial: 'RK',
      name: 'Rajindra Kumar',
      MobileNumber: '993 984 3233',
      //key1: 'Vendor',
      key: ['Vendor'],
    },

    {
      // id: 9,
      initial: 'RP',
      name: 'Ram Pratap',
      MobileNumber: '953 468 2513',
      key: ['Vendor', 'Employee'],
    },
  ],
};

const ContactsReducer = (state = initialState, action) => {
  //console.log('===>>>', state);
  switch (action.type) {
    case 'ADD_CONTACT':
      //console.log('hi', action.payload);
      return {contacts: [...state.contacts, action.payload]};
    default:
      return state;
  }
};

export default ContactsReducer;
