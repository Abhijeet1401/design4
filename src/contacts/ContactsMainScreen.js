import {StyleSheet, Text, View} from 'react-native';
//import { NavigationContainer } from "@react-navigation/native";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Dash from './Dash';

import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Octicons';
import Icon3 from 'react-native-vector-icons/Ionicons';
import Explore from './Explore';
import Contacts from './Contacts';
import Profile from './Profile';
import Nearby from './Nearby';
import {useState} from 'react';

const Tab = createMaterialBottomTabNavigator();
const ContactsMainScreen = () => {
  const [focused, setFocused] = useState('');

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <Tab.Navigator
        initialRouteName="Dash"
        barStyle={{backgroundColor: '#ffffff'}}
        activeColor="#0033A1"
        inactiveColor="#1D1D1D"

        //tabBarOptions={{}}
      >
        <Tab.Screen
          name="Dash"
          component={Dash}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="appstore-o"
                color={focused ? '#0033A1' : '#1D1D1D'}
                size={25}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon
                name="contacts"
                size={25}
                color={focused ? '#0033A1' : '#1D1D1D'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Explore"
          component={Explore}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon2
                name="stack"
                size={25}
                color={focused ? '#0033A1' : '#1D1D1D'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Nearby"
          component={Nearby}
          options={{
            tabBarIcon: ({focused}) => (
              <Icon3
                name="location-outline"
                size={25}
                color={focused ? '#0033A1' : '#1D1D1D'}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            StatusBar: {backgroundColor: 'black', style: 'light-content'},
            tabBarIcon: ({focused}) => (
              <Icon3
                name="person-outline"
                size={25}
                color={focused ? '#0033A1' : '#1D1D1D'}
                style={{}}
              />
            ),
          }}
          activeColor="red"
          inactiveColor="green"
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default ContactsMainScreen;
