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
import RemitterDetails from './RemitterDetails';
import Transactions from './Transactions';
const Tab = createMaterialTopTabNavigator();
function MyTabBar(props) {
  const navigate = useNavigation();
  // const handleGetaNewHomeModal = () => {
  //   props.val1.name ? props.val1.seter(false) : props.val1.seter(true);
  // };
  return (
    <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <TouchableOpacity
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
              Money Transfer
            </Text>
          </View>
        </TouchableOpacity>
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
                onLongPress={onLongPress}
                style={{flex: 1}}>
                <View
                  style={[
                    styles.headTab,
                    {borderBottomColor: isFocused ? '#0133a1' : 'white'},
                  ]}>
                  <Text
                    style={{
                      color: isFocused ? '#0133a1' : '#222',
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
    </TouchableOpacity>
  );
}
export default function GetNewCardHome(value) {
  return (
    <Tab.Navigator
      style={{backgroundColor: 'white'}}
      tabBar={props => <MyTabBar val={props} val1={value} />}>
      <Tab.Screen
        name="new"
        component={RemitterDetails}
        options={{tabBarLabel: 'Remitter Details'}}
      />
      <Tab.Screen
        name="Transanctions"
        component={Transactions}
        options={{tabBarLabel: 'Transanctions'}}
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
    backgroundColor: '#f5f7fb',
    borderRadius: verticalScale(5),
    width: scale(330),
    alignSelf: 'center',
    marginTop: verticalScale(19),
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
