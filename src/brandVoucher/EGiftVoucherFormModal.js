import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Dimensions,
  Modal,
} from 'react-native';

import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';

import BulkEgift from './BulkEgift';
import IPinModal from './IPinModal';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import {useNavigation} from '@react-navigation/native';
import TermCondition from './TermCondition';

const EGiftVoucherFormModal = ({visible, onClose}) => {
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');
  const [textInput3, setTextInput3] = useState('');
  const [textInput4, setTextInput4] = useState('');
  const navigation = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  //const [isModal2Open, setIsModal2Open] = useState(false);
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

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        {/* header  */}
        <View style={styles.header}>
          <View style={styles.headerView}>
            <TouchableOpacity
              style={{width: 30, height: 30}}
              activeOpacity={1}
              //onPress={() => navigation.goBack()}
              onPress={onClose}>
              <Icon
                name="angle-left"
                size={30}
                style={styles.arrow}
                color={'#0033A1'}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>eGift Voucher</Text>
          </View>
        </View>

        {/* voucher Image */}
        {/* content */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.Voucher}>
            <Image
              source={require('./assets/Images/bmshowVoucher.jpg')}
              style={{width: scale(330), height: verticalScale(157)}}
            />
          </View>
          <View style={styles.msg}>
            <Text style={styles.msgText}>Book my Show Voucher(1 month)</Text>
            <TouchableOpacity
              style={styles.termview}
              onPress={() => navigation.navigate(TermCondition)}>
              <Text style={styles.termtext}>T&C</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contentContainer}>
            <View style={styles.VoucherInput}>
              <TextInput
                activeOutlineColor="#1D1D1D"
                label="Sender"
                value={textInput1}
                onChange={handleTextInput1Change}
                mode="outlined"
                style={
                  styles.textInputBox
                  //height: verticalScale(49),
                }
              />
              <TextInput
                activeOutlineColor="#1D1D1D"
                label="Reciever"
                value={textInput2}
                onChange={handleTextInput2Change}
                mode="outlined"
                style={styles.textInputBox}
              />
              <TextInput
                activeOutlineColor="#1D1D1D"
                label="Message"
                value={textInput3}
                onChangeText={handleTextInput3Change}
                mode="outlined"
                style={styles.textInputBox}
              />
              <TextInput
                activeOutlineColor="#1D1D1D"
                label="Amount"
                value={textInput4}
                onChange={handleTextInput4Change}
                mode="outlined"
                style={styles.textInputBox}
              />
            </View>

            {/* button */}
            <View style={styles.button}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => setIsModalOpen(true)}>
                <Text style={styles.buttonText}>Send Voucher</Text>
              </TouchableOpacity>
            </View>
            {/* open IPin Modal */}
            {isModalOpen && (
              <IPinModal
                visible={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                //  statusbar={StatusBar}
              />
            )}
            {/* term condition modal */}

            <View style={styles.extraInfo}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => navigation.navigate(BulkEgift)}>
                <Text style={styles.info}>Gift to Multiple Recipents</Text>
              </TouchableOpacity>
            </View>
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
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'green',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: scale(160),
  },
  titleText: {
    width: scale(128),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    //backgroundColor: 'red',
  },
  contentContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    height: verticalScale(600),
  },
  Voucher: {
    width: scale(330),
    alignSelf: 'center',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    height: verticalScale(157),
    justifyContent: 'center',
    marginTop: verticalScale(13),
    alignItems: 'center',
  },
  textInputBox: {
    backgroundColor: '#FFFFFF',
    marginTop: verticalScale(24),
  },
  msg: {
    width: scale(314),
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(22),
    // marginBottom: verticalScale(26),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  msgText: {
    fontFamily: 'Inter-Bold',
    fontStyle: 'normal',
    fontSize: scaleFont(12),
    color: '#1D1D1D',
  },
  termview: {
    flexDirection: 'row',
    color: '#0033A1',
  },
  termtext: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontSize: scaleFont(12),
    color: '#0033A1',
    textDecorationLine: 'underline',
  },
  VoucherInput: {
    //backgroundColor: 'red',
    // margin: 'auto'
    width: scale(330),
  },
  button: {
    width: scale(242),
    marginTop: verticalScale(24),
    height: verticalScale(52),
    borderRadius: verticalScale(6),
    marginBottom: scale(9),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0033A1',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Regular',
  },
  extraInfo: {},
  info: {
    color: '#0033A1',
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
  },
});

export default EGiftVoucherFormModal;
