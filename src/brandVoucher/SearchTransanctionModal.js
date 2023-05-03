import React, {useState} from 'react';
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import BrandVoucher from './BrandVoucherMainScreen.js';
import {TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility.js';
const SearchTransanctionModal = ({visible, onClose}) => {
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [textInput1, setTextInput1] = useState('');
  const [textInput2, setTextInput2] = useState('');

  const handleTextInput1 = text => {
    setTextInput1(text);
  };

  const handleTextInput2 = text => {
    setTextInput2(text);
  };
  const handleClearAll = () => {
    setSelectedStatuses([]);
  };

  const handleApply = () => {
    // Apply the selected discount range
    console.log('applied');
  };

  const toggleStatus = status => {
    if (selectedStatuses.includes(status)) {
      setSelectedStatuses(selectedStatuses.filter(s => s !== status));
    } else {
      setSelectedStatuses([...selectedStatuses, status]);
    }
  };

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
          translucent={false}
        />
        <View
          style={
            styles.mainView
            // padding: scale(20),
            // height: verticalScale(340),
            // backgroundColor: '#FFFF',
            // elevation: 4,
            // alignSelf: 'center',
            // width: scale(330),
            // borderRadius: verticalScale(10),
          }>
          <View
            style={
              styles.filterView
              // marginBottom: verticalScale(20),
              // flexDirection: 'row',
              // justifyContent: 'space-between',
            }>
            <Text
              style={
                styles.textFilter
                // fontSize: scaleFont(18),
                // fontWeight: 'bold',
                // fontFamily: 'Inter-Bold',
                // color: '#1D1D1D',
              }>
              Filters
            </Text>
            <View style={styles.cancel}>
              <TouchableOpacity onPress={onClose}>
                <Text
                  style={{
                    textAlign: 'right',
                    //marginTop: 20,
                    color: 'blue',
                    // marginRight: scale(20),
                  }}>
                  <Icon name="cancel" size={30} color={'black'} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text
            style={
              styles.statusView
              // marginBottom: verticalScale(10),
              // fontFamily: 'Inter-Regular',
              // color: '#727272',
              // fontSize: scaleFont(12),
              // lineHeight: verticalScale(16),
            }>
            Status
          </Text>
          <View
            style={
              styles.statusButtons
              // flexDirection: 'row',
              // flexWrap: 'wrap',
              // alignItems: 'center',
              // justifyContent: 'space-around',
            }>
            {['Success', 'Pending', 'Refund', 'Reversal'].map(status => (
              <TouchableOpacity
                key={status}
                onPress={() => toggleStatus(status)}
                style={{
                  backgroundColor: selectedStatuses.includes(status)
                    ? '#0033A1'
                    : '#F5F7FB',
                  width: scale(69),
                  height: verticalScale(25),
                  borderRadius: verticalScale(24),
                  alignItems: 'center',
                  paddingTop: verticalScale(6),
                  marginBottom: verticalScale(12),
                }}>
                <Text
                  style={{
                    color: selectedStatuses.includes(status)
                      ? 'white'
                      : 'black',
                    fontSize: scaleFont(12),
                    fontFamily: 'Inter-Regular',
                  }}>
                  {status}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.border}></View>
          <Text
            style={{
              color: '#727272',
              fontFamily: 'Inter-Medium',
              FontSize: scaleFont(11),
              marginTop: verticalScale(20),
            }}>
            Date Range
          </Text>
          <View style={styles.range}>
            <View style={styles.input1}>
              <TextInput
                activeOutlineColor="#727272"
                outlineColor="#1D1D1D"
                label="From"
                height={10}
                value={textInput1}
                onChange={handleTextInput1}
                mode="outlined"
                style={{
                  alignSelf: 'center',
                  width: scale(140),
                  borderRadius: verticalScale(15),
                }}
              />
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon size={20} name="date-range" style={styles.icon} />
              </View>
            </View>
            {/* input 1 ends */}
            <View style={styles.input2}>
              <TextInput
                activeOutlineColor="#727272"
                outlineColor="#1D1D1D"
                label="To"
                value={textInput2}
                onChange={handleTextInput2}
                mode="outlined"
                style={{
                  // marginBottom: 10,
                  alignSelf: 'center',
                  backgroundColor: '#FFFFFF',
                  // width: '80%',
                  width: scale(140),
                  //height: '20%',
                }}
              />
              <View
                style={{
                  // width: '10%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon size={20} name="date-range" style={styles.icon} />
              </View>
            </View>
          </View>
          {/* buttons container */}
          <View style={styles.footer}>
            <TouchableOpacity
              style={[
                styles.footerButton,
                selectedStatuses.length === 0 && styles.disabled,
              ]}
              onPress={handleClearAll}
              disabled={selectedStatuses.length === 0}>
              <Text
                style={[
                  styles.footerButtonText,
                  selectedStatuses !== '' && styles.activeButtonText,
                ]}>
                Clear All
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.footerButton,
                selectedStatuses.length === 0 && styles.disabled,
              ]}
              onPress={handleApply}
              disabled={selectedStatuses.length === 0}>
              <Text
                style={[
                  styles.footerButtonText,
                  selectedStatuses !== '' && styles.activeButtonText,
                ]}>
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  mainView: {
    padding: scale(20),
    height: verticalScale(340),
    backgroundColor: '#FFFF',
    elevation: 4,
    alignSelf: 'center',
    width: scale(330),
    borderRadius: verticalScale(10),
  },
  filterView: {
    marginBottom: verticalScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textFilter: {
    fontSize: scaleFont(18),
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: '#1D1D1D',
  },
  statusView: {
    marginBottom: verticalScale(10),
    fontFamily: 'Inter-Regular',
    color: '#727272',
    fontSize: scaleFont(12),
    lineHeight: verticalScale(16),
  },
  statusButtons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  range: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: scale(320),
    // padding:5,
    alignSelf: 'center',
  },
  border: {
    width: scale(300),
    marginTop: verticalScale(10),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
  },
  input1: {
    width: verticalScale(160),
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  input2: {
    width: scale(160),
    height: verticalScale(60),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  icon: {
    position: 'absolute',
    right: scale(30),
    color: '#0033A1',
  },
  cancel: {
    //position: 'absolute',
    alignSelf: 'flex-end',
  },
  // clear and apply button css
  footer: {
    flexDirection: 'row',
    marginTop: verticalScale(37),
    //width: scale(320),
    justifyContent: 'space-between',
  },
  clearApplyButton: {
    flexDirection: 'row',
    width: '100%',
  },
  footerButton: {
    backgroundColor: '#0033A1',
    borderRadius: 6,
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
    color: 'white',
    fontSize: scaleFont(16),
  },
  disabled: {
    backgroundColor: '#D7D7D7',
  },
});
export default SearchTransanctionModal;
