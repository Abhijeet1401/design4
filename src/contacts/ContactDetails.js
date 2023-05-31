import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Modal,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch} from 'react-redux';
import {addContact} from './Redux/ActionsContainer';
import {useNavigation} from '@react-navigation/native';
import {CheckBox} from 'react-native-elements';
import Contacts from './Contacts';
let filterCategory = [
  {
    label: 'Customer',
  },
  {
    label: 'Employee',
  },
  {
    label: 'Vendor',
  },
];

const ContactDetails = () => {
  const [userName, setUserName] = useState('');
  const [nameError, setNameError] = useState();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailrequired, setEmailRequired] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [saveButtonDisabled, setSaveButtonDisabled] = useState(true);
  const [openFilterModal, setFilterModal] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedFilters1, setSelectedFilters1] = useState([]);
  const [isRemoveFilter, setIsRemoveFilter] = useState(false);

  //const [selectedTags, setSelectedTags] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const onSumbit = () => {
    let value = [
      {
        name: userName,
        mobileNo: phoneNumber,
        email: email,
        company: companyName,
        key: selectedFilters,
      },
    ];

    dispatch(addContact(value));
  };
  useEffect(() => {
    const fieldsFilled =
      userName.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      email.trim() !== '' &&
      companyName.trim() !== '';
    setSaveButtonDisabled(!fieldsFilled);
  }, [userName, phoneNumber, email, companyName]);

  const startLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  const [myTags, setMyTags] = useState([
    {
      key: 'Customer',
      selected: false,
      id: 1,
    },
    {
      key: 'Employee',
      selected: false,
      id: 2,
    },
    {
      key: 'Vendor',
      selected: false,
      id: 3,
    },
  ]);

  //console.log('mytags==>', myTags);
  const deleteTag = prop => {
    setMyTags(e => e.filter(v => v.id != prop));
    // console.log('ghgggg', myTags['tags']);
  };
  const toggleOptions = index => {
    setFilterModal(!openFilterModal);
  };
  // to handle filter
  // const handleOptionToggle = option => {
  //   const updatedOptions = [...selectedOptions];
  //   const index = updatedOptions.indexOf(option);

  //   if (index > -1) {
  //     updatedOptions.splice(index, 1);
  //   } else {
  //     updatedOptions.push(option);
  //   }

  //   setSelectedOptions(updatedOptions);
  // };

  // function to handle Submit filters onPress Submit Button
  const handleSubmit = () => {
    setFilterModal(false);
    setSelectedFilters1(selectedFilters);
  };
  const handleCheckboxChange = label => {
    if (selectedFilters.includes(label)) {
      setSelectedFilters(prevSelectedFilters =>
        prevSelectedFilters.filter(filter => filter !== label),
      );
    } else {
      setSelectedFilters(prevSelectedFilters => [
        ...prevSelectedFilters,
        label,
      ]);
    }
    //setIsRemoveFilter(false);
  };

  const unselectFilter = filterVal => {
    const newArr = selectedFilters.filter(value => filterVal !== value);
    setSelectedFilters(newArr);
    setIsRemoveFilter(true);
    handleSubmit();
  };

  const validName = () => {
    //  console.log('getText', getText);
    if (userName.trim() == '') {
      setNameError('Full Name is required');
    } else {
      setNameError('');
    }
  };
  // const validatePhoneNumber = phoneNumber => {
  //   if (phoneNumber.trim() == '') {
  //     setPhoneNumberError('Phone Number is required');
  //   } else {
  //     setPhoneNumberError('');
  //   }
  // };
  const validateMobileNumber = () => {
    if (phoneNumber.trim() === '') {
      setPhoneNumberError('Mobile number is required');
    } else if (!/^[6-9]/.test(phoneNumber.trim())) {
      setPhoneNumberError('Invalid mobile number');
    } else {
      setPhoneNumberError('');
    }
  };

  function isValidEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return emailRegex.test(email);
  }
  // const validateEmail = email => {
  //   //setEmail(email);
  //   const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  //   if (email.trim() == '') {
  //     setEmailError('Email is required');
  //   } else if (emailRegex.test(email) == false) {
  //     setEmailError('Invalid Email');
  //   } else {
  //     setEmailError('');
  //   }
  // };
  const validateEmail = text => {
    if (!isValidEmail(text)) {
      setEmailError('Email is invalid');
    } else {
      setEmailError(null);
    }
    setEmail(text);
  };
  const handleBlur = () => {
    if (email.trim() == '') {
      setEmailError('Email is required');
    } else {
      setEmailError(null);
    }
  };

  const validateCompanyName = () => {
    if (companyName.length < 5) {
      setCompanyNameError(
        'comapany name should` be 5 length character Atleast',
      );
    } else {
      setCompanyNameError('');
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <ScrollView>
        {/* tag view */}
        <View style={styles.tagContainer}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              //backgroundColor: 'red',
            }}>
            <Text style={styles.textTag}>Tags:</Text>
            <View>
              <TouchableOpacity
                style={styles.textTag}
                onPress={() => setFilterModal(true)}>
                <Icon2 name="plus" size={25} color={'#1D1D1D'} />
              </TouchableOpacity>
            </View>
          </View>
          {/* buttons */}
          <View style={styles.selectedFilterView}>
            {selectedFilters1.map(selectedFilter => (
              <View style={styles.filterOptionBtn} key={selectedFilter}>
                <Text
                  style={{
                    color: '#1D1D1D',
                    textAlign: 'center',
                  }}>
                  {selectedFilter}
                </Text>
                <TouchableOpacity
                  onPress={() => unselectFilter(selectedFilter)}>
                  <View style={styles.closeIcon}>
                    <Icon2 name="close" size={12} color="#727272" />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* <FlatList
            data={myTags}
            renderItem={({item, index}) => (
              <View style={styles.tagCategoryContainer} key={item.key}>
                <TouchableOpacity>
                  <View style={styles.category}>
                    <Text style={styles.textCategory}>{item.key}</Text>

                    <TouchableOpacity onPress={() => deleteTag(item.id)}>
                      <View style={styles.closeIcon}>
                        <Icon2 name="close" size={12} color="#727272" />
                      </View>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          /> */}
          {/* <View style={styles.filterCategory}>
            {myTags.map((item, index) => {
              return (
                <View style={styles.tagCategoryContainer} key={item.key}>
                  <TouchableOpacity>
                    <View style={styles.category}>
                      <Text style={styles.textCategory}>{item.key}</Text>

                      <TouchableOpacity onPress={() => deleteTag(item.id)}>
                        <View style={styles.closeIcon}>
                          <Icon2 name="close" size={12} color="#727272" />
                        </View>
                      </TouchableOpacity>
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View> */}
        </View>

        <View style={styles.detailsContainer}>
          {/* details View */}
          <View styles={styles.detailsView}>
            {/* border */}
            <View style={styles.border}></View>
            <View style={styles.nameContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Full Name*</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={text => setUserName(text)}
                  value={userName}
                  onBlur={validName}
                />
              </View>
            </View>
            {userName == '' && <Text style={styles.error}>{nameError}</Text>}
            <View style={styles.border}></View>

            {/* phone */}

            <View style={styles.phoneNumContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Phone No*</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  keyboardType="numeric"
                  color={'#1D1D1D'}
                  style={styles.input}
                  // onChangeText={phoneNumber => setPhoneNumber(phoneNumber)}
                  onChangeText={phoneNumber => {
                    setPhoneNumber(phoneNumber);
                    validateMobileNumber();
                  }}
                  value={phoneNumber}
                  maxLength={10}
                  onBlur={() => {
                    if (phoneNumber.length < 10) {
                      setPhoneNumberError('Phone Number Is required');
                    }
                  }}
                />
              </View>
              {phoneNumberError && (
                <Text style={styles.error}>{phoneNumberError}</Text>
              )}
            </View>
            <View style={styles.border}></View>
            {/* email */}
            <View style={styles.emailContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Email*</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={validateEmail}
                  // onChangeText={email => {
                  //   validateEmail(email);
                  // }}
                  value={email}
                  onBlur={handleBlur}
                />
              </View>
            </View>
            {emailError && <Text style={styles.error}>{emailError}</Text>}
            <View style={styles.border}></View>
            {/* company details */}
            <View style={styles.companyNameContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Company Name</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={text => {
                    setCompanyName(text);
                    validateCompanyName();
                  }}
                  value={companyName}
                  onBlur={() => {
                    if (companyName.trim() === '') {
                      setCompanyNameError('Company name can not be blank');
                    }
                  }}
                />
              </View>
            </View>
            {companyNameError && (
              <Text style={styles.error}>{companyNameError}</Text>
            )}
            <View style={styles.border}></View>
          </View>
        </View>
        {/* button */}
        <View style={styles.footer}>
          <TouchableOpacity
            style={[
              styles.footerButton,
              saveButtonDisabled ? styles.disabled : null,
            ]}
            // onPress={() => (onSumbit(), props.navigation.goBack())}
            onPress={() => (onSumbit(), navigation.goBack(), startLoading)}
            disabled={saveButtonDisabled}>
            <Text style={[styles.footerButtonText]}>Save & Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerButton]}>
            <Text style={[styles.footerButtonText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal animationType="slide" visible={openFilterModal} transparent={true}>
        <View
          style={{
            flex: 1,
            width: scale(200),
            alignSelf: 'center',
            justifyContent: 'center',
            height: verticalScale(130),
            alignItems: 'flex-start',
          }}>
          <View style={styles.categoryView}>
            <View style={styles.category}>
              <TouchableOpacity onPress={() => setFilterModal(false)}>
                <View style={styles.closeFilterModal}>
                  <Icon2
                    name="close"
                    size={20}
                    color="#1D1D1D"
                    style={{fontFamily: 'Inter-Bold'}}
                  />
                </View>
              </TouchableOpacity>

              {filterCategory.map((option, index) => (
                <TouchableOpacity
                  onPress={() => handleCheckboxChange(option.label)}
                  key={`option.label_${index}`}
                  style={{
                    width: scale(190),
                    // alignSelf: 'center',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    // backgroundColor: 'red',
                  }}>
                  <View>
                    <Text style={styles.checkboxText}>{option.label}</Text>
                  </View>

                  <CheckBox
                    key={`option.label_${index}`}
                    onPress={() => handleCheckboxChange(option.label)}
                    checked={selectedFilters.includes(option.label)}
                  />
                </TouchableOpacity>
              ))}

              <TouchableOpacity
                onPress={() => handleSubmit()}
                style={styles.submitButton}>
                <Text style={styles.submitButtonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  tagContainer: {
    marginTop: verticalScale(26),
    width: scale(330),
    alignSelf: 'center',
    // flexDirection: 'row',
  },
  textTag: {
    color: '#727272',
  },
  filterCategory: {
    width: scale(330),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    //backgroundColor: 'red',
    justifyContent: 'space-around',
  },
  // categoryView: {
  //   width: scale(330),
  //   flexDirection: 'row',
  //   backgroundColor: 'red',
  //   margin: 5,
  // },
  tagCategoryContainer: {
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  category: {
    width: scale(98),
    borderRadius: verticalScale(6),
    height: verticalScale(25),
    backgroundColor: '#F5F7FB',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  textCategory: {
    color: '#1D1D1D',
  },

  topBarIcon: {
    fontSize: scaleFont(20),
    color: '#0033A1',
  },
  detailsContainer: {
    width: scale(330),
    alignSelf: 'center',
  },
  detailsView: {
    width: scale(310),
    alignSelf: 'center',
  },
  textFieldinfo: {
    color: '#727272',
  },
  border: {
    width: scale(330),
    marginTop: verticalScale(14),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },
  nameContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  phoneNumContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  emailContainer: {
    width: scale(330),
    //backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  companyNameContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  contactfieldValue: {},
  input: {},
  // button css
  buttonContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  buttonText: {
    fontSize: verticalScale(12),
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#0033A1',
  },
  activeButtonText: {
    color: '#fff',
  },
  footer: {
    width: scale(330),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
    marginBottom: verticalScale(20),
  },
  // clearApplyButton: {
  //   flexDirection: 'row',
  //   width: '100%',
  // },
  footerButton: {
    backgroundColor: '#0033A1',
    borderRadius: verticalScale(6),
    // alignSelf: 'center',

    height: verticalScale(42),
    justifyContent: 'center',
    width: scale(143),
    // justifyContent: 'center',
  },
  footerButtonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
  },
  disabled: {
    //opacity: 0.5,
    backgroundColor: '#D7D7D7',
  },
  cancel: {
    alignSelf: 'flex-end',
  },
  // css for modal
  categoryView: {
    width: scale(200),
    height: verticalScale(200),
    alignSelf: 'center',
    // marginTop: verticalScale(90),
    // backgroundColor: 'red',
    backgroundColor: '#FFFFFF',
    borderRadius: verticalScale(6),
    elevation: 2,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeFilterModal: {
    marginTop: verticalScale(5),
    // alignSelf: 'center',
    alignItems: 'flex-end',
  },
  checkboxText: {
    fontFamily: 'Inter-Medium',
    fontSize: scaleFont(14),
    color: '#1D1D1D',
  },
  submitButton: {
    alignSelf: 'center',
  },
  submitButtonText: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(14),
    color: '#1D1D1D',
  },
  closeIcon: {
    height: verticalScale(10),
  },
  category: {
    // backgroundColor: 'green',
    width: scale(180),
    justifyContent: 'space-between',
    borderRadius: verticalScale(6),
    //alignSelf: 'center',
    height: verticalScale(180),
  },
  //alignSelf: 'center',
  textCategory: {
    color: '#1D1D1D',
  },
  selectedFilterView: {
    flexDirection: 'row',
  },
  filterOptionBtn: {
    width: scale(98),
    borderRadius: verticalScale(6),
    height: verticalScale(25),
    backgroundColor: '#F5F7FB',
    marginRight: scale(10),
    justifyContent: 'space-around',
    flexDirection: 'row',
    //alignSelf: 'center',
    alignItems: 'center',
    //marginTop: verticalScale(5),
  },
  closeIcon: {
    width: scale(20),
    height: verticalScale(10),
  },
  error: {
    color: 'red',
    fontSize: scaleFont(12),
  },
});
export default ContactDetails;
