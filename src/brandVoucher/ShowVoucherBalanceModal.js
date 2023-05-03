import {View, Text, FlatList, Modal} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import BrandVoucherMainScreen from './BrandVoucherMainScreen';
import CheckVoucherBalanceFormModal from './CheckVoucherBalanceFormModal';
import Pin from './IPinModal';

const data = [
  {
    id: 1,
    VoucherName: 'Book My Show',
    cardNumber: 'xxx98',
    AvalaibleBalance: '₹ 4,000',
    ExpiryDate: '04/02/23',
  },
];
const ShowVoucherBalanceModal = ({visible, onClose}) => {
  const navigation = useNavigation();
  // data to print on card

  const renderItem = ({item}) => {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.NameAndNum}>
          <Text style={styles.name}>{item.VoucherName}</Text>
          <Text style={styles.num}>{item.cardNumber}</Text>
        </View>
        <View style={styles.balandVal}>
          <View style={styles.BalanceContainer}>
            <Text style={styles.balanceName}>Avalaible Balance</Text>
            <Text style={styles.balance}>{item.AvalaibleBalance}</Text>
          </View>
          <View style={styles.validity}>
            <Text style={styles.ExpLabel}>Expiry Date</Text>
            <Text style={styles.date}>{item.ExpiryDate}</Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.container}>
        {/* header Container */}
        <View style={styles.header}>
          <View style={styles.headerView}>
            <TouchableOpacity style={{width: 30, height: 30}} activeOpacity={1}>
              <Icon
                onPress={() => navigation.navigate(BrandVoucherMainScreen)}
                name="angle-left"
                size={30}
                style={styles.arrow}
                color={'#0033A1'}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Check Voucher Balance</Text>
          </View>
        </View>
        {/* input field */}
        <View style={styles.card}>
          {/* <Image source={require('./assets/Images/VoucherCard.png')} /> */}
          <Image
            source={require('./assets/Images/NewGiftImage.png')}
            style={styles.giftImage}
          />
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {/* button */}
        <View style={styles.button}>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  // header css
  header: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
    // backgroundColor: 'green',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'red',
    width: scale(300),
    height: verticalScale(48),
  },
  titleText: {
    width: scale(265),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },

  // card css
  card: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(314),
    height: verticalScale(177),
    marginTop: verticalScale(16),
    borderRadius: verticalScale(12),
    backgroundColor: '#E7E7E7',
    backgroundImage:
      'linear-gradient(132.47deg, #FAFAFA 26.11%, #F0F0F0 102.53%)',
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(331),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: scaleFont(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },

  giftImage: {
    position: 'absolute',
    marginLeft: scale(200),
    top: scale(19),
    right: scale(21),
  },

  NameAndNum: {
    width: scale(130),
    height: verticalScale(40),
    // backgroundColor: 'red',

    marginLeft: scale(25),
    marginTop: verticalScale(27),
    marginBottom: verticalScale(45),
  },
  balandVal: {
    width: scale(275),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  validity: {},
  name: {
    color: '#1D1D1D',
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Regular',
  },
  num: {
    color: '#1D1D1D',
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Regular',
  },
  balanceName: {
    color: '#1D1D1D',
    fontFamily: 'Inter-Thin',
    fontSize: scaleFont(14),
  },
  balance: {
    color: '#1D1D1D',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Regular',
  },
  ExpLabel: {
    color: '#1D1D1D',
    fontFamily: 'Inter-Thin',
    fontSize: scaleFont(14),
  },
  date: {
    color: '#1D1D1D',
    fontSize: 18,
    fontFamily: 'Inter-Regular',
  },
});
export default ShowVoucherBalanceModal;
