import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  Dimensions,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon6 from 'react-native-vector-icons/FontAwesome5';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';
import {Ionicons} from '@expo/vector-icons';
import CheckVoucherBalanceForm from './CheckVoucherBalanceFormModal';
import Transanction from './TransanctionModal';
import FilterTransanction from './FilterTransanction';
import IconsList from './IconsList';
import Vouchers from './FashionLifeStyleScreen';
import SearchTransanctionModal from './SearchTransanctionModal';
import {ScrollView} from 'react-native-virtualized-view';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import CheckVoucherBalanceFormModal from './CheckVoucherBalanceFormModal';
const data = [
  {
    id: 1,
    TxnID: '87465738695748',
    name: 'Ramesh Gupta',
    VoucherName: 'Myntra',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 2,
    name: 'Ramesh Gupta',
    VoucherName: 'Myntra',
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 3,
    TxnID: '87465738695748',
    VoucherName: 'Myntra',
    name: 'Ramesh Gupta',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 4,
    TxnID: '87465738695748',
    VoucherName: 'Myntra',
    name: 'Ramesh Gupta',
    Amount: '4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 5,
    TxnID: '87465738695748',
    VoucherName: 'Myntra',
    Amount: '4,500',
    name: 'Ramesh Gupta',
    Date: '13/04/22 | 17:24:50',
    time: '17:24:50',
    status: 'Failed',
  },
  {
    id: 6,
    TxnID: '87465738695748',
    VoucherName: 'Myntra',
    Amount: '-4,500',
    name: 'Ramesh Gupta',
    Date: '13/04/22 | 17:24:50',
    status: 'Pending',
  },
];

