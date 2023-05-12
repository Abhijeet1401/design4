import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Image,
  StatusBar,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon5 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

import Navigation from '../MainNavigation/Navigation';
import {useState} from 'react';
import AddBeneficiaryScreen from './AddBeneficiaryScreen';

const data = [
  {
    id: 1,
    BeneficiartName: 'Amit Singh',
    bankName: 'THE MAHARASHTRA MANTRALAYA',
    AccountNum: '87465738695748',
    Mode: 'Mode : Bank Transfer',
  },
  {
    id: 2,
    BeneficiartName: 'Hritik Singh',
    Mode: 'Mode : Cash Transfer',
  },

  {
    id: 3,
    BeneficiartName: 'Shashank kumar',
    bankName: 'State Bank of India',
    AccountNum: '87465738695748',
    Mode: 'Mode : Bank Transfer',
  },

  {
    id: 4,
    BeneficiartName: 'Amit kumar',
    bankName: 'State Bank of India',
    AccountNum: '87465738695748',
    Mode: 'Mode : Cash Transfer',
  },
  {
    id: 5,
    BeneficiartName: 'Amit kumar',
    bankName: 'State Bank of India',
    AccountNum: '87465738695748',
    Mode: 'Mode : Cash Transfer',
  },
  {
    id: 6,
    BeneficiartName: 'Amit kumar',
    bankName: 'State Bank of India',
    AccountNum: '87465738695748',
    Mode: 'Mode : Bank Transfer',
  },
  {
    id: 7,
    BeneficiartName: 'Amit kumar',
    bankName: 'State Bank of India',
    AccountNum: '87465738695748',
    Mode: 'Mode : Bank Transfer',
  },
];

