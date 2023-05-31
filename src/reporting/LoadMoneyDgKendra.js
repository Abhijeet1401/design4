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
import DigiKendraMappingForm from './DigiKendraMappingForm';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  dark: true,
  // Add any additional dark theme configurations if needed
};

const iconItem1 = <Image source={require('./Images/avatar2.jpg')} />;
const iconItem2 = <Image source={require('./Images/avatar1.jpg')} />;
const iconItem3 = <Image source={require('./Images/avatar3.jpg')} />;
const iconItem4 = <Image source={require('./Images/avatar4.jpg')} />;

const data = [
  {
    id: 1,
    per: 'Vs last month',
    title: 'Today',
    amount: '₹867',
  },
  {
    id: 2,
    title: 'MTD',
    per: 'Vs last month',
    amount: '₹867',
  },
  {
    id: 3,
    title: 'LMT',
    per: 'Vs last month',
    amount: '₹867',
  },
  {
    id: 4,
    title: 'LMT',
    per: 'Vs last month',
    amount: '₹867',
  },
];
const data2 = [
  {
    id: 1,
    icon: iconItem2,
    kendra: 'Ahuja Paint Depo',
    propDetail: 'Linda Ahuja | 9801983438 ',
    Amount: '₹84,500',
  },
  {
    id: 2,
    icon: iconItem1,
    kendra: 'Ahuja Paint Depo',
    propDetail: 'Amal Ahuja | 9801983438 ',
    Amount: '₹4,500',
  },

  {
    id: 4,
    icon: iconItem3,
    kendra: 'Ahuja Paint Depo',
    propDetail: 'Prem Ahuja | 9801983438 ',
    Amount: '₹8,500',
  },

  {
    id: 5,
    icon: iconItem4,
    kendra: 'Ahuja Paint Depo',
    propDetail: ' Amal Ahuja | 9801983438 ',
    Amount: '₹5,500',
  },
  {
    id: 6,
    icon: iconItem4,
    kendra: 'Ahuja Paint Depo',
    propDetail: ' Amal Ahuja | 9801983438 ',
    Amount: '₹5,500',
  },
  {
    id: 7,
    icon: iconItem4,
    kendra: 'Ahuja Paint Depo',
    propDetail: ' Amal Ahuja | 9801983438 ',
    Amount: '₹5,500',
  },
];
const LoadMoneyDgKendra = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const handleTextInputAmount = Number => {
    setAmount(Number);
  };

  const handleTextInput2Amount = Number => {
    setAmount(Number);
  };
  // render Item1
  const renderItem = ({item}) => {
    return (
      <View style={styles.ReportContainer}>
        <View style={{height: verticalScale(146)}}>
          <View style={styles.reportView}>
            {/* Top View */}
            <View style={styles.topInfo}>
              <View style={{}}>
                <Icon3
                  name="arrow-up-circle"
                  color="green"
                  size={25}
                  style={styles.reportArrow}
                />
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: '#048848',
                    fontFamily: 'Inter-SemiBold',
                    fontSize: scaleFont(12),
                  }}>
                  34.7%
                </Text>
                <Text
                  style={{
                    fontSize: scaleFont(7),
                    fontFamily: 'Inter-SemiBold',
                    color: '#727272',
                  }}>
                  {item.per}
                </Text>
              </View>
            </View>
            {/* bottom View */}

            <View style={styles.bottomInfo}>
              <Text style={styles.bottomTextInfo}>{item.title}</Text>
              <Text style={styles.amountInfo}>{item.amount}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };
  // render Item 2

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
          <Text style={styles.titleText}>Reporting</Text>
        </View>
      </View>

      {/* Dg kendra Info Details */}
      <View style={styles.dginfoContainer}>
        <View style={styles.dgkDetails}>
          <Text style={styles.dgkName}>Ahuja Paint Depo</Text>
          <Text
            style={{color: '#727272', fontSize: scaleFont(11), lineHeight: 20}}>
            Prem Ahuja | UID No.- 307727
          </Text>
          <Text
            style={{
              color: '#727272',
              fontSize: scaleFont(11),
              flexDirection: 'row',
            }}></Text>
        </View>
        <View style={styles.dgkwalletContainer}>
          <View style={styles.walletView}>
            <Text
              style={{
                color: '#727272',
                fontSize: scaleFont(11),
                fontFamily: 'Inter-Regular',
              }}>
              Wallet Balance
            </Text>
            <View style={styles.walletAmtView}>
              <Text
                style={{
                  color: '#0033A1',
                  fontSize: scaleFont(18),
                  fontFamily: 'Inter-Bold',
                }}>
                ₹1,27,325.34
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Load Money  Container */}
      <ScrollView>
        <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
          <View style={styles.loadMoneyContainer}>
            <Text style={styles.topupTitle}>Top Up:</Text>
            <TextInput
              theme={theme}
              label="Amount"
              textColor="#1D1D1D"
              value={amount}
              keyboardType="numeric"
              onChange={handleTextInputAmount}
              mode="outlined"
              style={
                styles.textinputBox
                // backgroundColor: '#FFFFFF',
                // fontFamily: 'Inter-Medium',
              }
              activeOutlineColor="#1D1D1D"
            />

            <TextInput
              label="Confirm Amount"
              theme={theme}
              textColor="#1D1D1D"
              value={amount}
              keyboardType="numeric"
              onChange={handleTextInput2Amount}
              mode="outlined"
              style={
                styles.textinputBox
                // backgroundColor: '#FFFFFF',
                // fontFamily: 'Inter-Medium',
              }
              activeOutlineColor="#1D1D1D"
            />
          </View>

          {/* button */}
          <View style={styles.button}>
            <TouchableOpacity>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
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
    width: scale(110),
    //backgroundColor: 'green',
    //width: '70%',
    flexDirection: 'row',
  },

  titleText: {
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },

  dginfoContainer: {
    width: scale(330),
    alignSelf: 'center',
    borderRadius: verticalScale(12),
    height: verticalScale(140),

    backgroundColor: '#F5F7FB',
  },
  dgkDetails: {
    marginTop: verticalScale(13),
    alignSelf: 'center',
    width: scale(300),
    fontFamily: 'Inter-Bold',
  },
  dgkName: {
    color: '#1D1D1D',
    fontSize: scaleFont(16),
  },
  dgkwalletContainer: {
    marginTop: verticalScale(9),
    alignSelf: 'center',
    width: scale(300),
    backgroundColor: '#FFFFFF',
    height: verticalScale(60),
    borderRadius: verticalScale(6),
  },
  walletView: {
    height: verticalScale(60),
    width: scale(270),
    alignSelf: 'center',
    marginTop: verticalScale(8),
  },
  walletAmtView: {
    //height: verticalScale(0),
    width: scale(270),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    color: '#727272',
    fontFamily: 'Inter-Regular',
  },
  ReportContainer: {
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportView: {
    width: scale(135),
    height: verticalScale(146),
    borderRadius: verticalScale(8),
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    alignSelf: 'center',
  },
  topInfo: {
    marginTop: verticalScale(13),
    //height: verticalScale(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(110),
  },
  reportArrow: {
    transform: [{rotate: '45deg'}],
  },
  bottomInfo: {
    marginTop: verticalScale(49),
    width: scale(110),
  },
  bottomTextInfo: {
    color: '#1D1D1D',
    fontSize: scaleFont(11),
    fontFamily: 'Inter-Regular',
  },
  amountInfo: {
    color: '#0033A1',
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
  },
  topupTitle: {
    color: '#727272',
    font: scaleFont(12),
    fontFamily: 'Inter-SemiBold',
    marginTop: verticalScale(25),
  },
  loadMoneyContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    //marginTop: verticalScale(38),
  },
  textinputBox: {
    marginTop: verticalScale(13),
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter-Medium',
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(173),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
});
export default LoadMoneyDgKendra;
