import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import React, {useState, useEffect} from 'react';
import Navigation from '../MainNavigation/Navigation';
import ExploreUI from '../Screen6/ExploreUI';

import {NavigationContainer} from '@react-navigation/native';

import DeviceInformation from '../Screen7/DeviceInformation';

const Calender = ({navigation}) => {
  const [data, setData] = useState([]);

  // const [loading, setLoading] = useState(true);
  const url =
    'https://holidayapi.com/v1/holidays?pretty&key=8e9a9e0f-233f-4b8c-9429-fbbd0238d7ed&country=IN&year=2022';

  useEffect(() => {
    fetch(url)
      .then(resp => resp.json())
      .then(json => setData(json.holidays));
    // .catch((error) => console.error(error))
    // .finally(() => setLoading(false));
  }, []);

  const renderItem = ({item}) => {
    if (!item.date) {
      return null;
    }
    const dayOfMonth = item.date.split('-')[2];
    const date = new Date(item.date);
    const dayName = date
      .toLocaleString('default', {weekday: 'long'})
      .split(' ')[0];
    const monthAbbreviation = date
      .toLocaleString('default', {month: 'short'})
      .toUpperCase();

    let backgroundColor = '';
    let lightbackGroundColor = '';
    if (
      monthAbbreviation === 'JAN' ||
      monthAbbreviation === 'MAY' ||
      monthAbbreviation === 'SEP'
    ) {
      backgroundColor = '#cd5c5c';
      lightbackGroundColor = 'pink';
      opacity = 0.3;
    } else if (
      monthAbbreviation === 'FEB' ||
      monthAbbreviation === 'OCT' ||
      monthAbbreviation === 'JUN'
    ) {
      backgroundColor = '#6b8e23';
      lightbackGroundColor = '#8fbc8f';
      opacity = 0.3;
    } else if (
      monthAbbreviation === 'AUG' ||
      monthAbbreviation === 'OCT' ||
      monthAbbreviation === 'APR'
    ) {
      backgroundColor = 'cyan';
      (lightbackGroundColor = '#afeeee'), (opacity = 0.3);
    } else if (monthAbbreviation === 'MAR' || monthAbbreviation === 'DEC') {
      backgroundColor = 'grey';
      lightbackGroundColor = '#ddd';
      opacity = 0.3;
    }

    return (
      <View style={styles.holidayList}>
        <View style={[styles.list]}>
          <View style={styles.calImg}>
            <View
              style={[
                styles.monthPart,
                {backgroundColor: lightbackGroundColor},
              ]}>
              <View>
                <Text style={{color: 'white', fontWeight: 'bold'}}>
                  {monthAbbreviation}
                </Text>
              </View>
            </View>
            {/* <Text>{date.toLocaleString('default', { month: 'long' })}</Text> */}
            <View style={[styles.datePart, {backgroundColor: backgroundColor}]}>
              <View>
                <Text>{dayOfMonth}</Text>
              </View>
            </View>
          </View>
          <View style={styles.holiday}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.dayname}>{dayName}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginLeft: 100,
              marginTop: 50,
              position: 'absolute',
              marginLeft: 300,
            }}>
            {(monthAbbreviation === 'MAR' ||
              monthAbbreviation == 'FEB' ||
              monthAbbreviation == 'APR') && (
              <Text
                style={{
                  color: backgroundColor,
                  fontSize: 16,
                  justifyContent: 'flex-end',
                }}>
                Floater Leave
              </Text>
            )}
          </View>
        </View>
        <Text
          style={{
            borderStyle: 'solid',
            borderBottomWidth: 0.5,
            bordercolor: '#ddd',
            opacity: 0.4,
            marginTop: 10,
          }}></Text>
      </View>
    );
  };
  //console.log(data,'hii')
  return (
    <View style={styles.Container}>
      <View style={styles.title}>
        <Text style={styles.titleName}>
          <TouchableOpacity onPress={() => navigation.navigate(ExploreUI)}>
            <Icon
              name="keyboard-backspace"
              size={26}
              style={{
                marginRight: 100,
                color: 'black',
                justifyContent: 'space-evenly',
              }}
            />
          </TouchableOpacity>
          Holidays
          <TouchableOpacity
            onPress={() => navigation.navigate(DeviceInformation)}>
            <Icon2
              name="arrow-forward"
              size={26}
              style={{marginLeft: 100, color: 'black', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.data}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Container: {
    //flex:1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  title: {
    marginTop: 10,
    marginHorizontal: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
    width: '100%',
  },
  holiday: {},
  titleName: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  holidayList: {
    backgroundColor: 'white',
    elevation: 10,
  },
  calImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  list: {
    flexDirection: 'row',
    //justifyContent:'space-between'
  },
  name: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  dayname: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    fontSize: 16,
  },
  monthPart: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 60,
    //backgroundColor: 'red',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  datePart: {
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 60,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    // backgroundColor: 'pink',
    //borderRadius:5
  },
});

export default Calender;
