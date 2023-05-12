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

const CashFundTransfer = () => {
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
          <Text style={styles.titleText}>Fund Transfer</Text>
        </View>
      </View>

      {/* input field */}
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}>
        <View style={styles.FundTransferInput}>
          <TextInput
            label="Beneficiart Name"
            textColor="#1D1D1D"
            value={textInput1}
            keyboardType="numeric"
            onChange={handleTextInput1Change}
            mode="outlined"
            style={styles.textinputBox}
            activeOutlineColor="#1D1D1D"
          />

          <View>
            <TextInput
              label="Remittance Reason"
              textColor="#1D1D1D"
              // value={textInput4}
              // keyboardType="numeric"
              // onChange={handleTextInput4Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />
            <TouchableOpacity>
              <View style={styles.dropDownIcon}>
                <Icon
                  name="caret-down"
                  color="#000000"
                  size={20}
                  style={{textAlign: 'right'}}
                />
              </View>
            </TouchableOpacity>
          </View>
          <TextInput
            label="Amount"
            textColor="#1D1D1D"
            value={textInput2}
            keyboardType="numeric"
            onChange={handleTextInput2Change}
            mode="outlined"
            style={styles.textinputBox}
            activeOutlineColor="#1D1D1D"
          />
          <TextInput
            label="Amount"
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
          <TouchableOpacity activeOpacity={1}>
            <Text style={styles.buttonText}>Transfer</Text>
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

  // textInput
  FundTransferInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    // marginTop: verticalScale(30),
  },
  textinputBox: {
    marginTop: verticalScale(26),
    // marginTop: verticalScale(24),
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
    marginTop: verticalScale(30),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
  dropDownTypeContainer: {
    width: scale(320),
    //flexDirection: 'row',
  },
  dropDownIcon: {
    position: 'absolute',
    bottom: 12,
    width: scale(300),
  },
});
export default CashFundTransfer;
