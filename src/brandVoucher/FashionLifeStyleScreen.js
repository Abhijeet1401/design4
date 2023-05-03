import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
//import EGiftVoucherFormModal from './EGiftVoucherFormModal';
import Icon3 from 'react-native-vector-icons/AntDesign';

import image1 from './assets/Images/bmshowVoucher.jpg';
import image2 from './assets/Images/bmshowVoucher.jpg';
import image3 from './assets/Images/bmshowVoucher.jpg';
import FilterVoucherModal from './FilterVoucherModal';
import {ScrollView} from 'react-native-virtualized-view';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import EGiftVoucherFormModal from './EGiftVoucherFormModal';
const data = [
  {
    id: 1,
    image: image1,
    title: 'Mitsubhishi Pencil Co. Ltd',
    range: '₹10,500 - ₹20,000',
  },
  {
    id: 2,
    image: image2,
    title: 'Mitsubhishi Pencil Co. Ltd',
    range: '₹10,500 - ₹20,000',
  },
  {
    id: 3,
    image: image3,

    title: 'Mitsubhishi Pencil Co. Ltd',
    range: '₹10,500 - ₹20,000',
  },
];
const FashionLifeStyleScreen = ({navigation}) => {
  const renderCard = ({item}) => {
    return (
      <View style={styles.mainCard}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => {
            navigation.navigate(EGiftVoucherFormModal);
          }}
          // onPress={() => setIsModal2Open(true)}
        >
          <Image style={styles.image} source={item.image} />
          <Text style={styles.textTitle}>{item.title}</Text>
          <Text style={styles.textRange}>{item.range}</Text>
          <Text style={styles.buynow}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    );
  };
  const [text, setText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  return (
    <View style={styles.container}>
      {/* header  */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity activeOpacity={1} style={{width: 30, height: 30}}>
            <Icon
              onPress={() => navigation.goBack()}
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Fashion Lifestyle</Text>
        </View>

        <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => setIsModalOpen(true)}>
            <Icon3 name="filter" style={styles.filter} size={25} />
          </TouchableOpacity>
          <Icon name="rupee" size={25} style={styles.icon} color="#048848" />
        </View>
      </View>

      {/* search container */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.SearchContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              onChange={txt => setText(txt)}
              value={text}
              placeholderTextColor={'#727272'}
              style={
                styles.textInput
                // flex: 1,
                // fontSize: scaleFont(12),
                // color: '#727272',
                // fontFamily: 'Inter-Regular',
              }
              placeholder="Search for Voucher"
            />
            <View style={styles.searchIcon}>
              <Icon
                name="search"
                style={{
                  color: '#1D1D1D',
                }}
                size={20}
              />
            </View>
          </View>
        </View>
        {/*  Voucher Cards  */}
        <View>
          <FlatList
            data={data}
            renderItem={renderCard}
            keyExtractor={item => item.id.toString()}
          />
        </View>

        {isModalOpen && (
          <FilterVoucherModal
            visible={isModalOpen}
            transparent={true}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  // CSS For Header
  header: {
    height: verticalScale(48),
    width: scale(330),
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  headerLeft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(160),
    //backgroundColor: 'green',
    //width: '70%',
    flexDirection: 'row',
  },
  headerRight: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: scale(60),
  },
  titleText: {
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },
  icon: {
    // marginLeft: 21,
  },
  filter: {
    color: '#0033A1',
  },
  // CSS Search Container

  SearchContainer: {
    marginTop: verticalScale(16),
    height: verticalScale(50),
    width: scale(330),
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(12),
    alignSelf: 'center',
    //backgroundColor: 'red',
  },
  inputContainer: {
    width: scale(300),
    height: verticalScale(50),
    //backgroundColor: 'green',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    //paddingLeft: 15,
    flexDirection: 'row',
  },
  textInput: {
    flex: 1,
    fontSize: scaleFont(12),
    color: '#727272',
    fontFamily: 'Inter-Regular',
  },
  mainCard: {
    width: scale(330),
    elevation: 2,
    alignSelf: 'center',
    alignItems: 'center',
    height: verticalScale(205),
    //boxShadow: '0px 1px 3px rgba(255, 255, 255, 0.6), 0px 4px 8px rgba(104, 104, 104, 0.15)',
    backgroundColor: '#FFFFFF',
    borderRadius: verticalScale(6),
    marginTop: verticalScale(16),
  },
  image: {
    marginTop: verticalScale(13),
    alignSelf: 'center',
    width: scale(280),
    height: verticalScale(125),
  },
  textTitle: {
    width: scale(155),
    height: verticalScale(15),
    marginTop: verticalScale(6.45),
    lineHeight: verticalScale(15),
    alignSelf: 'center',
    fontFamily: 'Inter-Bold',
    color: '#1D1D1D',
  },
  textRange: {
    marginTop: verticalScale(3),
    lineHeight: verticalScale(15),
    fontFamily: 'Inter-Medium',
    alignSelf: 'center',
    color: '#727272',
  },
  buynow: {
    marginTop: verticalScale(6),
    color: '#0033A1',
    alignSelf: 'center',
    fontFamily: 'Inter-Medium',
  },
});
export default FashionLifeStyleScreen;
