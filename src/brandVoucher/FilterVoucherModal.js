import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const FilterVoucherModal = ({visible, onClose}) => {
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonPress = button => {
    if (button === selectedButton) {
      setSelectedButton(null);
    } else {
      setSelectedButton(button);
    }
  };

  const [selectedDiscount, setSelectedDiscount] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const handleDiscountSelect = discountRange => {
    setSelectedDiscount(discountRange);
  };

  const handleStatusSelect = status => {
    setSelectedStatus(status);
  };

  const handleClearAll = () => {
    setSelectedDiscount('');
    setSelectedStatus('');
  };

  const handleApply = () => {
    // Apply the selected discount range
  };

  return (
    <Modal
      visible={true}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <StatusBar
        backgroundColor="#fff"
        barStyle="dark-content"
        translucent={false}
      />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.mainView}>
          <View style={styles.filterView}>
            <Text style={styles.textTitleFilter}>Filters</Text>
            {/* close button */}
            <View style={styles.cancel}>
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={
                    {
                      //textAlign: 'right',
                      //color: 'blue',
                    }
                  }>
                  <Icon2 name="remove" size={30} color={'black'} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={{fontWeight: 'bold'}}>Status</Text>
          {/* options */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                selectedStatus === 'Upto 2000' && styles.activeButton,
              ]}
              onPress={() => handleStatusSelect('Upto 2000')}>
              {/* <Text style={styles.buttonText}>Upto 2000</Text> */}
              <Text
                style={[
                  styles.buttonText,
                  selectedStatus === 'Upto 2000' && styles.activeButtonText,
                ]}>
                Upto 2000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedStatus === '2000-5000' && styles.activeButton,
              ]}
              onPress={() => handleStatusSelect('2000-5000')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedStatus === '2000-5000' && styles.activeButtonText,
                ]}>
                2000 -5000
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedStatus === '5000 - 7000' && styles.activeButton,
              ]}
              onPress={() => handleStatusSelect('5000 - 7000')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedStatus === '5000 - 7000' && styles.activeButtonText,
                ]}>
                5000 - 7000
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={{marginTop: 20, fontWeight: 'bold'}}>
            Discount Range
          </Text>
          {/* discount options */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[
                styles.button,
                selectedDiscount === '5%-10%' && styles.activeButton,
              ]}
              onPress={() => handleDiscountSelect('5%-10%')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedDiscount === '5%-10%' && styles.activeButtonText,
                ]}>
                5%-10%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedDiscount === '10%-15%' && styles.activeButton,
              ]}
              onPress={() => handleDiscountSelect('10%-15%')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedDiscount === '10%-15%' && styles.activeButtonText,
                ]}>
                10%-15%
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                selectedDiscount === '15%-20%' && styles.activeButton,
              ]}
              onPress={() => handleDiscountSelect('15%-20%')}>
              <Text
                style={[
                  styles.buttonText,
                  selectedDiscount === '15%-20%' && styles.activeButtonText,
                ]}>
                15%-20%
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.footerButton,
                !selectedDiscount && !selectedStatus && styles.disabled,
              ]}
              onPress={handleClearAll}
              disabled={!selectedDiscount && !selectedStatus}>
              <Text
                style={[
                  styles.footerButtonText,

                  (selectedDiscount !== '' || selectedStatus !== '') &&
                    styles.activeButtonText,
                ]}>
                Clear All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.footerButton,
                !selectedDiscount && !selectedStatus && styles.disabled,
              ]}
              onPress={handleApply}>
              <Text
                style={[
                  styles.footerButtonText,
                  (selectedDiscount !== '' || selectedStatus !== '') &&
                    styles.activeButtonText,
                ]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>

          {/* <View style={styles.cancel}>
            <TouchableOpacity onPress={onClose}>
              <Text
                style={{
                  textAlign: 'right',
                  marginTop: 20,
                  marginRight: 20,
                  color: 'blue',
                }}>
                <Icon2 name="remove" size={30} color={'black'} />
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 20,
    // marginVertical: 10,
    // backgroundColor: '#fff',
    // borderRadius: 10,
    // paddingVertical: 20,
    // paddingHorizontal: 15,
  },
  // title: {
  //   fontSize: 18,
  //   fontWeight: 'bold',
  //   marginBottom: 15,
  // },
  mainView: {
    padding: 20,
    height: verticalScale(340),
    backgroundColor: '#FFFF',
    elevation: 5,
    alignSelf: 'center',
    width: scale(330),
    borderRadius: verticalScale(6),
  },
  filterView: {
    marginBottom: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textTitleFilter: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: '#1D1D1D',
  },
  buttonContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    width: scale(70),
    height: verticalScale(25),
    // paddingVertical: 8,
    // paddingHorizontal: 10,
    backgroundColor: '#F5F7FB',
    borderRadius: verticalScale(20),
    flex: 1,
    margin: 4,
    //marginRight: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  buttonText: {
    fontSize: verticalScale(12),
    color: 'black',
  },
  activeButton: {
    backgroundColor: '#0033A1',
  },
  activeButtonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(71),
  },
  clearApplyButton: {
    flexDirection: 'row',
    width: '100%',
  },
  footerButton: {
    backgroundColor: '#0033A1',
    borderRadius: verticalScale(6),
    alignSelf: 'center',
    // paddingHorizontal: 35,
    // paddingVertical: 10,
    // marginBottom: 15.42,
    height: verticalScale(42),
    justifyContent: 'center',
    width: scale(143),
    // justifyContent: 'center',
  },
  footerButtonText: {
    alignSelf: 'center',
    color: '#FFFFFF',
    fontSize: scaleFont(16),
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: 'grey',
  },
  cancel: {
    //backgroundColor: 'red',

    alignSelf: 'flex-end',
  },
});
export default FilterVoucherModal;
