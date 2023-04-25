import { View, Text,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'


const data = [
  {id:1, label: 'Business Wallet',Amount:'3204.00', value: '1',AccountNum:'1233546789667', Bankname:'Instantpay',AccountType:'Current A/C',AcccounHolderName:'Abhijeet',IFSC:'IPAY000007',
Address:'A1/B5 Mohan cooperative,New Delhi,110044',Mobile:'9234777846'},

    {id:2, label: 'ICICI Bank-xxxx6578',Amount:'3000.00', value: '2',AccountNum:'1233546789667', Bankname:'ICICI Bank',     AccountType:'Current A/C',AcccounHolderName:'mayank',IFSC:'ICICI0000023',
Address:'A1/B5 Mohan cooperative,New Delhi,110044',Mobile:'9234777846'   
    
    },

    {id:3, label: 'SBI Bank-xxxx6521',Amount:'2204.00', value: '3',AccountNum:'1233546789667' , Bankname:'SBI Bank',AccountType:'Current A/C',AcccounHolderName:'Abhishek',IFSC:'SBIN007213',
Address:'A1/B5 Mohan cooperative,New Delhi,110044',Mobile:'9234777846'    
    
    },

    {id:4, label: 'Axis bank-xxxx5678',Amount:'7000.00', value: '4',AccountNum:'1233546789667', Bankname:'Axis Bank' ,AccountType:'Current A/C',AcccounHolderName:'Govind',IFSC:'AXI0000234',
Address:'A1/B5 Mohan cooperative,New Delhi,110044',Mobile:'9234777846'    
    
    },

  ];

const BankWallet = ({navigation}) => {
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

      {/* wallet container */}
      <View style={styles.box1}>
        <View style={styles.box1Icon}>
          <View>
            <Text style={{color: 'blue'}}>
              <Icon name="paypal" size={35} />
            </Text>
          </View>
        </View>

       {/* dropdown */}
       
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    padding: 24,
  },

})

export default BankWallet