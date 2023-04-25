import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/MaterialIcons';

import Calender from '../Screen7/Calender';
import Offers from '../Screen4/Offers';


const ExploreUI = ({navigation}) => {
  const [text, setText] = useState('');

  const theme = useColorScheme();
  //  const [isDarkTheme, setIsDarkTheme] = useState(theme === 'dark');

  // dark mode -  iconBackgroundColor , textColor
  // light mode -

  const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: theme === 'dark' ? '#2d2d2d' : 'white',
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    },
    SearchContainer: {
      flexDirection: 'row',
      marginTop: 20,
      justifyContent: 'center',
      alignSelf: 'center',
      // marginLeft: 30,
      // marginRight: 60,
      width: '90%',
      backgroundColor: theme === 'dark' ? '#1d1d1d' : '#f0f8ff',
      borderRadius: 10,
      paddingLeft: 10,
      borderRadius: 10,
    },
    Section: {
      backgroundColor: theme === 'dark' ? '#1d1d1d' : '#f0f8ff',
      //flexDirection: 'row',
      width: '90%',
      justifyContent: 'space-around',
      alignSelf: 'center',
      borderRadius: 10,
      marginTop: 20,
      paddingBottom: 30,
    },
    row: {
      width: '90%',
      flexWrap: 'wrap',
      display: 'flex',
      flexDirection: 'row',
      margin: 2,
      //alignSelf:'center',
      flexDirection: 'row',
    },
    iconContainer: {
      width: '20%',
      margin: 7,
    },
    icon: {
      backgroundColor: theme === 'dark' ? '#2d2d2d' : 'white',
      elevation: 2,
      justifyContent: 'center',
      alignSelf: 'center',
      padding: 10,
      borderRadius: 10,
      color: theme === 'dark' ? '#84aafd' : 'black',
    },
    iconText: {
      textAlign: 'center',
      color: theme === 'dark' ? 'white' : 'black',
      width: '100%',
    },
    Section2: {
      backgroundColor: theme === 'dark' ? '#1d1d1d' : 'white',
      opacity: 0.4,
      //flexDirection: 'row',
      width: '90%',
      justifyContent: 'space-around',
      alignSelf: 'center',
      borderRadius: 10,
      // marginTop: 20,
      // paddingBottom: 20,
    },
  });

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: theme == 'dark' ? 'black' : 'white'},
      ]}>
      <ScrollView>
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
              color: theme === 'dark' ? '#0000cd' : 'blue',
              fontWeight: 'bold',
            }}>
            BBPS
          </Text>
        </View>
        {/* search bar Container */}
        <View style={styles.SearchContainer}>
          <TextInput
            onChangeText={setText}
            value={text}
            placeholderTextColor={theme === 'dark' ? 'white' : 'grey'}
            style={{
              flex: 1,
              fontSize: 14,
              marginRight: 22,
              paddingLeft: 5,

              color: theme === 'dark' ? 'white' : 'black',
            }}
            placeholder="Search for Services"
          />
          <Icon
            name="search"
            style={{
              color: theme === 'dark' ? 'white' : 'black',
              marginRight: 20,
              justifyContent: 'flex-end',
              marginTop: 10,
            }}
            size={20}
          />
        </View>
        {/* Recharge Section */}
        <View style={styles.Section}>
          <View>
            <Text
              style={{
                marginLeft: 20,
                color: theme === 'dark' ? 'white' : 'black',
                fontSize: 18,
              }}>
              Recharges
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon2 name="mobile1" size={30} style={styles.icon} />
              <View>
                <Text style={styles.iconText}>Mobile PostPaid</Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <Icon2 name="mobile1" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Mobile PostPaid</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="phone-classic" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Landline</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="cable-data" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Cable Tv</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3 name="satellite-uplink" size={30} style={styles.icon} />
              <Text style={styles.iconText}>DTH</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="train" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Metro card</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="tag" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Fast Tag</Text>
            </View>
          </View>
        </View>
        {/* utilities Section */}

        <View style={styles.Section}>
          <View>
            <Text
              style={{
                marginLeft: 20,
                color: theme === 'dark' ? 'white' : 'black',
                fontSize: 18,
              }}>
              Utilities
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3 name="power-plug" size={30} style={styles.icon} />
              <View>
                <Text style={styles.iconText}>Electricity</Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="gas-cylinder" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Gas Cylinder</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="book-education" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Education Fee</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="broadcast" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Broadband</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3 name="water-pump" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Water</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon3 name="pipe" size={30} style={styles.icon} />
              <Text style={styles.iconText}>pipedGas</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon3
                name="room-service-outline"
                size={30}
                style={styles.icon}
              />
              <Text style={styles.iconText}>Municipal Service</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon3 name="credit-card" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Rental</Text>
            </View>
          </View>
        </View>
        {/* Finance and taxes */}
        <View style={styles.Section}>
          <View>
            <Text
              style={{
                marginLeft: 20,
                color: theme === 'dark' ? 'white' : 'black',
                fontSize: 18,
              }}>
              Finance and taxes
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3 name="credit-card-outline" size={30} style={styles.icon} />
              <View>
                <Text style={styles.iconText}>Credit Card</Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <Icon2 name="mobile1" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Loan EMI</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="account-cash" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Recurring Deposits</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="car" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Car Insurance</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3
                name="credit-card-refund-outline"
                size={30}
                style={styles.icon}
              />
              <Text style={styles.iconText}>Mutual Funds</Text>
            </View>
            {/* <View style={styles.iconContainer}>
              <Icon name="train" size={20} style={styles.icon} />
              <Text style={styles.iconText}>Metro card</Text>
            </View> */}
            {/* <View style={styles.iconContainer}>
              <Icon name="tag" size={20} style={styles.icon} />
              <Text style={styles.iconText}>Fast Tag</Text>
            </View> */}
          </View>
        </View>
        {/* Other */}
        <View style={styles.Section}>
          <View>
            <Text
              style={{
                marginLeft: 20,
                color: theme === 'dark' ? 'white' : 'black',
                fontSize: 18,
              }}>
              Other
            </Text>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon4 name="people" size={30} style={styles.icon} />
              <View>
                <Text style={styles.iconText}>club{'\n'}Association</Text>
              </View>
            </View>

            <View style={styles.iconContainer}>
              <Icon2 name="mobile1" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Hospitals&Pathology</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="phone-classic" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Housing Society</Text>
            </View>

            <View style={styles.iconContainer}>
              <Icon3 name="cable-data" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Subscription</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Icon3 name="satellite-uplink" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Payments B2B</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="train" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Dairy B2B</Text>
            </View>
            <View style={styles.iconContainer}>
              <Icon name="tag" size={30} style={styles.icon} />
              <Text style={styles.iconText}>Combine{'\n'} Plan</Text>
            </View>
          </View>
        </View>
        <View style={styles.Section2}>
          <Image
            source={require('../Screen6/bottomb.png')}
            style={{width: 350, height: 200, borderRadius: 10}}
          />
        </View>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <TouchableOpacity onPress={() =>navigation.navigate(Offers)}>
            <Icon4
              name="arrow-back"
              size={26}
              style={{marginLeft:20, color: theme==='dark'?'white':'black',fontWeight:'bold'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>navigation.navigate(Calender)}>
            <Icon4
              name="arrow-forward"
              size={26}
              style={{ marginRight:40,color: theme==='dark'?'white':'black',fontWeight:'bold'}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default ExploreUI;
