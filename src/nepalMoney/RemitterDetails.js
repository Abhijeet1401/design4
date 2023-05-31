import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import {TextInput} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import RegisterRemitter from './RegisterRemitter';
import ContactsMainScreen from '../contacts/ContactsMainScreen';
const theme = {
  ...DefaultTheme,
  dark: true,
  // Add any additional dark theme configurations if needed
};
const RemitterDetails = props => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectCountry, setSelectCountry] = useState('India');
  const handlePressCountry = prop => {
    //console.log('india', prop);
    setSelectCountry(prop);
  };
  const handleTextInput1Change = Number => {
    setMobileNumber(Number);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}>
        {/* indian nepal option container */}
        <View style={styles.transferOptionContainer}>
          {/* india */}

          <View style={styles.optionView}>
            <TouchableOpacity onPress={() => handlePressCountry('India')}>
              <View
                style={[
                  styles.indiaOption,
                  {
                    backgroundColor:
                      selectCountry === 'India' ? '#E2EAFA' : '#FFFFFF',
                  },
                ]}>
                <Image
                  source={require('../nepalMoney/Images/IndiaFlag.png')}
                  style={styles.indFlag}
                />
              </View>
            </TouchableOpacity>

            {/* nepal */}
            <TouchableOpacity onPress={() => handlePressCountry('Nepal')}>
              <View
                style={[
                  styles.nepalOption,
                  {
                    backgroundColor:
                      selectCountry === 'Nepal' ? '#E2EAFA' : '#FFFFFF',
                  },
                ]}>
                <Image
                  source={require('../nepalMoney/Images/nepalFlag.jpg')}
                  style={styles.nepalFlag}
                />
              </View>
            </TouchableOpacity>
          </View>
          {/* country label */}
          <View style={styles.countryLabelContainer}>
            <View style={styles.indLabelView}>
              <Text
                style={[
                  styles.indTextLabel,
                  {color: selectCountry == 'India' ? '#0033A1' : '#727272'},
                ]}>
                India
              </Text>
            </View>
            <View style={styles.nepalLabelView}>
              <Text
                style={[
                  styles.nepalTextLabel,
                  {color: selectCountry == 'Nepal' ? '#0033A1' : '#727272'},
                ]}>
                Nepal
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.textBtnContainer}>
          <View style={styles.textBtnView}>
            <TextInput
              label="Remitter Mobile Number"
              placeholderTextColor={'red'}
              textColor="#1D1D1D"
              theme={theme}
              value={mobileNumber}
              keyboardType="phone-pad"
              onChange={handleTextInput1Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />

            <TouchableOpacity
              activeOpacity={1}
              onPress={() => props.navigation.navigate(RegisterRemitter)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View style={styles.MerchantKycView}>
            <Text style={styles.merchantKycText}>Complete Merchant KYC</Text>
          </View>
        </TouchableOpacity>
        {/* Next Module*/}
        <View>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ContactsMainScreen)}>
            <View style={styles.linkPreviousTxn}>
              <Text style={styles.prevTxnText}>Next Module</Text>
            </View>
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
  transferOptionContainer: {
    height: verticalScale(100),
    alignSelf: 'center',
    width: scale(330),
    marginTop: verticalScale(23),
    // backgroundColor: 'red',
  },
  optionView: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scale(141),
    justifyContent: 'space-between',
  },

  indiaOption: {
    justifyContent: 'center',
    width: scale(58),
    height: verticalScale(58),
    borderRadius: verticalScale(10),
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
  },
  indFlag: {
    alignSelf: 'center',
  },
  nepalFlag: {
    alignSelf: 'center',
  },
  countryLabelContainer: {
    marginTop: verticalScale(13),
    flexDirection: 'row',
    // backgroundColor: 'green',
    width: scale(141),
    justifyContent: 'space-between',
  },
  labelView: {
    alignSelf: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    width: scale(135),
  },

  indLabelView: {
    width: scale(58),
  },
  nepalLabelView: {
    width: scale(58),
  },
  indTextLabel: {
    textAlign: 'center',
    //alignItems: 'center',
    color: '#727272',
  },
  nepalTextLabel: {
    textAlign: 'center',
    color: '#727272',
  },

  nepalOption: {
    alignItems: 'center',
    borderRadius: verticalScale(10),
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#C4C4C4',
    width: scale(58),
    height: verticalScale(58),
    borderRadius: verticalScale(10),
  },
  textBtnContainer: {
    marginTop: verticalScale(10),
    backgroundColor: '#FFFFFF',
    width: scale(330),
    alignSelf: 'center',
    height: verticalScale(178),
    borderTopWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: verticalScale(12),
    borderTopColor: '#FFFFFF',
    elevation: 2,
  },
  textBtnView: {
    height: verticalScale(123),
  },
  textinputBox: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    width: scale(298),
    marginTop: verticalScale(33),
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(21),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
  inputRemitter: {
    width: scale(300),
    alignSelf: 'center',
  },
  MerchantKycView: {
    marginTop: verticalScale(30),
    alignSelf: 'center',
  },
  merchantKycText: {
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Regular',
    color: '#0033A1',
    textDecorationLine: 'underline',
  },
  linkPreviousTxn: {
    marginTop: verticalScale(200),
    alignSelf: 'center',
  },
  prevTxnText: {
    fontFamily: 'Inter-Bold',
    color: '#0033A1',
    textDecorationLine: 'underline',
  },
});

export default RemitterDetails;
