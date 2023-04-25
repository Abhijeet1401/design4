import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Egift = () => {
  return (
   <View style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="angle-left"
          size={30}
          style={styles.arrow}
          color={'#0033A1'}
        />
         <View style={styles.title}>
          <Text style={styles.titleText}>Check Voucher Balance</Text>
         </View>
      </View>




    </View>

  )
};
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: 1000,
    backgroundColor: '#FFFFFF',
  },
  header: {
    justifyContent: 'space-between',
    width: 350,
    position: 'absolute',
    height: 48.03,
    marginTop: 43,
    backgroundColor: '#FFFFFF',
  },
  title: {
    flexDirection: 'row',
    marginLeft: 25,
  },
  arrow: {
    position: 'absolute',
    marginLeft: 30,
  },
  titleText: {
    color: '#0033A1',
    fontWeight: 'bold',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 30,
    marginTop: 5,
  },
});
export default Egift;
