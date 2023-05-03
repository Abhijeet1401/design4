import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import EGiftVoucher from './EGiftVoucherFormModal';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import EGiftVoucherFormModal from './EGiftVoucherFormModal';
import {useNavigation} from '@react-navigation/native';

const TermCondition = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* header starts */}
      <View style={styles.header}>
        <View style={styles.headerView}>
          <TouchableOpacity
            style={{width: 30, height: 30}}
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
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
      {/* Voucher */}
      <ScrollView>
        <View style={styles.Voucher}>
          <Image
            source={require('./assets/Images/bmshowVoucher.jpg')}
            style={{width: '100%', height: verticalScale(157)}}
          />
        </View>
        <View style={styles.msg1}>
          <Text style={styles.msg1Txt}>
            BookMyShow is India's biggest online movie and events ticketing
            brand. The website caters to ticket sales for movies, plays,
            concerts and sporting events via the online platform.
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.msg2}>
            <Text style={styles.textTerm}>Terms & Conditions</Text>
          </View>
          <Text style={styles.detailsTxt}>
            • Gift Voucher can be redeemed only on BookMyShow Website/Mobile App
            & cannot be redeemed directly at the Cinema/Venue Box Office.
            {'\n\n'}• Gift Voucher can be redeemed on purchase of e-tickets for
            Movies/Plays/Concerts/Sports Or Merchandise (if any) available on
            BookMyShow.{'\n\n'}• Multiple Gift Voucher can be used in a single
            transaction or Gift Voucher can be combined with any other payment
            type on BookMyShow.{'\n\n'}• Gift Voucher can be used multiple times
            until the last rupee loaded on it gets exhausted within the validity
            period. Gift Voucher to be valid for 6 months.{'\n\n'}• Gift Voucher
            cannot be used to top up MyWallet or to purchase another Gift Card.
            {'\n\n'}• Gift Voucher work on non-extension clause & order once
            confirmed cannot be Cancelled or Refunded.{'\n\n'}• Gift Voucher are
            valid PAN India across all Cinemas/Partners associated with
            BookMyShow.{'\n\n'}• If lost misused, the Gift Voucher cannot be
            replaced. Void if resold, cannot be exchanged for points or cash &
            cannot be re-validated once past expiry date.{'\n\n'}• In addition
            to these Terms & Conditions, BookMyShow Gift Voucher & their use on
            our Website are also subject to BookMyShow's General Terms of Use &
            BookMyShow's decision will be final in case of any dispute.{'\n\n'}•
            BookMyShow Terms & Conditions Apply.
          </Text>
        </View>
      </ScrollView>
      {/*  */}

      {/* button */}
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate(EGiftVoucher)}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
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
    // backgroundColor: 'red',
  },
  Voucher: {
    width: scale(330),
    alignSelf: 'center',
    //backgroundColor: 'blue',
    flexDirection: 'row',
    height: verticalScale(157),
    justifyContent: 'center',
    //marginTop: verticalScale(13),
    alignItems: 'center',
  },
  msg1: {
    width: scale(330),
    height: verticalScale(60),
    marginTop: verticalScale(13),
    alignSelf: 'center',
    fontSize: scaleFont(12),
    color: '#727272',
  },
  msg1Txt: {
    fontFamily: 'Inter-Regular',
    fontSize: scaleFont(12),
    //: verticalScale(16),
    color: '#727272',
  },
  button: {
    width: scale(242),
    marginTop: verticalScale(20),
    height: verticalScale(52),
    borderRadius: verticalScale(6),
    marginBottom: verticalScale(9),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0033A1',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
  },
  msg2: {
    //backgroundColor: 'red',
    width: scale(116),
    // height: verticalScale(16),
    marginBottom: verticalScale(9),
  },
  textTerm: {
    fontFamily: 'Inter-Bold',
    fontStyle: 'normal',
    fontSize: scaleFont(12),
    color: '#1D1D1D',
  },
  details: {
    // backgroundColor: 'red',
    // marginTop: verticalScale(24),
    width: scale(325),
    //height: verticalScale(400),
    alignSelf: 'center',
    marginBottom: verticalScale(40),
  },
  detailsTxt: {
    fontFamily: 'Inter-Regular',
    fontStyle: 'normal',
    fontSize: scaleFont(12),
    color: '#727272',
  },
});

export default TermCondition;
