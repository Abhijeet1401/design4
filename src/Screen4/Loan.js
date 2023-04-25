
import { View, Text,StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import Tabs from './Tabs';

const Loan = () => {

 
  return (
    <View style={styles.container}>
    <View style={{marginRight: 'auto'}}>
        <Icon
          name="angle-left"
          size={25}
          style={{
            marginTop: 30,
            position: 'absolute',
            marginLeft: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}
        />
        <Text
          style={{
            marginLeft: 40,
            marginTop: 30,
           // position: 'absolute',
            fontSize: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}>
           Loans
          <View>
          <Tabs/>

          </View>
           
        </Text>  
      </View>

      
      
    
      
      

      
    </View>
  )
}

const styles=StyleSheet.create({
  container:{
  //flex:1,
  },
  tabContainer:{
    marginTop:30,
    marginLeft:30,
    flexDirection:'row',
    backgroundColor:'#ddd',
     marginLeft:10,
     marginRight:10,
     justifyContent:'space-evenly',
     padding:10,

  }
})

export default Loan