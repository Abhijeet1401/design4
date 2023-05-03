import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import BillsPaymentStatus from './BillsPaymentStatus';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
const IPinModal = ({visible, onClose}) => {
  const [pin, setPin] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.statusbar}>
          <StatusBar
            backgroundColor="#FFFFFF"
            barStyle="dark-content"
            hidden={false}
          />
        </View>
        {/* header */}
        <View style={styles.header}>
          <View style={styles.innerView}>
            <TouchableOpacity style={{width: 30, height: 30}} activeOpacity={1}>
              <Icon
                onPress={onClose}
                name="angle-left"
                size={30}
                style={styles.arrow}
                color={'#0033A1'}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Paying</Text>
          </View>
        </View>

        {/*  title */}
        <View style={styles.titlePin}>
          <Text style={styles.pinText}>Enter iPIN</Text>
        </View>
        <View style={styles.pinInfo}>
          <Text style={styles.pinTextinfo}>
            Please enter your 4 digit IPIN to confirm.
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <TextInput
              color={'black'}
              onChange={pin => setPin(pin)}
              value={pin}
              placeholderTextColor={'black'}
              keyboardType="numeric"
              style={styles.input}
              maxLength={1}
            />
            <TextInput
              color={'black'}
              onChange={pin => setPin(pin)}
              value={pin}
              keyboardType="numeric"
              style={styles.input}
              maxLength={1}
            />
            <TextInput
              color={'black'}
              onChange={pin => setPin(pin)}
              value={pin}
              keyboardType="numeric"
              style={styles.input}
              maxLength={1}
            />
            <TextInput
              color={'black'}
              onChange={pin => setPin(pin)}
              value={pin}
              keyboardType="numeric"
              style={styles.input}
              maxLength={1}
            />
          </View>
        </View>
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.forgot}>
            <Text style={styles.ForgotiPin}>Forgot iPin?</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.proceedButton}
          onPress={() => setIsModalOpen(true)}>
          <Text style={styles.submitText}>Proceed</Text>
        </TouchableOpacity>
        {/* open Transanction Status Modal */}
        {isModalOpen && (
          <BillsPaymentStatus
            visible={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            //  statusbar={StatusBar}
          />
        )}
      </View>
    </Modal>
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

    // backgroundColor: 'green',
  },
  innerView: {
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
    // backgroundColor: 'red',
  },

  titlePin: {
    marginTop: verticalScale(30),
    // marginBottom: 12,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pinText: {
    fontSize: scaleFont(24),

    height: verticalScale(32),
    fontWeight: 'bold',
    color: '#0033A1',
    fontFamily: 'Inter-Bold',
  },
  pinInfo: {
    marginTop: verticalScale(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinTextinfo: {
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Medium',
    color: '#727272',
  },
  inputContainer: {
    alignSelf: 'center',
  },
  inputBox: {
    marginTop: verticalScale(23),
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  input: {
    borderWidth: 0.3,
    margin: scale(8),
    height: verticalScale(48),
    width: 41,
    textAlign: 'center',
    borderRadius: verticalScale(8),
  },
  forgot: {
    marginTop: verticalScale(21),
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ForgotiPin: {
    textAlign: 'center',
    color: '#0033A1',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-SemiBold',
  },
  proceedButton: {
    marginTop: verticalScale(27),
    height: verticalScale(52),
    backgroundColor: '#0033A1',
    width: scale(242),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
  },
  submitText: {
    color: '#FFFFFF',
    fontFamily: 'Inter-Regular',
    fontSize: scaleFont(16),
    alignItems: 'center',
    alignSelf: 'center',
  },
});
export default IPinModal;
