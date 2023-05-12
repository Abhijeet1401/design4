import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Image,
  StatusBar,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Octicons';
import Icon6 from 'react-native-vector-icons/Feather';

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
import ReportDigiKendra from '../reporting/ReportDigiKendra';
import MoneyTransferMainScreen from '../nepalMoney/MoneyTransferMainScreen';

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
const ReportingMainScreen = ({navigation}) => {
  const [text2, setText2] = useState('');

  // render Item1
  const renderItem = ({item}) => {
    return (
      <View style={styles.ReportContainer}>
        <View style={{height: verticalScale(146)}}>
          <View style={styles.reportView}>
            {/* Top View */}
            <View style={styles.topInfo}>
              <View
                style={{
                  width: scale(20),
                  height: scale(20),
                  backgroundColor: '#0488484C',
                  borderRadius: 10,
                }}>
                <View>
                  <Icon6
                    name="arrow-up-right"
                    color="#048848"
                    size={20}
                    style={styles.reportArrow}
                  />
                </View>
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
  const renderItem2 = ({item}) => {
    return (
      <View style={styles.ReportingDetailsContainer}>
        <View style={styles.reportingView}>
          {/* Left View */}
          <View style={styles.LeftSideContainer}>
            <View style={styles.dgkProfile}>
              <Text style={{height: 80}}>{item.icon}</Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#1D1D1D',
                  fontSize: scaleFont(14),
                  fontFamily: 'Inter-Bold',
                }}>
                {item.kendra}
              </Text>
              <Text
                style={{
                  color: '#727272',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-SemiBold',
                }}>
                {item.propDetail}
              </Text>
              <Text
                style={{
                  color: '#0033A1',
                  fontSize: scaleFont(16),
                  fontFamily: 'Inter-Bold',
                }}>
                {item.Amount}
              </Text>
            </View>
          </View>

          {/* right View */}
          <TouchableOpacity
            onPress={() => navigation.navigate(ReportDigiKendra)}>
            <Icon3 name="chevron-right" size={30} color={'#1D1D1D'} />
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
          <TouchableOpacity>
            <Icon
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Reporting (89)</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity>
            <View
              style={{
                width: scale(20),
                alignItems: 'center',
              }}>
              <Icon5 name="download" size={25} color="#0033A1" />
            </View>
            {/* <Image
              source={require('./Images/download.jpg')}
              style={{width: 15, height: 20}}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate(DigiKendraMappingForm)}>
            <View>
              {/* <Text style={styles.iconAdd}>
                <Icon2 name="add-box" size={35} color="#0033A1" /> 
              </Text> */}
              <Image
                source={require('./Images/addBtn.jpg')}
                style={{width: 36, height: 35}}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Flatlist moving datas */}
      <View
        style={{
          height: verticalScale(180),
          width: scale(330),
          alignSelf: 'center',
        }}>
        <FlatList
          horizontal={true}
          renderItem={renderItem}
          data={data}
          keyExtractor={item => item.id}
        />
      </View>
      {/* Search Container*/}
      <View style={styles.searchContainer2}>
        <View style={styles.search2MainView}>
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
            <Icon6 name="filter" style={styles.filter} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Reporting details Container */}
      <View style={{flex: 1}}>
        <FlatList
          ListFooterComponent={false}
          renderItem={renderItem2}
          data={data2}
          keyExtractor={item => item.id}
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate(MoneyTransferMainScreen)}>
        <View style={styles.linkPreviousTxn}>
          <Text style={styles.prevTxnText}>Next Module</Text>
        </View>
      </TouchableOpacity>
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
    //backgroundColor: 'green',
    //width: '70%',
    flexDirection: 'row',
  },
  headerRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: scale(70),
  },
  titleText: {
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },
  icon: {},

  // Search Container CSS
  searchContainer2: {
    marginTop: verticalScale(25),
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
  textInput: {
    flex: 1,
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    color: '#727272',
    fontFamily: 'Inter-Regular',
  },
  ReportContainer: {
    alignItems: 'center',
    paddingRight: scale(11),
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportView: {
    width: scale(140),
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
    alignSelf: 'center',
    //transform: [{rotate: '45deg'}],
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
  // ReportingDetailsContainer
  ReportingDetailsContainer: {
    marginTop: verticalScale(15),
    width: scale(330),
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  reportingView: {
    width: scale(300),
    height: verticalScale(72),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LeftSideContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scale(150),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  dgkProfile: {
    width: scale(70),
    //height: verticalScale(100),
    //alignItems: 'center',
    //backgroundColor: 'grey',
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
  linkPreviousTxn: {
    marginTop: verticalScale(30),
    alignSelf: 'center',
  },
  prevTxnText: {
    fontFamily: 'Inter-Bold',
    color: '#0033A1',
    textDecorationLine: 'underline',
  },
});
export default ReportingMainScreen;
