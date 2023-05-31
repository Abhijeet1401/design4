import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

// const data = [
//   {key: 'Recipients', value: 'sanju@gmail.com'},
//   {key: 'Sender', value: 'Sanjay Singh Chauhan'},
//   {key: 'Order ID', value: 'Sanjay Singh Chauhan'},
//   {key: 'Amount', value: '4,500'},
//   {key: 'eVoucher', value: 'Book my Show eVoucher'},
// ];
const AddBulkContact = ({navigation}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  const handleBulkImagePress = () => {
    setIsDisabled(false);
  };
  function handleSendVoucher() {
    console.log('voucher Send');
  }

  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: scale(155),
          }}>
          <Icon
            onPress={() => navigation.goBack()}
            name="angle-left"
            size={30}
            style={styles.arrow}
            color={'#0033A1'}
          />
          <Text style={styles.titleText}>Bulk Contact</Text>
        </View>
      </View>

      {/* Success Image Section*/}

      <View style={styles.BulkContainer}>
        <TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Image
              onPress={handleBulkImagePress}
              source={require('../contacts/Images/BulkImage.png')}
              style={[styles.BulkImg]}
            />
            {/* <Image
              source={require('./assets/Images/BulkArrow.jpg')}
              style={styles.Bulkarrow}
            /> */}
          </View>
        </TouchableOpacity>
        <View style={styles.instructions}>
          <Text style={styles.ins}>Click CSV file(s)</Text>
          <Text style={styles.ins}> here to upload</Text>
        </View>
      </View>

      {/* <View style={styles.info}>
        <View style={styles.titleInfo}>
          <Text>Book My Show eGift Voucher</Text>
        </View>
        <Text>
          {'\u2022'}Download the template and fill out the Excel file.
          {'\n\u2022'}The amount disbursed should be in rupees and not less than
          Rs 1.
          {'\n\u2022'}Ensure the file is in the correct required format.
          {'\n\u2022'}The total payout should be less than the account balance.
        </Text>
      </View> */}

      <View style={[styles.button]}>
        <TouchableOpacity onPress={handleSendVoucher} disabled={isDisabled}>
          <Text style={[styles.buttonText]}>Proceed</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.border}></View>
      <View style={styles.template}>
        <Text style={styles.templateTxt}>Download Template</Text>
      </View>
      <View style={styles.downloadformatOption}>
        <View>
          <Text style={styles.textFormat}>XLSX</Text>
        </View>
        <View>
          <Text style={styles.textFormat}>CSV</Text>
        </View>
      </View>
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
    // backgroundColor: 'green',
  },

  titleText: {
    width: scale(128),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  BulkContainer: {
    // backgroundColor: 'green',
    width: scale(330),
    borderWidth: 2,
    alignSelf: 'center',
    marginTop: verticalScale(27),
    borderStyle: 'dashed',
    borderColor: '#BEBEBE',
    borderRadius: verticalScale(10),
    height: verticalScale(245),
  },
  Bulkarrow: {
    alignSelf: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: verticalScale(75),
    //top: verticalScale(70),
    // left: scale(140),
  },
  instructions: {
    alignSelf: 'center',
    alignContent: 'center',
    marginTop: verticalScale(23),
  },
  ins: {
    fontSize: scaleFont(14),
    color: '#404040',

    letterSpacing: 0.0025,
    fontFamily: 'Inter-Regular',
  },
  titleInfo: {
    marginTop: verticalScale(9),
    // alignSelf: 'center',
    // marginLeft: scale(45),
    color: '#1D1D1D',
    fontFamily: 'Inter-SemiBold',
    fontStyle: 'normal',
    marginBottom: verticalScale(10),
    fontSize: scaleFont(12),
  },
  info: {
    width: scale(329),
    alignSelf: 'center',
    marginTop: verticalScale(9),
    // backgroundColor: 'red',
  },
  BulkImg: {
    alignSelf: 'center',
    marginTop: verticalScale(57),
  },
  button: {
    width: scale(242),
    marginTop: verticalScale(31),
    height: verticalScale(52),
    borderRadius: verticalScale(6),
    marginBottom: verticalScale(9),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0033A1',
    //borderRadius: verticalScale(6),
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
  },
  template: {
    alignSelf: 'center',
    marginTop: verticalScale(26),
  },
  templateTxt: {
    color: '#1D1D1D',
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Medium',
    //textDecorationLine: 'underline',
  },
  activeButton: {
    backgroundColor: 'blue',
  },
  border: {
    width: scale(330),
    marginTop: verticalScale(34),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },
  downloadformatOption: {
    width: scale(170),
    marginTop: verticalScale(15),
    justifyContent: 'space-between',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textFormat: {
    color: '#0033A1',
    fontFamily: 'Inter-Medium',
    textDecorationLine: 'underline',
  },
});
export default AddBulkContact;
