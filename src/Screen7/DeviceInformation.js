import {View, Text, StyleSheet, Dimensions,TouchableOpacity} from 'react-native';
import React from 'react';
import DeviceInfo from 'react-native-device-info';
import {getUniqueId, getManufacturer} from 'react-native-device-info';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Weather from './Weather';
const DeviceInformation = ({navigation}) => {
  const deviceModel = DeviceInfo.getModel();
  const deviceBrand = DeviceInfo.getBrand();
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleName}>Device Infomation </Text>
      </View>

      <View>
        <View style={styles.infoContainer}>
          <Text style={styles.model}>DeviceInformation </Text>
          <Text style={styles.modelName}>{deviceModel} </Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.model}>Device Brand </Text>
          <Text style={styles.modelName}>{deviceBrand} </Text>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate()}>
            <Icon4
              name="arrow-back"
              size={26}
              style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(Weather)}>
            <Icon4
              name="arrow-forward"
              size={26}
              style={{marginRight: 40, color: 'black', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#ddd',
  },
  titleName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 15,
  },
  infoContainer: {
    marginTop:20,
    width: '90%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    elevation: 20,
    marginLeft: 15,
    marginRight: 25,
    paddingTop:5,
    paddingBottom:5,
    borderRadius:10
  },
  model: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
    color: 'black',
    marginLeft: 30,
  },
  modelName: {
    fontSize: 18,
    marginLeft: 30,
    marginRight:20
  },
  bottom: {
    width: '100%',
    // height: 50,
    //backgroundColor: '#EE5407',
    justifyContent: 'space-between',
    //alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 20,
  },
});
export default DeviceInformation;
