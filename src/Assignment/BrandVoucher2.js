import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import {Ionicons} from '@expo/vector-icons';

import VoucherBalance from './VoucherBalance';
import Transanction from './Transanction';
import FilterTransanction from './FilterTransanction';
import IconsList from './IconsList';

const icons = [
  {name: 'home', text: 'Home'},
  {name: 'search', text: 'Search'},
  {name: 'bell', text: 'Notifications'},
  {name: 'ellipsis-h', text: 'More'},
  {name: 'user', text: 'Profile'},
  {name: 'heart', text: 'Favorites'},
  {name: 'envelope', text: 'Messages'},
  {name: 'bookmark', text: 'Bookmarks'},
  {name: 'shopping-cart', text: 'Cart'},
  {name: 'cog', text: 'Settings'},
  {name: 'camera', text: 'Camera'},
  {name: 'globe', text: 'Explore'},
  {name: 'star', text: 'Popular'},
  {name: 'bars', text: 'Menu'},
];

const data = [
  {
    id: 1,
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Success',
    // Phone_number: "912234565",
    // Designation: "Manager",
  },
  {
    id: 2,
    // name: "Vinod Sharma",
    // Email: "S.kumar@greenfoods.com",
    // Phone_number: "9802424122",
    // Designation: "Cashier(shop3)",

    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Success',
  },
  {
    id: 3,
    //OrderId: "Order ID",
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Success',
  },
  {
    id: 4,
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Success',
  },
  {
    id: 5,
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Failed',
  },
  {
    id: 6,
    TxnID: '87465738695748',
    Amount: '-4,500',
    Date: '13/04/22',
    time: '17:24:50',
    status: 'Pending',
  },
];

const BrandVoucher2 = props => {
  const [text, setText] = useState('');
  const [showAll, setShowAll] = useState(false);

  const getStatusColor = status => {
    return status === 'Success'
      ? '#00C337'
      : status === 'Failed'
      ? 'red'
      : status === 'Pending'
      ? 'yellow'
      : 'black';
  };

  // render Item data
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => props.navigation.navigate(Transanction)}>
        <View style={styles.Cards}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {item.OrderId}
              </Text>
            </View>
            <View style={styles.column}></View>
          </View>

          <View style={styles.row}>
            <View style={[styles.column, styles.label]}>
              <Text style={{color: 'black', fontWeight: 'bold', fontSize: 20}}>
                {item.TxnID}
              </Text>
            </View>
            <View style={[styles.column, styles.value]}>
              <Text style={{color: 'black', fontSize: 20}}>{item.Amount}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={[styles.column]}>
              <Text style={{color: 'black', opacity: 0.5}}>{item.Date}</Text>
              <Text style={{color: 'black', opacity: 0.5}}>{item.time}</Text>
            </View>
            <View style={[styles.column]}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: getStatusColor(item.status),
                }}>
                {item.status}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  // end render Item
  // icons list render

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <Icon name="angle-left" size={30} color={'#0033A1'} />
        <View style={styles.title}>
          <Text style={styles.titleText}>Brand Voucher</Text>
          <Icon name="rupee" size={25} style={styles.icon} color="#048848" />
        </View>
      </View>

      {/* serach container */}
      <View style={styles.SearchContainer}>
        <TextInput
          onChangeText={setText}
          value={text}
          placeholderTextColor={'grey'}
          style={{
            flex: 1,
            fontSize: 14,
            marginRight: 22,
            paddingLeft: 5,

            color: 'black',
          }}
          placeholder="Search for Voucher"
        />
        <Icon
          name="search"
          style={{
            color: 'black',
            marginRight: 20,
            justifyContent: 'flex-end',
            marginTop: 10,
          }}
          size={20}
        />
      </View>
      {/* frame */}
      <View style={styles.frame}>
        <Text style={styles.name}>Select By Category</Text>
        {/* icon */}
      </View>
      {/* icons list end */}
      <View style={styles.frame2}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.navigate('VoucherBalance');
          }}>
          <Text style={styles.textVoucher}>Check Voucher Balance</Text>
        </TouchableOpacity>
        <Icon2 name="arrow-forward" size={20} style={styles.rightArrow} />
      </View>

      {/* search container 2 */}
      <View style={styles.search2}>
        <TextInput
          onChangeText={setText}
          value={text}
          style={{fontSize: 14, marginRight: 22, paddingLeft: 10}}
          placeholder="Search(set date for past transactions)"
        />
        <TouchableOpacity>
          <Icon
            name="search"
            style={{
              color: 'black',
              left: '85%',
              position: 'absolute',
              justifyContent: 'flex-end',
              marginTop: 10,
            }}
            size={20}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props.navigation.navigate(FilterTransanction)}>
          <Icon3 name="filter" style={styles.filter} size={30} />
        </TouchableOpacity>
      </View>
      {/* data */}

      <FlatList
        style={{marginTop: 400, width: 400, marginLeft: -20}}
        data={data}
        renderItem={renderItem}
        keyExtractor={data => data.id}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,

    width: '100%',
  },
  // arrow: {
  //   position: 'absolute',
  //   marginLeft: 30,
  // },
  header: {
    justifyContent: 'space-between',
    width: 350,
    // position: 'absolute',
    height: 48.03,
    marginTop: 43,
    backgroundColor: '#FFFFFF',
  },
  title: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  titleText: {
    color: '#0033A1',
    fontWeight: 'bold',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 30,
    marginTop: 5,
  },
  icon: {
    marginLeft: 320,
    marginTop: 5,
  },
  SearchContainer: {
    flexDirection: 'row',
    top: 107,
    height: 50,
    marginLeft: 20,
    //paddingHorizontal: 10,
    width: 350,
    backgroundColor: '#F5F7FB',
    borderRadius: 10,
  },
  frame: {
    width: 350,
    height: 156,
    marginLeft: 20,
    top: 177,

    backgroundColor: '#F5F7FB',
    borderRadius: 10,
  },
  name: {
    color: '#1D1D1D',
    marginTop: 10,
    marginLeft: 15,
    // fontfamily: 'Inter';
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 12,
  },

  frame2: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    width: 350,
    height: 48,
    marginLeft: 20,
    top: 345,
    backgroundColor: '#F5F7FB',
    borderRadius: 10,
  },
  rightArrow: {
    alignItems: 'center',
    top: '36%',
    marginLeft: 300,
    color: '#0033A1',
  },
  textVoucher: {
    position: 'absolute',
    alignItems: 'center',
    top: '36%',
    marginLeft: 20,
    fontWeight: '500',
    fontSize: 12,
    color: '#0033A1',
  },
  search2: {
    backgroundColor: '#F5F7FB',
    position: 'absolute',
    width: 300,
    height: 48,
    left: 21.76,
    top: 423,
    borderRadius: 10,
    flexDirection: 'row',
  },
  filter: {
    position: 'absolute',
    // width: "60%",
    //marginLeft: 300,
    left: 80,
    flexDirection: 'row',
    color: '#0033A1',
    fontWeight: 'bold',
  },

  Cards: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    //position:'absolute',

    padding: 8,
    marginLeft: 30,
    marginRight: -10,
  },
  row: {
    marginHorizontal: 10,
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 3,

    // marginLeft:20
  },
  data: {
    position: 'absolute',
    width: 350,
    marginLeft: 0,
    marginRight: 20,
    top: 500,
  },
});

export default BrandVoucher2;
