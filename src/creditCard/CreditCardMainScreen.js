import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Keyboard,
  Image,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import CreditCardBillsPayForm from './CcBillsPayForm';
import CcBillsPayForm from './CcBillsPayForm';
import Navigation from '../MainNavigation/Navigation';
import PreviousTransanctions from './PreviousTransanctions';

const CreditCardMainScreen = props => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      {/* header container */}
      <View style={styles.header}>
        <View style={styles.headerView}>
          <TouchableOpacity style={{width: 30, height: 30}} activeOpacity={1}>
            <Icon name="angle-left" size={30} color={'#0033A1'} />
          </TouchableOpacity>
          <Text style={styles.titleText}></Text>
        </View>
      </View>
      {/* Credit Card details title */}
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>Pay Your Credit Cards Bills Here</Text>
      </View>
      {/* credit card Container */}
      <View style={styles.creditCardContainer}>
        <Image source={require('./Images/CreditCardImages.png')} />
      </View>

      {/* button */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => props.navigation.navigate(CcBillsPayForm)}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start Paying Bills</Text>
        </View>
      </TouchableOpacity>
      {/* link for previous transanction */}
      <TouchableOpacity
        onPress={() => props.navigation.navigate(PreviousTransanctions)}>
        <View style={styles.linkPreviousTxn}>
          <Text style={styles.prevTxnText}>See Previous Transactions</Text>
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
    width: scale(265),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },
  creditCardContainer: {
    marginTop: verticalScale(35),
    alignSelf: 'center',
    width: scale(330),
  },
  button: {
    width: scale(242),
    height: verticalScale(52),
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: verticalScale(6),
    backgroundColor: '#0033A1',
    marginTop: verticalScale(20),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: verticalScale(16),
    justifyContent: 'center',
    alignSelf: 'center',
    fontFamily: 'Inter-Regular',
  },
  cardHeader: {
    alignSelf: 'center',
  },
  cardTitle: {
    color: '#0033A1',
    alignSelf: 'center',
    width: scale(190),
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(24),
  },
  linkPreviousTxn: {
    marginTop: verticalScale(30),
    alignSelf: 'center',
  },
  prevTxnText: {
    fontFamily: 'Inter-Bold',
    color: '#0033A1',
    textDecorationLine: 'underline',
  },
});
export default CreditCardMainScreen;
