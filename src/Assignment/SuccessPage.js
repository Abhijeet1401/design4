import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import BrandVoucher from './BrandVoucher';
const SuccessPage = ({navigation}) => {
  const renderItem = ({item}) => (
    <View
      style={{
        width: scale(280),
        flexDirection: 'row',
        padding: 4,
        alignSelf: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        //marginTop: 5,
      }}>
      <Text style={styles.item}>{item.key}:</Text>
      <Text style={[styles.item2, item.key === 'Amount' && styles.amount]}>
        {item.value}
      </Text>
    </View>
  );
  const data = [
    {key: 'Recipients', value: 'sanju@gmail.com'},
    {key: 'Sender', value: 'Sanjay Singh Chauhan'},
    {key: 'OrderID', value: 'Sanjay Singh Chauhan'},
    {key: 'Amount', value: '₹ 4,500', color: '#0033A1'},
    {key: 'eVoucher', value: 'Book my Show eVoucher'},
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: scale(160),
          }}>
          <TouchableOpacity>
            <Icon
              onPress={() => navigation.goBack()}
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>eGift Voucher</Text>
        </View>
      </View>

      {/*  */}
      <View style={styles.card}>
        <Text style={styles.statusText}>Transaction Successful</Text>
        <View style={styles.dashedLine}>{/* Your content here */}</View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.key}
        />
      </View>
      {/* button */}
      <View style={styles.button}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.navigate(BrandVoucher)}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.iconContainer}>
        <View style={styles.iconBorder}>
          <View style={[styles.iconCircle, styles.iconMargin]}>
            <Text style={styles.iconText}>
              <Icon3 name="check-bold" size={90} />
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    width: scale(330),
    height: verticalScale(48),
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
  },

  titleText: {
    width: scale(128),
    color: '#0033A1',
    //fontSize: scaleFonts(18),
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
    // backgroundColor: 'red',
  },
  statusText: {
    // marginTop: verticalScale(10),
    color: '#00C337',
    fontFamily: 'Inter-Medium',
    fontSize: scaleFont(15),
    alignSelf: 'center',
    marginBottom: verticalScale(10),
  },
  card: {
    width: scale(330),
    alignSelf: 'center',
    backgroundColor: '#fff',
    padding: verticalScale(10),
    alignItems: 'center',
    marginTop: verticalScale(90),
    paddingTop: verticalScale(80),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 2,
    //margin: 10,
  },

  amount: {
    fontSize: scaleFont(16),
    color: '#0033A1',
    fontWeight: 'bold',
  },
  iconContainer: {
    position: 'absolute',

    top: 50,
    left: scale(165),
    transform: [{translateX: -50}],
  },
  iconCircle: {
    width: 130,
    height: 130,
    borderRadius: 70,
    backgroundColor: '#00C337',
    border: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconBorder: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    overflow: 'hidden',
  },
  iconText: {
    color: '#fff',
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dashedLine: {
    width: scale(294),
    alignSelf: 'center',
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#ddd',
    //  marginTop: verticalScale(100),
    marginBottom: verticalScale(14),
  },
  item: {
    alignSelf: 'center',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Regular',
    color: '#727272',
    // paddingLeft: 15,
    // paddingRight: 15,

    // fontFamily: 'Inter-Medium',
  },
  item2: {
    // paddingLeft: 15,
    // paddingRight: 15,
    fontSize: scaleFont(12),
    color: '#1D1D1D',
    //fontFamily: 'Inter-SemiBold',
    fontFamily: 'Inter-Medium',
  },
  buttonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Regular',
    lineHeight: verticalScale(24),
  },
  button: {
    width: scale(242),
    marginTop: verticalScale(181),
    height: verticalScale(52),
    borderRadius: verticalScale(6),
    marginBottom: verticalScale(9),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0033A1',
  },
});

export default SuccessPage;
