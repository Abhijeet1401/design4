import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ProgressBarAndroid,
  StatusBar,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
//import Icon from 'react-native-vector-icons/FontAwesome';

const data = [
  {
    id: 1,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '80',
  },
  {
    id: 2,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '90',
  },
  {
    id: 3,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '70',
  },
  {
    id: 4,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '50',
  },
  {
    id: 5,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '30',
  },
  {
    id: 6,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '90',
  },
  {
    id: 7,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '100',
  },
  {
    id: 8,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '40',
  },
  {
    id: 9,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '100',
  },
  {
    id: 10,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    days: '180 days',
    date: '13/04/22',
    amount: '2 Lakhs',
    percent: '40',
  },
];
const Button = ({label, onPress, selected}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, selected && styles.selectedButton]}>
      <Text style={[styles.buttonText, selected && styles.selectedButtonText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};
const MyLoan = () => {
  const [selectedButton, setSelectedButton] = useState([]);

  const handleActivePress = button => {
    setSelectedButton(button);
  };
  const renderItem = ({item}) => {
    return (
      <View style={styles.border}>
        <View style={styles.card}>
          <View style={styles.row}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
              Business Loan
            </Text>
            <Text>{item.days}</Text>
            <Text>{item.date}</Text>
          </View>
          <View style={styles.column}>
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                paddingBottom: 10,
                fontSize: 16,
              }}>
              ₹{item.amount}
            </Text>
            <Text style={{color: '#008000', fontWeight: 'bold'}}>
              {item.percent}%
            </Text>
          </View>
          <View style={styles.progressBar}>
            <View style={[styles.progress, {width: `${item.percent}%`}]}></View>
          </View>
        </View>
      </View>
    );
  };
  return (
    <ScrollView>
      <View style={StyleSheet.container}>
        {/* // <StatusBar barStyle='light-content'backgroundColor='white'/> */}
        {/* buttons  */}
        <View style={styles.buttonContainer}>
          <Button
            label="Active"
            onPress={() => handleActivePress('Active')}
            selected={selectedButton.includes('Active')}
          />
          <Button
            label="Closed"
            onPress={() => handleActivePress('Closed')}
            selected={selectedButton.includes('Closed')}
          />
        </View>
        {/* data */}
        <FlatList
          renderItem={renderItem}
          keyExtractor={item => item.id}
          data={
            selectedButton == 'Active'
              ? data.filter(b => b.percent != 100)
              : data.filter(b => b.percent == 100)
          }
        />
        <View></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex:1,
    backgroundColor: 'white',
    width: '80%',
  },
  card: {
    flex: 1,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
    elevation: 8,
    marginHorizontal: 10,
    //paddingHorizontal:30,
    marginBottom: 10,
    shadowColor: '#000000',
    margin: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.84,
    // justifyContent:'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    margin: 10,
    borderRadius: 5,
    marginRight: 8, // default value
  },
  selectedButton: {
    // backgroundColor: '',
  },
  buttonText: {
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'blue',
  },
  buttonMarginRight: {
    marginRight: 10,
  },
  // border:{
  //   boderStyle:'dashed',
  //   borderBottomWidth:1,
  //   borderBottomColor:'#ddd',
  //  // width:'97%',

  // },

  column: {
    marginLeft: 90,
  },
  progressBar: {
    // overflow:'hidden',

    marginLeft: 5,
    width: '90%',
    // marginRight:70,

    position: 'absolute',
  },
  progress: {
    //height: '100%',
    marginTop: 68,
    height: 3,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});

export default MyLoan;
