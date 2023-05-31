import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import RemitterDetails from './RemitterDetails';
import {TextInput} from 'react-native-paper';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import {useNavigation} from '@react-navigation/native';
import CashTransfer from './CashTransfer';
import AddBeneficiaryScreen from './AddBeneficiaryScreen';
import BeneficiaryListScreen from './BeneficiaryListScreen';
const theme = {
  ...DefaultTheme,
  dark: true,
  // Add any additional dark theme configurations if needed
};

const RegisterRemitter = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');

  //  handle TextInput
  const handleTextInput1Change = text => {
    setTextInput1(text);
  };

  const handleTextInput2Change = text => {
    setTextInput2(text);
  };
  const handleTextInput3Change = text => {
    setTextInput3(text);
  };
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header container */}
        <View style={styles.header}>
          <View style={styles.headerView}>
            <TouchableOpacity
              style={{width: 30, height: 30}}
              activeOpacity={1}
              onPress={() => navigation.goBack()}>
              <Icon name="angle-left" size={30} color={'#0033A1'} />
            </TouchableOpacity>
            <Text style={styles.titleText}>Register New Remitter</Text>
          </View>
        </View>
        {/* input field */}

        <View style={styles.RegisterInput}>
          <TextInput
            label="Remitter Type"
            textColor="#1D1D1D"
            theme={theme}
            value={textInput1}
            onChange={handleTextInput1Change}
            mode="outlined"
            style={styles.textinputBox}
            activeOutlineColor="#1D1D1D"
            activeUnderlineColor="red"
          />

          <TextInput
            label="Source of income"
            theme={theme}
            textColor="#1D1D1D"
            value={textInput2}
            onChange={handleTextInput2Change}
            mode="outlined"
            style={styles.textinputBox}
            activeOutlineColor="#1D1D1D"
          />
          <TextInput
            label="Annual Income"
            theme={theme}
            textColor="#1D1D1D"
            value={textInput3}
            keyboardType="numeric"
            onChange={handleTextInput3Change}
            mode="outlined"
            style={styles.textinputBox}
            activeOutlineColor="#1D1D1D"
          />
        </View>
        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate(BeneficiaryListScreen)}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
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
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    width: scale(330),
  },
  titleText: {
    width: scale(315),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  // textInput
  RegisterInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    //marginTop: verticalScale(38),
  },
  textinputBox: {
    marginTop: verticalScale(24),
    backgroundColor: '#ffffff',
    fontFamily: 'Inter-Medium',
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(30),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
});
export default RegisterRemitter;
