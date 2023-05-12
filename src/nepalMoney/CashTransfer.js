import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Modal,
  ScrollView,
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

import AddBeneficiaryScreen from './AddBeneficiaryScreen';
import CashFundTransfer from './CashFundTransfer';

const CashTransfer = () => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const [textInput5, setTextInput5] = useState('');
  const [textInput6, setTextInput6] = useState('');

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
  const handleTextInput4Change = text => {
    setTextInput4(text);
  };
  const handleTextInput5Change = text => {
    setTextInput5(text);
  };
  const handleTextInput6Change = text => {
    setTextInput6(text);
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{flex: 1}}
        activeOpacity={1}
        onPress={() => Keyboard.dismiss()}>
        {/* input field */}
        <ScrollView>
          <View style={styles.RegisterInput}>
            <TextInput
              label="Beneficiary Mobile Number"
              textColor="#1D1D1D"
              value={textInput1}
              keyboardType="numeric"
              onChange={handleTextInput1Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />
            {/* drop down type inputBox start */}
            <View style={styles.dropDownTypeContainer}>
              <TextInput
                label="Relation Type"
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

            <View>
              <TextInput
                label="Gender"
                textColor="#1D1D1D"
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
            {/* remittance reason */}
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
              label="Beneficiart Name"
              textColor="#1D1D1D"
              value={textInput5}
              keyboardType="numeric"
              onChange={handleTextInput5Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />
            <TextInput
              label="Address"
              textColor="#1D1D1D"
              value={textInput6}
              onChange={handleTextInput6Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />
          </View>

          {/* button */}
          <View style={styles.button}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate(CashFundTransfer)}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
  RegisterInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(320),
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
export default CashTransfer;