const BrandVoucherMainScreen = props => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');
  const [showAllMenu, setShowAllMenu] = useState(false);
  // const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);

  const handleMoreIcons = () => {
    setShowAllMenu(true);
  };
  const handleLessIcons = () => {
    setShowAllMenu(false);
  };

  const getStatusColor = status => {
    return status === 'Success'
      ? '#00C337'
      : status === 'Failed'
      ? '#ff0000'
      : status === 'Pending'
      ? '#ffa500'
      : 'black';
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.Cards}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsModal3Open(true)}>
          <View style={styles.row}>
            <View style={styles.column}>
              {/* <Text
                style={{
                  color: 'red',
                  // fontWeight: 'bold',
                  fontSize: scaleFont(12),
                  fontFamily: 'Inter-Regular',
                }}>
                {item.OrderId}
              </Text> */}
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: '#1D1D1D',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Bold',
                }}>
                {item.TxnID}
              </Text>
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: '#1D1D1D',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Bold',
                }}>
                {item.Amount}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text
              style={{
                color: '#727272',
                fontFamily: 'Inter-Medium',
                fontSize: scaleFont(11),
                // marginLeft: 2,
                // marginTop: 2,
              }}>
              {item.name}
            </Text>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: '#727272',
                  fontFamily: 'Inter-Medium',
                  fontSize: scaleFont(11),
                }}>
                {item.Date}
              </Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.column]}>
              <Text
                style={{
                  color: '#727272',
                  fontFamily: 'Inter-Medium',
                  fontSize: scaleFont(11),
                }}>
                {item.VoucherName}
              </Text>
              {/* <Text style={{color: 'black', opacity: 0.5}}>{item.Date}</Text> */}
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  fontFamily: 'Inter-Medium',
                  color: getStatusColor(item.status),
                  fontSize: scaleFont(11),
                }}>
                {item.status}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.border}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* header */}
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* Header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerView}>
          <Icon
            name="angle-left"
            size={30}
            color={'#0033A1'}
            //style={{width: scale(20)}}
          />
          <Text style={styles.titleText}>Brand Voucher</Text>
        </View>
        <Icon name="rupee" size={25} color="#048848" />
      </View>
      {/* header Ends */}

      {/* Search container */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.SearchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              onChange={txt => setText(txt)}
              value={text}
              placeholderTextColor={'#727272'}
              style={
                styles.textInput
                // flex: 1,
                // fontSize: scaleFont(12),
                // color: '#727272',
                // fontFamily: 'Inter-Regular',
              }
              placeholder="Search for Voucher"
            />
            <Icon
              name="search"
              style={{
                color: '#1D1D1D',
              }}
              size={20}
            />
          </View>
        </View>
        {/* Search container Ends  */}

        {/* Icons Category Container */}
        <View style={styles.CategoryContainer}>
          <View style={styles.selectCateogory}>
            <Text style={styles.categoryTitle}>Select By Category</Text>
          </View>
          {/* icon */}
          <View style={styles.iconWrap}>
            {!showAllMenu && (
              <View>
                <View style={styles.rowContainer}>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon5
                        name="ondemand-video"
                        size={30}
                        // color={'grey'}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.iconText}>Movies & Shows</Text>
                    </View>
                  </View>

                  <View style={styles.iconBox}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => props.navigation.navigate(Vouchers)}>
                      <Icon4 name="hanger" size={30} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Fashion & Lifestyle</Text>
                  </View>

                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="wallet-giftcard"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Physical Brand</Text>
                  </View>

                  <View style={{width: '20%', margin: 7}}>
                    <TouchableOpacity
                      onPress={handleMoreIcons}
                      activeOpacity={1}>
                      <Icon5
                        name="dashboard-customize"
                        size={30}
                        style={
                          styles.moreIcon
                          // backgroundColor: '#4E74C7',
                          // color: '#FFFFFF',
                          // elevation: 4,
                          // justifyContent: 'center',
                          // alignSelf: 'center',
                          // padding: verticalScale(15),
                          // marginBottom: 4,
                          // borderRadius: 8,
                          // transform: [
                          //   {
                          //     rotate: '270deg',
                          //   },
                          // ],
                        }
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>More</Text>
                  </View>

                  {/*  showing More Icons */}
                </View>
              </View>
            )}
            {showAllMenu && (
              <View style={{marginTop: 30}}>
                <View style={styles.rowContainer}>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon5
                        name="ondemand-video"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <View>
                      <Text style={styles.iconText}>Movies & Shows</Text>
                    </View>
                  </View>

                  <View style={styles.iconBox}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={() => props.navigation.navigate(Vouchers)}>
                      <Icon4 name="hanger" size={30} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Fashion & Lifestyle</Text>
                  </View>

                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="wallet-giftcard"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Physical Brand</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="shopping-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Grocery</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon6
                        name="capsules"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Health & Beauty</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="diamond-stone"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Jewellery</Text>
                  </View>

                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="star-check-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Luxury</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="cart-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Online Shopping</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="tag-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Retail</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="youtube-subscription"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Subscribe</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="bread-slice-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Food&{'\n'}Beverages</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="airplane"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Travel & Leisure</Text>
                  </View>
                  <View style={styles.iconBox}>
                    <TouchableOpacity activeOpacity={1}>
                      <Icon4
                        name="flower-tulip-outline"
                        size={30}
                        style={styles.iconStyle}
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Wellness</Text>
                  </View>
                  <View style={{width: '20%', margin: 7}}>
                    <TouchableOpacity
                      activeOpacity={1}
                      onPress={handleLessIcons}>
                      <Icon5
                        name="dashboard-customize"
                        size={30}
                        style={
                          styles.lessIcon
                          // backgroundColor: '#4E74C7',
                          // color: 'white',
                          // elevation: 2,
                          // justifyContent: 'center',
                          // alignSelf: 'center',
                          // padding: verticalScale(15),
                          // marginBottom: verticalScale(4),
                          // borderRadius: verticalScale(6),
                          // transform: [
                          //   {
                          //     rotate: '270deg',
                          //   },
                          // ],
                        }
                      />
                    </TouchableOpacity>
                    <Text style={styles.iconText}>Less</Text>
                  </View>

                  {/*  showing More Icons Ends */}
                </View>
              </View>
            )}
          </View>
        </View>
        {/* icons list end */}

        {/* frame 2 check voucher balance */}
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            setIsModal2Open(true);
            // props.navigation.navigate(CheckVoucherBalanceForm);
          }}>
          <View style={styles.voucherFrame}>
            <View style={styles.CheckVoucherContainer}>
              <Text style={styles.textVoucher}>Check Voucher Balance</Text>

              <Icon5 name="arrow-forward" size={20} style={styles.rightArrow} />
            </View>
          </View>
        </TouchableOpacity>
        {/* opening modal CheckVoucherBalanceForm */}
        {isModal2Open && (
          <CheckVoucherBalanceFormModal
            visible={isModal2Open}
            onClose={() => setIsModal2Open(false)}
            //  statusbar={StatusBar}
          />
        )}
        {/* closing modal CheckVoucherBalanceForm */}
        {/* search container 2 */}
        <View style={styles.border}></View>
        <View style={styles.searchContainer2}>
          <View
            style={
              styles.search2MainView
              // width: scale(283),
              // borderRadius: verticalScale(6),
              // alignSelf: 'center',
              // alignItems: 'center',
              // backgroundColor: '#F5F7FB',
            }>
            <View
              style={
                styles.search2View
                // height: verticalScale(50),
                // flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'space-between',
                // width: scale(247),
                // alignSelf: 'center',
              }>
              <TextInput
                onChange={txt => setText2(txt)}
                value={text2}
                placeholderTextColor={'#727272'}
                style={
                  styles.textInput
                  // flex: 1,
                  // fontSize: scaleFont(12),
                  // color: '#1D1D1D',
                  // fontFamily: 'Inter-Medium',
                }
                placeholder="Search (set date for past transanctions)"
              />
              <Icon
                name="search"
                style={{
                  color: '#404040',
                }}
                size={20}
              />
            </View>
            {/* filter  */}
            {/* <TouchableOpacity>
              <Icon
                name="search"
                style={{
                  color: '#404040',
                  // marginRight: 25,
                  // marginTop: 15,
                }}
                size={20}
              />
            </TouchableOpacity> */}
          </View>
          <View>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setIsModalOpen(true)}>
              <Icon3 name="filter" style={styles.filter} size={25} />
            </TouchableOpacity>
          </View>
        </View>

        {/* search container 2 Ends Here */}
        {/* data */}

        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />
      </ScrollView>
      {isModalOpen && (
        <SearchTransanctionModal
          visible={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          //  statusbar={StatusBar}
        />
      )}
      {isModal3Open && (
        <Transanction
          visible={isModal3Open}
          onClose={() => setIsModal3Open(false)}
          //  statusbar={StatusBar}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  // CSS For Header
  headerContainer: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(160),
  },

  titleText: {
    width: scale(128),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  // CSS For SearchContainer
  SearchContainer: {
    marginTop: verticalScale(15),
    height: verticalScale(50),
    width: scale(330),
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(12),
    alignSelf: 'center',
  },
  inputContainer: {
    width: scale(300),
    height: verticalScale(50),
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
  // Select by category Container
  CategoryContainer: {
    width: scale(330),
    marginTop: verticalScale(20),
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(12),
    alignSelf: 'center',
    // paddingBottom: verticalScale(10),
  },
  selectCateogory: {
    // backgroundColor: 'blue',
    //height: verticalScale(36),
  },
  categoryTitle: {
    width: scale(295),
    paddingTop: verticalScale(13),
    alignSelf: 'center',
    alignItems: 'center',
    color: '#1D1D1D',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(12),
  },
  moreIcon: {
    backgroundColor: '#4E74C7',
    color: '#FFFFFF',
    elevation: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: verticalScale(15),
    marginBottom: 4,
    borderRadius: 8,
    transform: [
      {
        rotate: '270deg',
      },
    ],
  },
  lessIcon: {
    backgroundColor: '#4E74C7',
    color: 'white',
    elevation: 2,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: verticalScale(15),
    marginBottom: verticalScale(4),
    borderRadius: verticalScale(6),
    transform: [
      {
        rotate: '270deg',
      },
    ],
  },
  iconWrap: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  // CSS FOR Check Voucher  Balance Container
  voucherFrame: {
    justifyContent: 'space-between',
    marginTop: verticalScale(10),
    alignItems: 'center',
    //  marginLeft: 15,
    width: scale(328),
    height: verticalScale(48),
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    //backgroundColor: 'green',
    borderRadius: verticalScale(6),
  },
  CheckVoucherContainer: {
    height: verticalScale(48),
    width: scale(288),
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightArrow: {
    color: '#0033A1',
  },
  textVoucher: {
    fontSize: verticalScale(12),
    fontFamily: 'Inter-Medium',
    color: '#0033A1',
  },
  // search Container Second css
  searchContainer2: {
    //backgroundColor: 'red',
    marginTop: verticalScale(15),
    width: scale(330),
    height: verticalScale(48),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  search2MainView: {
    width: scale(283),
    borderRadius: verticalScale(6),
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F7FB',
  },
  search2View: {
    height: verticalScale(50),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(247),
    alignSelf: 'center',
  },
  filter: {
    width: scale(30),
    flexDirection: 'row',
    color: '#0033A1',
  },

  // CSS for Transanction Cards
  Cards: {
    marginTop: verticalScale(20),
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: scale(324),
  },
  row: {
    paddingTop: verticalScale(2),
    alignItems: 'center',
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  border: {
    width: scale(325.8),
    marginTop: verticalScale(15),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },

  // container2: {
  //   //flex: 1,
  //   width: '100%',
  //   flexDirection: 'column',
  //   alignItems: 'flex-start',
  //   paddingHorizontal: verticalScale(10),
  // },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  // iconContainer3: {
  //   alignItems: 'center',
  //   paddingHorizontal: verticalScale(8),
  //   paddingVertical: verticalScale(5),
  //   fontSize: 10,
  //   marginTop: 5,
  // },
  // buttonContainer3: {
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginTop: 7,
  // },
  label: {
    fontSize: scaleFont(12),
    marginTop: verticalScale(5),
  },
  rowContainer: {
    width: '100%',
    flexWrap: 'wrap',
    display: 'flex',
    flexDirection: 'row',
    margin: verticalScale(2),
    //alignSelf:'center',
  },
  iconBox: {
    width: '20%',
    margin: 7,
  },
  iconStyle: {
    color: 'grey',
    backgroundColor: '#FFFFFF',
    elevation: 4,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    padding: verticalScale(15),
    borderRadius: verticalScale(6),
    marginBottom: verticalScale(4),
  },
  iconText: {
    textAlign: 'center',
    width: '100%',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Medium',
    color: '#1D1D1D',
    letterSpacing: 0.05,
  },
});
export default BrandVoucherMainScreen;
