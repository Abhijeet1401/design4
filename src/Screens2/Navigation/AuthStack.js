import { View, Text } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Rating from '../Rating';
import Improve from '../Improve'


const Stack = createNativeStackNavigator()
const AuthStack = () => {
  return (

 <Stack.Navigator>
  <Stack.Screen name='Rating' component={Rating} options={{headerShown:false}}/>
  <Stack.Screen name='Improve' component={Improve} options={{headerShown:false}}/>
 </Stack.Navigator>
    

     
  
  )
}

export default AuthStack