import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import Improvement from './Improve';
import Improve from './Improve';
import Icon4 from 'react-native-vector-icons/Ionicons';
import ImagePickerApp from '../Screen5/ImagePickerApp';

import Weather from '../Screen7/Weather';

const Rating = ({navigation}) => {
  const [starRating, setStarRating] = useState(0);
  const rate = [1, 2, 3, 4, 5];

  const handlePress = value => {
    setStarRating(value);
  };
  const handleSubmit = () => {
    if (starRating <= 3) {
      // console.log('How to')
      navigation.navigate('Improve', {rating: starRating});
    } else
      Linking.openURL(
        'https://play.google.com/store/apps/details?id=com.instantpay.in',
      );
  };
  const isSubmitDisabled = starRating === 0;
  return (
    <View style={styles.container}>
      <View>
        <View style={{backgroundColor: '#dcebfb', height: 370}}>
          <Image
            source={require('./images/background.png')}
            style={styles.img}
          />
        </View>

        <Icon
          name="angle-left"
          size={25}
          style={{
            marginTop: 30,
            position: 'absolute',
            marginLeft: 10,
            color: 'blue',
            fontWeight: 'bold',
          }}
        />
        <Text
          style={{
            marginLeft: 30,
            marginTop: 30,
            position: 'absolute',
            fontSize: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}>
          Rate Us
        </Text>
      </View>

      {/* ----------------------Text Container----------------------------------- */}
      <View style={{backgroundColor: 'white', marginTop: 30, height: 400}}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            Your Opinions
          </Text>
          <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black'}}>
            Matters To Us!
          </Text>
          <Text style={{marginTop: 20}}>
            Let Us Know what you feel about our Services.{' '}
          </Text>
          <Text>Give us a quick review and helps us to improve?</Text>
        </View>
        {/* ---------------------------Rating------------ */}
        <View style={styles.starsContainer}>
          {rate.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => handlePress(value)}
              onLongPress={() => handlePress(0)}>
              <Icon
                size={35}
                name={value <= starRating ? 'star' : 'star-o'}
                color={value <= starRating ? 'blue' : 'grey'}
              />
            </TouchableOpacity>
          ))}
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <TouchableOpacity
            style={[
              styles.button,
              isSubmitDisabled ? styles.disabledButton : styles.enabledButton,
            ]}
            onPress={handleSubmit}
            //disabled={isSubmitDisabled}
          >
            <Text style={styles.buttonTxt}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate(Weather)}>
            <Icon4
              name="arrow-back"
              size={26}
              style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(ImagePickerApp)}>
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
    width: '100%',
  },
  img: {
    width: '100%',
    height: 200,
    marginTop: 200,
  },

  textContainer: {
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
    backgroundColor: 'white',
  },
  button: {
    marginTop: 60,
    paddingVertical: 15,
    paddingHorizontal: 60,
    backgroundColor: 'blue',
    borderRadius: 5,
    width: '60%',
    // justifyContent:'center',
    // alignItems:'center'
  },
  buttonTxt: {
    color: 'white',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enabledButton: {
    backgroundColor: 'blue',
  },
  disabledButton: {
    backgroundColor: 'grey',
  },
  bottom: {
    width: '100%',
    // height: 50,
    //backgroundColor: '#EE5407',
    justifyContent: 'space-between',
    //alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0,
  },
});

export default Rating;
