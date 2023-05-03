import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
  Dimensions,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const data = [
  {
    id: 1,
    bankName: 'Amex Gold',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '-94,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 2,
    bankName: 'ICICI Amazon',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 3,
    bankName: 'HDFC first Signature',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 4,
    bankName: 'Amex Platinum',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '14,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Success',
  },
  {
    id: 5,
    bankName: 'ICICI Amazon',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '14,500',
    Date: '13/04/22 | 17:24:50',
    time: '17:24:50',
    status: 'Failed',
  },
  {
    id: 6,
    bankName: 'Amex Gold',
    cardNumber: 'XXX 395',
    TransanctionID: '89983689658765',
    Amount: '-4,500',
    Date: '13/04/22 | 17:24:50',
    status: 'Pending',
  },
];

const PreviousTransanctions = props => {
  const [text, setText] = useState('');
  const [text2, setText2] = useState('');

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
        <TouchableOpacity activeOpacity={1}>
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
                {item.bankName}
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
              {item.cardNumber}
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
                {item.TransanctionID}
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
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              name="angle-left"
              size={30}
              color={'#0033A1'}
              //style={{width: scale(20)}}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Credit Card Bills Pay</Text>
        </View>
      </View>
      {/* header Ends */}
      {/*  credit Cards Images Container */}
      <View style={styles.CategoryContainer}>
        <View
          style={
            styles.creditCardInformation
            // width: scale(270),
            // alignSelf: 'center',
            // height: verticalScale(156),
            // flexDirection: 'row',
            // justifyContent: 'space-between',
          }>
          <View style={styles.cardInfoContainer}>
            <Text style={styles.cardInfoTitle}>
              Pay your{'\n'}Credit Card Bills Here:
            </Text>
            <View>
              <Text style={styles.cardInfo}>
                All Visa, MasterCard, RuPay, American Express and Diners credit
                cards accepted.
              </Text>
            </View>
          </View>

          <View style={styles.CreditCardImage}>
            <Image
              source={require('./Images/CreditCardImages.png')}
              style={{width: 158, height: 176}}
            />
          </View>
        </View>
      </View>

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
          <View style={styles.search2View}>
            <TextInput
              onChange={txt => setText2(txt)}
              value={text2}
              placeholderTextColor={'#727272'}
              style={styles.textInput}
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
        </View>
        <View>
          <TouchableOpacity activeOpacity={1}>
            <Icon3 name="filter" style={styles.filter} size={25} />
          </TouchableOpacity>
        </View>
      </View>

      {/* search container 2 Ends Here */}
      {/* data */}

      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={data => data.id}
        />
      </View>
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
    //backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(190),
    // backgroundColor: 'red',
  },

  titleText: {
    width: scale(158),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    //backgroundColor: 'blue',
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
    height: verticalScale(156),
    marginTop: verticalScale(20),
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(12),
    alignSelf: 'center',

    // paddingBottom: verticalScale(10),
  },
  creditCardInformation: {
    width: scale(270),
    alignSelf: 'center',
    height: verticalScale(156),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardInfoTitle: {
    width: scale(151),
    marginTop: verticalScale(33),
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Bold',
    color: '#0033A1',
  },
  cardInfo: {
    marginTop: verticalScale(9),
    width: scale(151),
    color: '#727272',
    fontSize: scaleFont(11),
    fontFamily: 'Inter-SemiBold',
    height: verticalScale(150),
    lineHeight: 18,
  },
  CreditCardImage: {
    //height: verticalScale(156),
    alignSelf: 'center',
    width: scale(190),
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

  // CSS FOR Check Voucher  Balance Container
  // voucherFrame: {
  //   justifyContent: 'space-between',
  //   marginTop: verticalScale(10),
  //   alignItems: 'center',
  //   //  marginLeft: 15,
  //   width: scale(328),
  //   height: verticalScale(48),
  //   alignSelf: 'center',
  //   backgroundColor: '#F5F7FB',
  //   //backgroundColor: 'green',
  //   borderRadius: verticalScale(6),
  // },
  // CheckVoucherContainer: {
  //   height: verticalScale(48),
  //   width: scale(288),
  //   flexDirection: 'row',
  //   alignSelf: 'center',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // rightArrow: {
  //   color: '#0033A1',
  // },
  // textVoucher: {
  //   fontSize: verticalScale(12),
  //   fontFamily: 'Inter-Medium',
  //   color: '#0033A1',
  // },
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
});

export default PreviousTransanctions;
