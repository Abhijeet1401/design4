import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import Weather from './Weather';
import React, {useEffect, useState} from 'react';
import SearchBar from './SearchBar';
import {haze, sunny, snow, rainy, cloudy} from '../../assets/Images/index';
import BrandVoucher from '../brandVoucher/BrandVoucherMainScreen.js';

export default function WeatherInfo({
  data,
  fetchWeatherData = {fetchWeatherData},
}) {
  //console.log(data, 'show data');
  const [backgroundImage, setBackGroundImage] = useState(null);
  const [cityName, setCityName] = useState('');
  const [textColor, setTextColor] = useState('white');
  const navigation = useNavigation();

  // stylesheet
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
    },
    backgroundImage: {
      flex: 1,
      width: Dimensions.get('screen').width,
    },
    cityName: {
      fontSize: 26,
    },
    extraInfo: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      marginTop: 20,
    },
    info: {
      width: Dimensions.get('screen').width / 2.5,
      backgroundColor: 'rgba(0,0,0,0.4)',
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 10,
      paddingBottom: 10,
    },
    SearchContainer: {
      marginTop: 40,
      flexDirection: 'row',
      justifyContent: 'center',
      alignSelf: 'center',
      width: '80%',
      borderBottomWidth: 2,
      borderColor: 'black',
      borderRadius: 10,
      paddingLeft: 10,
      borderRadius: 10,
    },
  });

  const {
    weather,
    name,
    main: {temp, humidity},
    wind: {speed},
  } = data;
  const [{main}] = weather;

  useEffect(() => {
    // console.log(main)
    setBackGroundImage(getBackgroundImage(main));
  }, [data]);

  function getBackgroundImage(data) {
    if (data === 'Snow') {
      setTextColor('black');
      return snow;
    }
    if (data === 'Rain') {
      setTextColor('white');
      return rainy;
    }
    if (data == 'Clear') {
      setTextColor('white');
      return sunny;
    }
    if (data === 'Haze') {
      setTextColor('white');
      return haze;
    }
    if (data === 'Clouds') {
      setTextColor('white');
      return cloudy;
    }
    return sunny;
  }

  //console.log(temp,'tempr')

  //console.log(weather);
  return (
    <View style={styles.container}>
      {/* <Text>WeatherInfo</Text> */}
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover">
        {/* search bar */}

        <View style={styles.SearchContainer}>
          <TextInput
            placeholder="Enter City Name"
            placeholderTextColor={textColor}
            value={cityName}
            onChangeText={text => setCityName(text)}
            style={{
              flex: 1,
              fontSize: 18,
              marginRight: 22,
              paddingLeft: 5,
              color: textColor,
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
            color={textColor}
          />
        </View>
        {/* End of Search container */}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 30,
          }}>
          <Text
            style={{
              ...styles.cityName,
              color: textColor,
              fontWeight: 'bold',
              fontSize: 36,
            }}>
            {name}
          </Text>
          <Text style={{...styles.cityName, color: textColor}}>{main}</Text>
          <Text style={{...styles.cityName, color: textColor}}>
            {Math.round(temp - (273.15 * 100) / 100)}℃
          </Text>
          {/* <Text style={{...styles.cityName, color: textColor}}>{humidity}</Text> */}
        </View>
        <View style={styles.extraInfo}>
          <View style={styles.info}>
            <Text style={{fontSize: 18, color: 'white'}}>humidity </Text>
            <Text style={{fontSize: 18, color: 'white'}}>{humidity}%</Text>
          </View>
          <View style={styles.info}>
            <Text style={{fontSize: 18, color: 'white'}}>wind Speed </Text>
            <Text style={{fontSize: 18, color: 'white'}}>{speed}m/s</Text>
          </View>
        </View>
        <Text
          style={{alignSelf: 'center', marginTop: 30}}
          onPress={() => navigation.navigate(BrandVoucher)}>
          Next
        </Text>
      </ImageBackground>
    </View>
  );
}
