import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {useState} from 'react';
import ExploreUI from '../Screen6/ExploreUI';
import ImagePickerApp from '../Screen5/ImagePickerApp';

const data = [
  {
    id: 1,
    label: 'Business Wallet',
    Amount: '3204.00',
    value: '1',
    AccountNum: '1233546789667',
    Bankname: 'Instantpay',
    AccountType: 'Current A/C',
    AcccounHolderName: 'Abhijeet',
    IFSC: 'IPAY000007',
    Address: 'A1/B5 Mohan cooperative,New Delhi,110044',
    Mobile: '9234777846',
  },

  {
    id: 2,
    label: 'ICICI Bank-xxxx6578',
    Amount: '3000.00',
    value: '2',
    AccountNum: '1233546789667',
    Bankname: 'ICICI Bank',
    AccountType: 'Current A/C',
    AcccounHolderName: 'mayank',
    IFSC: 'ICICI0000023',
    Address: 'A1/B5 Mohan cooperative,New Delhi,110044',
    Mobile: '9234777846',
  },

  {
    id: 3,
    label: 'SBI Bank-xxxx6521',
    Amount: '2204.00',
    value: '3',
    AccountNum: '1233546789667',
    Bankname: 'SBI Bank',
    AccountType: 'Current A/C',
    AcccounHolderName: 'Abhishek',
    IFSC: 'SBIN007213',
    Address: 'A1/B5 Mohan cooperative,New Delhi,110044',
    Mobile: '9234777846',
  },

  {
    id: 4,
    label: 'Axis bank-xxxx5678',
    Amount: '7000.00',
    value: '4',
    AccountNum: '1233546789667',
    Bankname: 'Axis Bank',
    AccountType: 'Current A/C',
    AcccounHolderName: 'Govind',
    IFSC: 'AXI0000234',
    Address: 'A1/B5 Mohan cooperative,New Delhi,110044',
    Mobile: '9234777846',
  },
];

const BusinessWallet = ({navigation}) => {
  const [number, setNumber] = useState('');
  const [selected, setSelected] = useState(null);

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
            marginTop: 35,
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
          {/* <Text style={{fontSize: 15, marginRight: 55}}>Business Wallet</Text> */}

          <Text
            style={{
              fontSize: 25,
              marginRight: 55,
              fontWeight: 'bold',
              color: 'black',
            }}>
            <Icon name="rupee" size={25} style={{marginLeft: 25}} /> 3043
          </Text>
        </View>

        <View style={styles.dropdown}>
          {/* <Dropdown label="" data={data} onSelect={setSelected} style={selected && styles.selectedlabel} /> */}
        </View>
      </View>

      {/* wallet container end */}
      {/* Amount Enter */}
      <View style={styles.amountEnter}>
        <View style={{marginTop: 10}}>
          <Icon2
            color={'black'}
            name="cash-register"
            size={28}
            style={{marginLeft: 15, paddingBottom: 10}}
          />
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
          <Icon
            color={'black'}
            name="angle-right"
            size={30}
            style={{
              backgroundColor: '#eee',
              marginRight: 30,
              paddingTop: 2,
              paddingLeft: 4,
              paddingBottom: 2,
              paddingRight: 4,
            }}
          />
        </View>
      </View>
      {/* other ways to add money */}
      <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 'bold', fontSize: 18, color: 'black'}}>
          Other Ways To add Money
        </Text>
      </View>
      <View style={styles.optionsContainer}>
        {/* option 1 */}
        <View style={{marginTop: 10}}>
          <Icon
            color={'black'}
            name="bank"
            size={25}
            style={{marginLeft: 15, paddingBottom: 10}}
          />
        </View>
        <View style={styles.options}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 10,
              paddingTop: 10,
            }}>
            Bank Transfers
          </Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name="angle-right" size={40} />
          </Text>
        </View>
      </View>
      {/* option 2 */}
      <View style={styles.optionsContainer}>
        <View style={{marginTop: 10}}>
          <Icon2
            color={'black'}
            name="slot-machine"
            size={30}
            style={{marginLeft: 15, paddingBottom: 10}}
          />
        </View>
        <View style={styles.options}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 10,
              paddingTop: 10,
            }}>
            CDM (cash deposit Machine)
          </Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name="angle-right" size={40} />
          </Text>
        </View>
      </View>
      {/* option 3 */}
      <View style={styles.optionsContainer}>
        <View style={{marginTop: 10}}>
          <Icon2
            color={'black'}
            name="cash"
            size={30}
            style={{marginLeft: 15, paddingBottom: 10}}
          />
        </View>
        <View style={styles.options}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 10,
              paddingTop: 10,
            }}>
            Cash Deposit
          </Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name="angle-right" size={40} />
          </Text>
        </View>
      </View>
      {/* option 4 */}
      <View style={styles.optionsContainer}>
        <View style={{marginTop: 10}}>
          <Icon2
            color={'black'}
            name="account-cash"
            size={30}
            style={{marginLeft: 15, paddingBottom: 10}}
          />
        </View>
        <View style={styles.options}>
          <Text
            style={{
              fontSize: 16,
              color: 'black',
              fontWeight: 'bold',
              marginLeft: 10,
              paddingTop: 10,
            }}>
            Cash Pickup
          </Text>
        </View>
        <View style={styles.iconRight}>
          <Text>
            <Icon name="angle-right" size={40} />
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate(ImagePickerApp)}>
          <Icon4
            name="arrow-back"
            size={26}
            style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(ExploreUI)}>
          <Icon4
            name="arrow-forward"
            size={26}
            style={{marginRight: 40, color: 'black', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginLeft: 15,
  },

  amountEnter: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',

    width: '100%',
    //shadowColor: '#000',
    shadowOffset: {height: 5, width: 0},
    // shadowOpacity: 0.5,
    shadowRadius: 5,
    // elevation:2 ,
    borderRadius: 10,
  },
  iconRight: {
    flexDirection: 'row',
    marginRight: 20,
  },
  input: {
    marginRight: 80,
    fontSize: 19,
    paddingTop: 10,
    paddingBottom: 10,
  },
  optionsContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    //shadowColor: '#000',
    //shadowOffset: {height:5, width: 0},
    // shadowOpacity: 0.5,
    // shadowRadius: 5,
    // elevation:2 ,
    borderRadius: 10,
  },
  options: {
    // marginRight:190,
    marginRight: 'auto',
    paddingLeft: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  dropdown: {
    width: '100%',
  },
});

export default BusinessWallet;
