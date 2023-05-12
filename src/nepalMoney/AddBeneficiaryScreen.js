import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
} from 'react-native';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CashTransfer from './CashTransfer';
import BankTransfer from './BankTransfer';
const Tab = createMaterialTopTabNavigator();
function MyTabBar(props) {
  const navigation = useNavigation();

  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        activeOpacity={1}
        style={{
          width: scale(317),
          height: verticalScale(48),
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <MaterialIcons style={styles.topBarIcon} name="arrow-back-ios" />
        <View
          style={{
            width: scale(294),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: scaleFont(18),
              fontFamily: 'Inter-Medium',
              color: '#0033A1',
            }}>
            Add Beneficiary
          </Text>
        </View>
      </TouchableOpacity>
      <View style={styles.titlePaymentMode}>
        <Text style={styles.textPaymenMode}>Payment Mode</Text>
      </View>
      <View style={styles.headView}>
        {props.val.state.routes.map((route, index) => {
          const {options} = props.val.descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = props.val.state.index === index;

          const onPress = () => {
            const event = props.val.navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              props.val.navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            props.val.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}>
              <View
                style={{
                  width: scale(114),
                  height: verticalScale(25),
                  alignItems: 'center',
                  backgroundColor: isFocused ? '#0033A1' : '#F6FAFD',
                  justifyContent: 'center',
                  borderRadius: verticalScale(6),
                  marginRight: scale(11),
                }}>
                <Text
                  style={{
                    color: isFocused ? '#ffffff' : '#222',
                    fontFamily: 'Inter-Medium',
                    fontSize: scaleFont(12),
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
export default function AddBeneficiaryScreen(value) {
  return (
    <Tab.Navigator
      style={{backgroundColor: 'white'}}
      tabBar={props => <MyTabBar val={props} val1={value} />}>
      <Tab.Screen
        name="new"
        component={CashTransfer}
        options={{tabBarLabel: 'Cash Transfer'}}
      />
      <Tab.Screen
        name="Already"
        component={BankTransfer}
        options={{tabBarLabel: 'Bank Transfer'}}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  topBarIcon: {
    fontSize: scaleFont(20),
    color: '#0033A1',
  },
  headView: {
    flexDirection: 'row',
    marginTop: verticalScale(19),
    width: scale(297),
    // justifyContent: 'space-between',
    alignSelf: 'center',
  },
  titlePaymentMode: {
    marginLeft: scaleFont(31),
    width: scale(78),
  },
  textPaymenMode: {
    fontSize: scaleFont(10),
    fontFamily: 'Inter-Medium',
    color: '#868686',
  },
  headTab: {
    alignItems: 'center',
    borderBottomWidth: verticalScale(2),
    borderBottomLeftRadius: verticalScale(3),
    width: scale(164),
    height: verticalScale(37),
    justifyContent: 'center',
  },
});
