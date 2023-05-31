import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Modal,
  StatusBar,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckBox} from 'react-native-elements';
import {useSelector} from 'react-redux';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import {useNavigation} from '@react-navigation/native';
const Contacts = props => {
  //const [text, setText] = useState('');
  const [showOptions, setShowOptions] = useState(false);
  const [showDownIcon, setShowDownIcon] = useState(true);
  const [showDownIcon2, setShowDownIcon2] = useState(true);
  // const [checked, setChecked] = useState(false);
  // const [showCustomer, setShowCustomer] = useState(false);
  // const [showEmployee, setShowEmployee] = useState(false);
  // const [showVendors, setShowVendors] = useState(false);
  const [showRecent, setShowRecent] = useState(false);
  const [alphabetical, setAlphabetical] = useState(false);
  const [sortMenu, setSortMenu] = useState(false);
  const [openFilter, setOpenFilter] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [frequency, showFrequency] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [openFilterModal, setFilterModal] = useState(false);
  const [Loading, SetLoading] = React.useState(true);

  const contactList = useSelector(state => state.ContactsReducer.contacts);
  //console.log('contactList=>>lllll>>', contactList);
  // let selectedFilterArr = [];
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

  const navigation = useNavigation();

  const [filteredData, setFilteredData] = useState(contactList);
  const [filterArr, setFilterArr] = useState(contactList);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedFilters1, setSelectedFilters1] = useState([]);
  const [isRemoveFilter, setIsRemoveFilter] = useState(false);
  useEffect(() => {
    if (isRemoveFilter) {
      handleSubmit();
      setIsRemoveFilter(false);
    }
  }, [isRemoveFilter]);

  useEffect(() => {
    setFilteredData(contactList);
    setSelectedFilters([]);
  }, [contactList]);

  const toggleOptions = index => {
    setFilterModal(!openFilterModal);
  };
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      SetLoading(true);
      setTimeout(() => {
        SetLoading(false);
      }, 3000);
    });

    return unsubscribe;
  }, [navigation]);

  if (Loading) {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <ActivityIndicator color={'#0033A1'} size="large" />
      </View>
    );
  }
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

  const handleSubmit = () => {
    const filteredData = contactList.filter(contact => {
      return selectedFilters.some(filter => contact.key.includes(filter));
    });

    setFilteredData(filteredData);
    if (selectedFilters.length == 0) {
      setFilteredData(contactList);
    }
    setFilterModal(false);
    setSelectedFilters1(selectedFilters);
  };

  const handleRecentSort = value => {
    setShowRecent(value);
  };
  const handleAlphabetical = value => {
    setAlphabetical(value);
  };
  const toggleOptions2 = index => {
    setIsMenuOpen(!isMenuOpen);
    setSortMenu(!sortMenu);
    // setShowRecent(!showRecent);
    // setAlphabetical(!alphabetical);
    // showFrequency(!frequency);
  };
  const handlePressDropDown = () => {
    setShowDownIcon(!showDownIcon);
  };
  const handlePressDropDown2 = () => {
    setShowDownIcon2(!showDownIcon2);
  };

  // handle check box change

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

  // search bar filter by search name and mobile number

  const searchfilterData = text => {
    setSearchText(text);
    //let data = filterArr;
    const filterResult = contactList.filter(item => {
      return item.name.indexOf(text) > -1;
    });
    const filterResultNum = contactList.filter(item => {
      return item.MobileNumber.indexOf(text).toString() > -1;
    });
    if (filterResult.length > 0) {
      setFilteredData(filterResult);
    }
    if (filterResultNum.length > 0) {
      setFilteredData(filterResultNum);
    }
  };

  // function to unselect filter from the array
  const unselectFilter = filterVal => {
    const newArr = selectedFilters.filter(value => filterVal !== value);
    setSelectedFilters(newArr);
    setIsRemoveFilter(true);
    handleSubmit();
  };

  const customListFooter = ({props}) => {
    return (
      <TouchableOpacity activeOpacity={1}>
        <View>
          <View style={styles.SearchContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={text => {
                  searchfilterData(text);
                }}
                value={searchText}
                placeholderTextColor={'#727272'}
                style={styles.textInput}
                placeholder="Search Contact"
              />
              <TouchableOpacity onPress={() => handleSearchIcon}>
                <Icon
                  name="search"
                  style={{
                    color: '#1D1D1D',
                  }}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.contactFilterContainer}>
            <View style={styles.innerView}>
              <TouchableOpacity onPress={() => toggleOptions()}>
                <View style={styles.LeftView}>
                  <View style={{width: scale(30)}}>
                    <Text style={styles.filterOptionText}>Filter</Text>
                  </View>
                  <TouchableOpacity
                    style={styles.iconDropdown}
                    onPress={() => (toggleOptions(), handlePressDropDown())}
                    onDoubleClick={() => toggleOptions(false)}>
                    <View style={{width: scale(25)}}>
                      <Icon2
                        name={showDownIcon ? 'chevron-down' : 'chevron-up'}
                        size={20}
                        color={'#1D1D1D'}
                      />
                    </View>
                  </TouchableOpacity>

                  <View
                    style={{
                      width: scale(200),
                      justifyContent: 'center',
                    }}>
                    <FlatList
                      //key={'Selected FIlters'}
                      data={selectedFilters1}
                      horizontal={true}
                      renderItem={({item}) => (
                        <View style={styles.filterOptionBtn}>
                          <Text
                            // onPress={() => unselectFilter(item)}
                            style={{
                              color: '#1D1D1D',
                              textAlign: 'center',
                            }}>
                            {item}
                          </Text>
                          <TouchableOpacity
                            onPress={() => unselectFilter(item)}>
                            <View style={styles.closeIcon}>
                              <Icon2 name="close" size={12} color="#727272" />
                            </View>
                          </TouchableOpacity>
                        </View>
                      )}
                      keyExtractor={(item, index) => index.toString()}
                    />
                  </View>
                </View>
              </TouchableOpacity>

              {/* right View sort by option  */}
              <View style={styles.RightView}>
                <View style={{width: scale(40)}}>
                  <Text style={styles.sortByOptionText}>Sort by</Text>
                </View>
                <TouchableOpacity
                  onPress={() => (toggleOptions2(), handlePressDropDown2())}
                  onDoubleClick={() => toggleOptions(false)}>
                  <View style={{width: scale(25)}}>
                    {/* <Icon2 name="chevron-down" size={20} color={'#1D1D1D'} /> */}
                    <Icon2
                      name={showDownIcon2 ? 'chevron-down' : 'chevron-up'}
                      size={20}
                      color={'#1D1D1D'}
                    />
                  </View>
                </TouchableOpacity>
                {/* sort option container End */}
              </View>
            </View>
            <Modal
              visible={isMenuOpen}
              transparent={true}
              animationType="fade"
              onRequestClose={toggleOptions2}>
              <View style={{flex: 1}}>
                <StatusBar barStyle="dark-content" />
                <View style={styles.SortContainer}>
                  <View style={styles.sortOptionView}>
                    <TouchableOpacity>
                      <View>
                        <Text style={styles.textSortOptions}>Recent</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={styles.sortMenu}>
                        <Text style={styles.textSortOptions}>Alphabetical</Text>
                      </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <View style={styles.sortMenu}>
                        <Text style={styles.textSortOptions}>Frequency</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setIsMenuOpen(false)}>
                      <View style={styles.sortMenu}>
                        <Text style={styles.textSortOptions}>Close</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </Modal>
            {/* sort Options container end */}
          </View>
          <View style={{flex: 1, marginBottom: verticalScale(20)}}>
            <FlatList
              data={filteredData}
              renderItem={renderItem}
              keyExtractor={props}
            />
          </View>
        </View>
      </TouchableOpacity>
      // filter and sort Container
    );
  };
  // render Item to render Data
  const renderItem = ({item}) => {
    return (
      <View style={styles.contactsDetailsContainer}>
        <View style={styles.contactsView}>
          {/* Left View */}
          <View style={styles.LeftSideContainer}>
            <View style={styles.contactInitial}>
              <Text
                style={{
                  color: '#1D1D1D',
                  //textAlign: 'center',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Bold',
                }}>
                {item.initial}
              </Text>
            </View>
            <View style={{width: scale(100)}}>
              <Text
                style={{
                  color: '#1D1D1D',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Medium',
                }}>
                {item.name}
              </Text>
              <Text
                style={{
                  color: '#727272',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-Medium',
                }}>
                {item.MobileNumber}
              </Text>
            </View>
          </View>

          {/* right View */}
          {/* 
          <View style={{flexDirection: 'row'}}>
            {item.map((key, index) => {
              return (
                <View
                  key={index}
                  style={[
                    styles.keyItem,
                    {backgroundColor: '#F5F7FB', marginRight: 5},
                  ]}>
                  <Text style={styles.textKey}>{key}</Text>
                </View>
              );
            })}
          </View> */}

          <FlatList
            scrollEnabled={false}
            style={{flexDirection: 'row'}}
            data={item.key}
            renderItem={({item}) => (
              <View
                style={[
                  styles.keyItem,
                  {backgroundColor: '#F5F7FB', marginRight: 5},
                ]}>
                <Text style={styles.textKey}>{item}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1}>
        <StatusBar backgroundColor={'#ffffff'} barStyle={'dark-content'} />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.TitleContacts}>Contacts</Text>
          </View>
          {/* header Right */}
          <View style={styles.headerRight}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => props.navigation.navigate('AddContactMainScreen')}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Add</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {/* search Container */}

        {/*   contacts filter and sort Container */}

        {/* contacts list data */}
        <View style={{marginBottom: 20}}>
          <FlatList
            keyExtractor={item => item.id}
            ListFooterComponent={customListFooter}
            renderItem={renderItem}
          />
        </View>
        <Modal
          animationType="slide"
          visible={openFilterModal}
          transparent={true}
          onRequestClose={toggleOptions}>
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

                <View>
                  {filterCategory.map((options, index) => (
                    <TouchableOpacity
                      onPress={() => handleCheckboxChange(options.label)}>
                      <View
                        key={`option.label_${index}`}
                        style={{
                          width: scale(190),
                          //alignSelf: 'center',
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          // backgroundColor: 'red',
                        }}>
                        <View>
                          <Text style={styles.checkboxText}>
                            {options.label}
                          </Text>
                        </View>

                        <CheckBox
                          key={`options.label_${index}`}
                          onPress={() => handleCheckboxChange(options.label)}
                          checked={selectedFilters.includes(options.label)}
                        />
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>

                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.submitButton}>
                  <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    //backgroundColor: 'red',
  },
  header: {
    height: verticalScale(48),
    width: scale(330),
    backgroundColor: '#FFFFFF',
    //backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',

    // marginBottom:verticalScale(22)
  },
  headerLeft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(79),
    flexDirection: 'row',
  },
  TitleContacts: {
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },
  headerRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: scale(66),
  },

  titleText: {
    // width: scale(130),
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },
  button: {
    width: scale(66),
    height: verticalScale(34),
    justifyContent: 'center',
    // alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
  // search container css
  // CSS For SearchContainer
  SearchContainer: {
    marginTop: verticalScale(15),
    height: verticalScale(50),
    width: scale(330),
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(6),
    alignSelf: 'center',
  },
  checkboxContainer: {
    alignSelf: 'center',
  },
  inputContainer: {
    width: scale(300),
    height: verticalScale(48),
    //backgroundColor: 'green',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    //paddingLeft: 15,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: scaleFont(12),
    color: '#727272',
    fontFamily: 'Inter-Regular',
  },
  // css for contact filter container
  contactFilterContainer: {
    marginTop: verticalScale(9),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(330),
    //height: verticalScale(34),
    backgroundColor: '#ffffff',
    // backgroundColor: 'blue',
    borderRadius: verticalScale(6),
  },
  innerView: {
    //backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(310),
    flexDirection: 'row',

    //height: verticalScale(34),
  },
  LeftView: {
    width: scale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    //height: verticalScale(34),
    flexDirection: 'row',
    //backgroundColor: 'red',
  },
  RightView: {
    flexDirection: 'row',
  },
  filterOptionText: {
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Medium',
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
  sortByOptionText: {
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Medium',
  },
  SortContainer: {
    // alignSelf: 'center',
    width: scale(130),
    alignSelf: 'flex-end',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    height: verticalScale(105),
    elevation: 4,
    marginTop: verticalScale(60),
  },
  sortOptionView: {
    // flex: 1,
    width: scale(113),
    // backgroundColor: 'green',
    alignSelf: 'center',
    height: verticalScale(95),
  },
  sortMenu: {
    marginTop: verticalScale(10),
  },
  textSortOptions: {
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Medium',
  },
  filterCategory: {
    // alignSelf: 'center',
    //flexDirection: 'row',
    // height: verticalScale(125),
  },
  categoryView: {
    width: scale(200),
    height: verticalScale(200),
    alignSelf: 'center',
    // marginTop: verticalScale(90),
    //backgroundColor: 'red',
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
    width: scale(25),
    height: verticalScale(10),
  },
  category: {
    //backgroundColor: 'green',
    width: scale(180),
    justifyContent: 'space-between',
    borderRadius: verticalScale(6),
    alignSelf: 'center',
    justifyContent: 'center',
    height: verticalScale(180),
  },
  //alignSelf: 'center',
  textCategory: {
    color: '#1D1D1D',
  },
  // css for contacts details and key
  contactsDetailsContainer: {
    marginTop: verticalScale(15),
    width: scale(330),
    alignSelf: 'center',
    backgroundColor: '#ffffff',
  },
  contactsView: {
    width: scale(320),
    //backgroundColor: 'green',
    height: verticalScale(50),
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LeftSideContainer: {
    //alignSelf: 'center',
    //alignItems: 'center',
    flexDirection: 'row',
    width: scale(150),
    justifyContent: 'space-between',
    //backgroundColor: 'blue',
  },
  contactInitial: {
    width: scale(31),
    height: verticalScale(31),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(6),
  },
  rightContainer: {
    //width: scale(122),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
  keyItem: {
    width: scale(60),
    height: verticalScale(20),
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(6),
  },
  textKey: {
    color: '#727272',
  },
});
export default Contacts;