const BeneficiaryListScreen = ({navigation}) => {
  // render Item1
  const renderItem = ({item}) => {
    return (
      <View style={styles.RemitterDetailsContainer}>
        <View style={styles.remitterView}>
          {/* Left View */}
          <View style={styles.LeftSideContainer}>
            <View style={{flexDirection: 'column', justifyContent: 'center'}}>
              <Text
                style={{
                  color: '#1D1D1D',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Bold',
                  lineHeight: verticalScale(16),
                }}>
                {item.BeneficiartName}
              </Text>
              <Text
                style={{
                  color: '#727272',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-SemiBold',
                  lineHeight: verticalScale(16),
                }}>
                {item.bankName}
              </Text>
              <Text
                style={{
                  color: '#727272',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-SemiBold',
                  lineHeight: verticalScale(16),
                }}>
                {item.AccountNum}
              </Text>
              <Text
                style={{
                  color: '#0033A1',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-Regular',
                  lineHeight: verticalScale(16),
                }}>
                {item.Mode}
              </Text>
            </View>
          </View>

          {/* right View */}
          <TouchableOpacity>
            <View style={styles.transferView}>
              <Text style={styles.textTransfer}>Transfer</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.border}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* header container */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Money Transfer</Text>
        </View>
        {/* header Right */}
        <View style={styles.headerRight}>
          <TouchableOpacity>
            {/* <Icon3
              name="headset"
              style={styles.icon}
              size={25}
              color="#0033A1"
            /> */}

            <Image source={require('../nepalMoney/Images/headerIcon1.png')} />
          </TouchableOpacity>

          <Image
            source={require('../nepalMoney/Images/currency_exchange.png')}
          />
        </View>
      </View>

      <View style={styles.remitterInfoinfoContainer}>
        <View style={styles.remitterInnerinfoView}>
          {/* top View */}
          <View style={styles.remitterTopinfoView}>
            <View>
              <View style={styles.remitterNameNum}>
                <Text style={styles.textName}>Hi, Rajesh Kashyap</Text>
                <Icon5 name="pencil" size={15} color={'#0033A1'} />
              </View>
              <Text style={styles.texNum}>9810983647</Text>
            </View>
            {/* nepal Flag */}
            <View style={styles.remitterCountryInfo}>
              <Image
                source={require('../nepalMoney/Images/NepalFlag.png')}
                style={{width: scale(22), height: verticalScale(27)}}
              />
            </View>
          </View>
          {/* Bottom View */}
          <View style={styles.remitterBottominfoView}>
            <View
              style={{
                width: scale(300),
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={styles.txnCountView}>
                <Text style={styles.textTxnCount}>
                  Remaining Transaction{'\n'} Count
                </Text>
              </View>
              {/* status */}
              <View style={styles.txnStatusContainer}>
                <View>
                  <Text style={styles.textTxnPerioed}>Today</Text>
                  <Text style={styles.textCountNum}>01</Text>
                </View>
                <View>
                  <Text style={styles.textTxnPerioed}>Month</Text>
                  <Text style={styles.textCountNum}>02</Text>
                </View>
                <View>
                  <Text style={styles.textTxnPerioed}>Year</Text>
                  <Text style={styles.textCountNum}>06</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* data */}

      {/* Button container */}
      <View style={styles.buttonContainer}>
        <View style={styles.btnSearchView}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate(AddBeneficiaryScreen)}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Beneficiary</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.searchIcon}>
            <Icon2 name="search" size={30} color="#0033A1" />
          </View>
        </View>
      </View>
      {/* data */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    height: verticalScale(48),
    width: scale(330),
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',

    // marginBottom:verticalScale(22)
  },
  headerLeft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(145),
    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  headerRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: scale(60),
  },

  titleText: {
    // width: scale(130),
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },

  remitterInfoinfoContainer: {
    width: scale(330),
    alignSelf: 'center',
    borderRadius: verticalScale(12),
    height: verticalScale(160),
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
  },
  remitterInnerinfoView: {
    alignSelf: 'center',
    height: verticalScale(126),
    //backgroundColor: 'red',
    width: scale(300),
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  remitterTopinfoView: {
    width: scale(300),
    // backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  remitterNameNum: {
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(160),
    flexDirection: 'row',
  },
  textName: {
    color: '#1D1D1D',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Medium',
  },
  texNum: {
    color: '#1D1D1D',
    fontSize: scaleFont(16),
    lineHeight: verticalScale(20),
    fontFamily: 'Inter-Bold',
  },
  remitterBottominfoView: {
    width: scale(300),
    // backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  txnCountView: {
    width: scale(90),
    flexDirection: 'row',
  },
  textTxnCount: {
    color: '#868686',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Regular',
  },
  txnStatusContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignSelf: 'center',
    width: scale(210),
    // backgroundColor: 'white',
  },
  textCountNum: {
    color: '#0033A1',
    alignSelf: 'center',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Bold',
  },
  textTxnPerioed: {
    fontSize: scaleFont(10),
    color: '#868686',
  },

  buttonContainer: {
    alignSelf: 'center',
    marginTop: verticalScale(19),
    flexDirection: 'row',
    // backgroundColor: 'red',
    width: scale(330),
    height: verticalScale(44),
  },
  btnSearchView: {
    justifyContent: 'space-between',
    width: scale(325),
    flexDirection: 'row',
  },
  searchIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F7FB',
    width: scale(44),
    borderRadius: verticalScale(6),
  },

  button: {
    width: scale(275),
    height: verticalScale(44),
    justifyContent: 'center',
    //alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    // marginBottom: verticalScale(15),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
  RemitterDetailsContainer: {
    marginTop: verticalScale(10),
    width: scale(330),
    alignSelf: 'center',
    height: verticalScale(72),
  },
  LeftSideContainer: {
    width: scale(190),
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  remitterView: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scale(308),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  transferView: {
    width: scale(81),
    height: verticalScale(22),
    backgroundColor: '#F5F7FB',
    justifyContent: 'center',
    borderRadius: verticalScale(6),
  },
  textTransfer: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(12),
    textAlign: 'center',
    color: '#0033A1',
  },
  border: {
    width: scale(310),
    marginTop: verticalScale(8),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },
});
export default BeneficiaryListScreen;
