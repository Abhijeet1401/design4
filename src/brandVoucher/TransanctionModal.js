import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-virtualized-view';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const data = [
  {key: 'Recipients', value: 'sanju@gmail.com'},
  {key: 'Sender', value: 'Sanjay Singh Chauhan'},
  {key: 'Order ID', value: 'Sanjay Singh Chauhan'},
  {key: 'Amount', value: '4,500'},
  {key: 'eVoucher', value: 'Book my Show eVoucher'},
];
const TransanctionModal = ({visible, onClose}) => {
  const renderItem = ({item}) => (
    <View
      style={
        styles.TransanctionContentView
        //alignSelf: 'center',
      }>
      <View style={styles.content}>
        <Text style={styles.item}>{item.key}:</Text>
        <Text style={styles.item2}>{item.value}</Text>
      </View>
    </View>
  );
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerInnerView}>
            <Icon
              onPress={onClose}
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
            <Text style={styles.titleText}></Text>
          </View>
          <Icon2
            name="share-social-outline"
            size={25}
            color={'#0033A1'}
            style={styles.shareIcon}
          />
        </View>

        {/* header Ends */}
        {/* text section */}
        <View style={styles.contentContainer}>
          <View style={styles.recipient}>
            <Text style={styles.recpname}>
              Myntra Voucher to Ramesh Gupta ₹ 4,500
            </Text>
            {/* <View style={styles.amtContainer}>
            <Text style={styles.amt}>₹ 4,500</Text>
          </View> */}
          </View>

          {/* order detail container */}
          <View style={styles.OrderContainer}>
            <Text style={styles.orderNum}>Order Number: 2890892386</Text>
          </View>

          <View>
            <Text style={styles.statusInfo}>
              <Icon name="check-circle" style={{color: '#00C337'}} />
              {'   '} Completed on 12/04/22 at 17:24
            </Text>
          </View>
          <View style={styles.cards}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.key}
            />
          </View>
          {/* card 2 */}
          <View style={styles.cards2}>
            <View style={{width: scale(280), alignSelf: 'center'}}>
              <Text style={styles.msgTitle}>Message:</Text>
              <View>
                <Text style={styles.message}>
                  Happy 5th Anniversary.Celebrate it{'\n'}with Instantpay
                </Text>
              </View>
            </View>
          </View>
          {/* button container  */}

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={
                styles.btnResendText
                // flex: 1,
                // justifyContent: 'center',
                //  alignItems: 'center',
                // fontFamily: 'Inter-Medium',
              }>
              <Text style={{color: '#FFFFFF', fontSize: scaleFont(16)}}>
                Resend
              </Text>
            </TouchableOpacity>
            <View style={{height: verticalScale(22)}}>
              <View style={styles.seprator} />
            </View>
            <TouchableOpacity
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text style={styles.btnCancelText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    margin: 'auto',
  },
  header: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    // backgroundColor: 'green',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInnerView: {
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

  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  TransanctionContentView: {
    alignSelf: 'center',
  },
  content: {
    paddingTop: 10,
    width: scale(280),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  recipient: {
    width: scale(150),
    alignContent: 'center',
    marginTop: verticalScale(10),
    alignContent: 'center',
    justifyContent: 'center',
  },
  recpname: {
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(18),
    color: '#1D1D1D',
    textAlign: 'center',
  },
  amt: {
    width: scale(90),
    color: '#1D1D1D',
    fontSize: scaleFont(22),
  },
  amtContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
  },
  OrderContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    height: verticalScale(50),
    width: scale(290),
    marginTop: verticalScale(12),
    // paddingTop: 20,
    // paddingBottom:20,
    borderRadius: verticalScale(6),
    marginBottom: verticalScale(12),
  },
  orderNum: {
    fontSize: scaleFont(14),
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#727272',
    fontStyle: 'normal',
    fontFamily: 'Inter-Bold',
    lineHeight: verticalScale(20),
  },
  statusInfo: {
    margintop: verticalScale(22),
    color: '#1D1D1D',
    fontFamily: 'Inter-Medium',
  },
  cards: {
    backgroundColor: '#FFFFFF',
    height: verticalScale(191),
    width: scale(330),
    elevation: 2,
    shadowColor: '#686868',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    borderRadius: verticalScale(6),
    paddingBottom: 10,
    marginTop: verticalScale(22),
    // boxShadow: '0px 4px 8px 0px #68686826',
  },
  cards2: {
    elevation: 2,
    shadowColor: '#686868',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.15,
    shadowRadius: 8,
    marginTop: verticalScale(12),
    width: scale(330),
    height: verticalScale(88),
    backgroundColor: '#FFFFFF',
    borderRadius: verticalScale(6),
  },
  item: {
    //backgroundColor: 'red',
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Bold',
    color: '#727272',
  },
  item2: {
    padding: verticalScale(3),
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Bold',
    color: '#1D1D1D',
  },
  buttonContainer: {
    width: scale(250),
    height: verticalScale(52),
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(35),
    backgroundColor: '#0033A1',
    borderRadius: verticalScale(6),
  },
  btnResendText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Inter-Medium',
  },
  seprator: {
    height: verticalScale(20),
    alignContent: 'center',
    width: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    fontSize: scaleFont(16),
  },
  btnCancelText: {
    color: '#FFFFFF',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Medium',
  },

  msgTitle: {
    // marginLeft: 30,
    // marginTop: 10,
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(14),
  },
  message: {
    // marginLeft: 29,
    marginTop: verticalScale(7),
    fontSize: scaleFont(14),
    color: '#1D1D1D',
    fontFamily: 'Inter-Bold',
  },
});
export default TransanctionModal;
