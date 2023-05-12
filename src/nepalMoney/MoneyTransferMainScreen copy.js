import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Image,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import RemitterDetails from './RemitterDetails';
import Transactions from './Transactions';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

import Navigation from '../MainNavigation/Navigation';
import {useState} from 'react';
const Tab = createMaterialTopTabNavigator();
const MoneyTransferMainScreen = props => {
  const [selected, setSelected] = useState(false);
  const handlePressTab = () => {
    setSelected(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* header container */}
      <View style={styles.header}>
        <View style={styles.headerView}>
          <TouchableOpacity style={{width: 30, height: 30}} activeOpacity={1}>
            <Icon name="angle-left" size={30} color={'#0033A1'} />
          </TouchableOpacity>
          <Text style={styles.titleText}>Money Transfer</Text>
        </View>
      </View>
      {/*  tab Container */}

      <View style={{flex: 1, width: scale(330), alignSelf: 'center'}}>
        <Tab.Navigator
          style={{}}
          screenOptions={{
            tabBarLabelStyle: {
              fontSize: scaleFont(12),
              fontFamily: 'Inter-Bold',
            },
            tabBarStyle: {
              backgroundColor: '#F5F7FB',
              borderRadius: verticalScale(6),
            },
            tabBarPressColor: 'white',
          }}>
          <Tab.Screen name="Remitter Details" component={RemitterDetails} />
          <Tab.Screen name="Transactions" component={Transactions} />
        </Tab.Navigator>
      </View>

      {/* Next Module */}
      {/* <TouchableOpacity
        onPress={() => props.navigation.navigate(ReportingMainScreen)}>
        <View style={styles.linkPreviousTxn}>
          <Text style={styles.prevTxnText}>Next Module</Text>
        </View>
      </TouchableOpacity> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    //backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    width: scale(300),
  },
  titleText: {
    width: scale(265),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  // cardHeader: {
  //   alignSelf: 'center',
  // },
  // cardTitle: {
  //   color: '#0033A1',
  //   alignSelf: 'center',
  //   width: scale(190),
  //   fontFamily: 'Inter-Bold',
  //   fontSize: scaleFont(24),
  // },
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
export default MoneyTransferMainScreen;
