import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ImageBackground,
  useWindowDimensions,
  ScrollView,
  ActivityIndicator,
  Animated
} from 'react-native';
import React, {useState, useEffect,useref} from 'react';
import Locations from './Model/location';
import {
  getWeather,
  dailyForecast,
  showWeather,
  getLocation,
} from 'react-native-weather-api';
// data

const Weather2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_KEY = '151c938f2f7204b0dda7b2a378fe9ba5';
  const API =
    'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={50bd2917d5dbf448fd859b8af17d06bf}';

  // async function fetchWeatherData(cityName) {
  //   setLoading(false);
  //   const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  //   try {
  //     const response = await fetch(API);
  //     if (response.status == 200) {
  //       const data = await response.json();
  //       setData(data);
  //     } else {
  //       setData(null);
  //     }
  //     setLoading(true);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(() => {
  //   fetchWeatherData('mumbai'), console.log(data, 'hello');
  // }, []);
  const scrollX =useref(new Animated.Value(0)).current;
  const {width: windowWidth, height: windowHeight} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled
        showsHorizontalScrollIndicator={false}>
        {Locations.map((location, index) => {
          if (location.weatherType === 'Sunny') {
            bgImg = require('../../assets/Images/Sunny.png');
          } else if (location.weatherType === 'Night') {
            bgImg = require('../../assets/Images/night01.png');
          } else if (location.weatherType === 'Cloudy') {
            bgImg = require('../../assets/Images/Haze.jpg');
          } else if (location.weatherType === 'Rainy') {
            bgImg = require('../../assets/Images/rainy01.jpg');
          }
          return (
            <View
              style={{width: windowWidth, height: windowHeight}}
              key={index}>
              <ImageBackground source={bgImg} style={{flex: 1}}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.3)',padding:20}}>
                <Text style={{color:'white'}}>{location.city}</Text>
              </View>


              </ImageBackground>

            </View>
          );
        })}
      </ScrollView>
      <View style={{position:'absolute',top:160,left:20,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        {Locations.map((location,index)=>{
          return(
            <Animated.View style={{height:5,width:5,borderRadius:5,marginHorizontal:4,backgroundColor:'#fff'}}/>
          )
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  titleContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Weather2;
