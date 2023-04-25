import {View, Text, StyleSheet, Image, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from 'react';




const BusinessWallet = () => {
  const [number,setNumber] = useState('')
  return (
    <View style={styles.container}>
      <View style={{marginRight: 'auto'}}>
        <Icon
          name="angle-left"
          size={25}
          style={{
            marginTop: 30,
            position: 'absolute',
            marginLeft: 10,
            color: 'blue',
            fontWeight: 'bold',
          }}
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 30,
            position: 'absolute',
            fontSize: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}>
          Add Money
        </Text>
      </View>

      {/* // Wallet Container */}
      <View style={styles.box1}>
        <View style={styles.box1Icon}>
          <View>
            <Text style={{color: 'blue'}}>
              <Icon name="paypal" size={35} />
            </Text>
          </View>
        </View>

        <View style={styles.Wallet}>
          <Text style={{fontSize: 15, marginRight: 55}}>Business Wallet</Text>

          <Text style={{fontSize: 25, marginRight: 55,fontWeight:'bold'}}>
            <Icon name="rupee" size={30} style={{}} /> 3043.00
          </Text>
        </View>

         <View style={styles.dropdown}>
          {/* <Text >
            <Icon name="angle-down" size={30} />
          </Text> */}
        </View>
      </View>

      {/* wallet container end */}
      {/* Amount Enter */}
      <View style={styles.amountEnter}>
        <View style={{marginTop:10}}>
          <Icon2 name="cash-register" size={28} style={{}} />
        </View>
        <View style={styles.input}>
         <TextInput
          style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Enter Amount"
        keyboardType="numeric"
         />   
        </View>
        <View style={styles.iconRight}>
          <Text style={{backgroundColor:'#eee',paddingLeft:8,paddingRight:8}}>
            <Icon name='angle-right' size={40} />
          </Text>
        </View>
      </View>
      {/* other ways to add money */}
     <View style={{marginTop:30}}><Text style={{fontWeight:'bold',fontSize:18,color:'black'}}>Other Ways To add Money</Text></View>
       <View style={styles.optionsContainer}>   
       {/* option 1 */}
       <View style={{marginTop:10}}>
          <Icon name="bank" size={25} />
        </View>
        <View style={styles.options}>
         <Text style={{fontSize:16,color :'black',fontWeight:'bold'}}>Bank Transfers</Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name='angle-right' size={40} />
          </Text>
        </View> 
      </View>
      {/* option 2 */}
      <View style={styles.optionsContainer}>   
       <View style={{marginTop:10}}>
          <Icon2 name="slot-machine" size={30} style={{}} />
        </View>
        <View style={styles.options}>
         <Text style={{fontSize:16,color :'black',fontWeight:'bold'}}>CDM (cash deposit Machine)</Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name='angle-right' size={40} />
          </Text>
        </View> 
      </View>
      {/* option 3 */}
      <View style={styles.optionsContainer}>   
     
       <View style={{marginTop:10}}>
          <Icon2 name="cash" size={30} style={{}} />
        </View>
        <View style={styles.options}>
         <Text style={{fontSize:16,color :'black',fontWeight:'bold'}}>Cash Deposit</Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name='angle-right' size={40} />
          </Text>
        </View> 
      </View>
      {/* option 4 */}
      <View style={styles.optionsContainer}>   
       <View style={{marginTop:10}}>
          <Icon2 name="account-cash" size={30} style={{}} />
        </View>
        <View style={styles.options}>
         <Text style={{fontSize:16,color :'black',fontWeight:'bold'}}>Cash Pickup</Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name='angle-right' size={40} />
          </Text>
        </View> 
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 24,
  },
  WalletContainer: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {height: 5, width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    marginTop: 60,
    // height:100
  },
  title: {
    justifyContent: 'flex-start',
    marginLeft: 30,
    marginTop: 10,
  },
  box1: {
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {height: 'auto', width: 0},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 30,
    borderRadius: 10,
    marginTop: 100,
    //backgroundColor: "#ddd",
    marginLeft: 'auto',
    marginRight: 'auto',

    padding: 15,
  },
  box1Icon: {
    //flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  // Wallet:{
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   marginRight: 200,
  // },
  Wallet: {
    //flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 85,
  },

  amountEnter: {
    flexDirection: 'row',
    marginTop: 30,
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: 'white',
    
    width: '100%',
    //shadowColor: '#000',
    shadowOffset: {height:5, width: 0},
   // shadowOpacity: 0.5,
    shadowRadius: 5,
   // elevation:2 ,
    borderRadius: 10,
  },
  iconRight:{
    
    flexDirection:'row',
  
  },
  input:{
    marginRight:90,
    fontSize:19,
    marginTop:10,
  
  
  },
  optionsContainer:{
    flexDirection: 'row',
    marginTop: 30,
    width:'100%',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor: 'white',
    
    width: '100%',
    //shadowColor: '#000',
    //shadowOffset: {height:5, width: 0},
   // shadowOpacity: 0.5,
   // shadowRadius: 5,
   // elevation:2 ,
    borderRadius: 10, 
  },
  options:{
    // marginRight:190,
    marginRight:'auto',
    paddingLeft:10,
    marginTop:10,

  }
});

export default BusinessWallet;
