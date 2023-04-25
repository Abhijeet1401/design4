import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import WeatherInfo from './WeatherInfo';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {haze, rainy, snow, sunny} from '../../assets/Images/index';
import SearchBar from '../Screen7/SearchBar';
import Navigation from '../MainNavigation/Navigation';

// data

const Weather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const API_KEY = '151c938f2f7204b0dda7b2a378fe9ba5';
  // const API =
  //   'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={50bd2917d5dbf448fd859b8af17d06bf}';

  async function fetchWeatherData(cityName) {
    setLoading(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setData(data);
      } else {
        setData(null);
      }
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchWeatherData('Delhi');
    //console.log(data, 'hello');
  }, []);
  if (!loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="grey" size={36} />
      </View>
    );
  } else if (data === null) {
    return (
      <View>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Image
            source={require('../../assets/Images/wrongCity.png')}
            style={{width: 200, height: 200, marginTop: 20}}
          />
          <Text style={{fontSize: 26, fontWeight: 'bold', fontStyle: 'italic'}}>
            City Not Found!!
          </Text>
          <Text style={{fontSize: 16, fontWeight: 'bold', fontStyle: 'italic'}}>Please search Another city</Text>
        </View>

        <View style={styles.searchAgain}>
          <SearchBar fetchWeatherData={fetchWeatherData} />
        </View>
      </View>
    );
  }
  // const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {/* <Text>Weather app</Text> */}

      <WeatherInfo data={data} fetchWeatherData={fetchWeatherData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  searchAgain: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200,
    width: '100%',
    marginLeft:10,
    marginRight:20
  }
});
export default Weather;
