import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import Offers from './Offers';
import MyLoan from './MyLoan';

// function Offers() {
//   return (
//     <View style={{justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Home!</Text>
//     </View>
//   );
// }

// function MyLoan() {
//   return (
//     <View style={{  justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Settings</Text>
//     </View>
//   );
// }

const Tab = createMaterialTopTabNavigator();

const handleTabPres = tab => {
  setSelected(tab);
};
export default function Tabs() {
  const [seleted, setSelected] = React.useState();
  return (
    <>
      <View style={{flexDirection: 'row', marginLeft: 30, marginTop: 20}}>
        <Icon name="angle-left" size={30} color={'blue'} />
        <Text
          style={{
            marginBottom: 30,
            fontSize: 25,
            marginLeft: 10,
            color: 'blue',
          }}>
          Loan
        </Text>
      </View>
      
        <Tab.Navigator
          screenOptions={{
            tabBarLabelStyle: {fontSize: 14},
            tabBarStyle: {
              backgroundColor: '#f0f8ff',
              color: 'red',
              borderRadius: 10,
              marginLeft: 15,
              marginRight: 15,
            },
            tabBarPressColor: 'white',
          }}>
          <Tab.Screen name="Offer" component={Offers} />
          <Tab.Screen name="My Loans" component={MyLoan} />
        </Tab.Navigator>
    
    </>
  );
}
