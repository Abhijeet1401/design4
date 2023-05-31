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
import CcIPinModal from './CcIPinModal';
import {TextInput} from 'react-native-paper';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import {useNavigation} from '@react-navigation/native';
import BillsPaymentStatus from './BillsPaymentStatus';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
const theme = {
  ...DefaultTheme,
  dark: true,
  // Add any additional dark theme configurations if needed
};

const CcBillsPayForm = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  //  handle TextInput
  const handleTextInput1Change = text => {
    setTextInput1(text);
  };

  const handleTextInput2Change = text => {
    setTextInput2(text);
  };
  const navigation = useNavigation();
  return (
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
          <Text style={styles.titleText}>Credit Card Bills Pay</Text>
        </View>
      </View>
      {/* information */}
      <View style={styles.informationContainer}>
        <Text style={styles.cardInformation}>
          Pay for all Visa, Mastercard, American Express, Diners & Rupay Credit
          Cards issued by all major banks.
        </Text>
      </View>
      {/* input field */}
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <View style={styles.VoucherInput}>
          <TextInput
            theme={theme}
            label="Credit Cards Number"
            textColor="#1D1D1D"
            value={textInput1}
            onChange={handleTextInput1Change}
            mode="outlined"
            style={
              styles.textinputBox
              // backgroundColor: '#FFFFFF',
              // fontFamily: 'Inter-Medium',
            }
            activeOutlineColor="#1D1D1D"
          />

          <TextInput
            theme={theme}
            label="Amount (INR)"
            textColor="#1D1D1D"
            value={textInput2}
            onChange={handleTextInput2Change}
            mode="outlined"
            style={
              styles.textinputBox
              // backgroundColor: '#FFFFFF',
              // fontFamily: 'Inter-Medium',
            }
            activeOutlineColor="#1D1D1D"
          />
        </View>

        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity onPress={() => setIsModalOpen(true)}>
            <Text style={styles.buttonText}>Pay</Text>
          </TouchableOpacity>
        </View>
        {/* show IpinModal */}
        {isModalOpen && (
          <CcIPinModal
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
        )}
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
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    width: scale(300),
  },
  titleText: {
    width: scale(270),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  // information
  informationContainer: {
    alignSelf: 'center',
    width: scale(327),
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Regular',
  },
  cardInformation: {
    color: '#727272',
  },
  // textInput
  VoucherInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    //marginTop: verticalScale(38),
  },
  textinputBox: {
    marginTop: verticalScale(24),
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter-Medium',
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(38),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
});
export default CcBillsPayForm;
