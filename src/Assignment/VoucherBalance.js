import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import CheckBalance from './CheckBalance';
import {TextInput} from 'react-native-paper';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const VoucherBalance = ({navigation}) => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  //  handle TextInput
  const handleTextInput1Change = text => {
    setTextInput1(text);
  };

  const handleTextInput2Change = text => {
    setTextInput2(text);
  };

  return (
    <View style={styles.container}>
      {/* header container */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            //backgroundColor: 'red',
            width: scale(300),
          }}>
          <TouchableOpacity style={{width: 30, height: 30}} activeOpacity={1}>
            <Icon
              onPress={() => navigation.goBack()}
              name="angle-left"
              size={30}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Check Voucher Balance</Text>
        </View>
      </View>
      {/* input field */}
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <View style={styles.VoucherInput}>
          <TextInput
            label="Gift card Number"
            textColor="#1D1D1D"
            value={textInput1}
            onChange={handleTextInput1Change}
            mode="outlined"
            style={{
              // marginBottom: 10,
              backgroundColor: '#FFFFFF',
              fontFamily: 'Inter-Medium',
            }}
            activeOutlineColor="#1D1D1D"
          />

          <TextInput
            label="Enter Pin,if provided"
            textColor="#1D1D1D"
            value={textInput2}
            onChange={handleTextInput2Change}
            mode="outlined"
            style={{
              //marginBottom: 10,
              backgroundColor: '#FFFFFF',
              marginTop: verticalScale(28),
              color: '#1D1D1D',
            }}
            activeOutlineColor="#1D1D1D"
          />
        </View>

        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate(CheckBalance)}>
            <Text style={styles.buttonText}>Check Balance</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    //backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  titleText: {
    width: scale(265),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },
  // textInput
  VoucherInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    marginTop: verticalScale(38),
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(359),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
});
export default VoucherBalance;
