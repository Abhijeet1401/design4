import {View, Text, TextInput, Dimensions, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function SearchBar({data={data},fetchWeatherData}) {
  const [cityName, setCityName] = useState('');

  return (
   <View style={styles.container}>
         <View style={styles.SearchContainer}>
          <TextInput
            placeholder="Enter City Name"
            placeholderTextColor={'grey'}
            value={cityName}
            onChangeText={text => setCityName(text)}
            style={{
              flex: 1,
              fontSize: 18,
              marginRight: 22,
              paddingLeft: 5,
              color: 'black',
            }}
          />
          <Icon
            name="search"
            onPress={() => fetchWeatherData(cityName)}
            style={{
            
              marginRight: 20,
              justifyContent: 'flex-end',
              marginTop: 10,
            }}
            size={20}
            color={'black'}
          />
        </View>
   </View>
  );
}
const styles = StyleSheet.create({

  container:{
  flex:1,
   justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'white'
  },
  SearchContainer: {
    position:'absolute',
   marginBottom:20,
   flexDirection: 'row',
    width: '80%',
   
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal:4,
    paddingVertical:5,backgroundColor:'#fff'
  },
});
