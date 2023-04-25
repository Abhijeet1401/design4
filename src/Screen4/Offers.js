import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-virtualized-view';

import Tabs from '../Screen4/Tabs';
import ExploreUI from '../Screen6/ExploreUI';
import BusinessWallet from '../Screen3/BusinessWallet'

const data = [
  {
    id: 1,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    loanType: 'Business Loan',
  },
  {
    id: 2,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
    loanType: 'Business Loan',
  },
  {
    id: 3,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
  },
  {
    id: 4,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
  },
  {
    id: 5,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
  },
  {
    id: 6,
    name: 'Creditvidiya',
    Limit: 'Upto 5 lakhs',
    interest: 'upto 36% / pa',
    Pro_Fees: 'Uptp 3% ',
    tenure: 'Upto 3 yrs',
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

const renderItem = ({item}) => {
  return (
    <View style={styles.card}>
      <View style={{position: 'absolute', marginLeft: 330}}>
        <Text
          style={{
            backgroundColor: '#f0f8ff',
            paddingLeft: 4,
            paddingBottom: 4,
          }}>
          <Icon2 name="business-center" size={20} />
        </Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={{color: 'black', opacity: 0.4}}>{item.name}</Text>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          {item.Limit}
        </Text>
        <View style={{marginTop: 10}}>
          <Text style={{color: 'black', opacity: 0.4}}>Intrest</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {item.interest}
          </Text>
        </View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 100,
        }}>
        <Text style={{color: 'blue'}}>Apply Now</Text>
      </View>
      <View style={styles.columncontainer}>
        <Text style={{color: 'black', opacity: 0.4}}>Processing Fees</Text>
        <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
          {item.Pro_Fees}
        </Text>
        <View style={{marginTop: 10}}>
          <Text style={{color: 'black', opacity: 0.4}}>Tenure</Text>
          <Text style={{color: 'black', fontSize: 16, fontWeight: 'bold'}}>
            {item.tenure}
          </Text>
        </View>
      </View>
    </View>
  );
};

const Offers = ({navigation}) => {
  // useEffect(() => {
  //   LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
  // }, [])

  const [selectedButton, setSelectedButton] = useState([]);
  const handleTabPres = tab => {
    setSelectedButton(tab);
  };

  return (
    <ScrollView nestedScrollViewEnabled={true}>
      <View style={styles.container}>
        {/* buttons options */}
        <View style={styles.buttonContainer}>
          <Button
            label="Business"
            onPress={() => handleTabPres('Business')}
            selected={selectedButton.includes('Business')}
          />
          <Button
            label="Overdraft"
            onPress={() => handleTabPres('Overdraft')}
            selected={selectedButton.includes('Overdraft')}
          />
          <Button
            label="Machinery"
            onPress={() => handleTabPres('Machinery')}
            selected={selectedButton.includes('Machinery')}
          />
          {/* <Button
        label="Over"
        onPress={()=>handleTabPres('Overdraft')}
       selected={selectedButton.includes('Overdraft')}
      /> */}
        </View>

        <FlatList
          scrollEnabled={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          data={data}
        />
      </View>
      <Text
        style={{
          color: 'black',
          fontWeight: 'bold',
          fontSize: 16,
          marginLeft: 20,
        }}>
        EMI calculator
      </Text>
      <View style={styles.card2}>
        <View
          style={{
            backgroundColor: '#f0f8ff',
            width: '100%',
            paddingLeft: 130,
            paddingTop: 30,
          }}>
          <Text style={{fontSize: 12, color: 'blue', alignItems: 'center'}}>
            Total Payable
          </Text>
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'blue'}}>
            <Icon name="rupee" size={20} />
            6,9786
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity onPress={() => navigation.navigate(BusinessWallet)}>
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
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
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
    fontSize: 14,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'blue',
  },
  buttonMarginRight: {
    marginRight: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 30,
  },
  rowContainer: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  columncontainer: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 10,
  },
  card2: {
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 8,
    marginHorizontal: 20,
    marginVertical: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    // justifyContent:'space-between',
    alignItems: 'center',

    height: 200,
  },
});

export default Offers;
