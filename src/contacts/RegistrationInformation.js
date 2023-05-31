import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

const RegistrationInformation = () => {
  const [panNumber, setPanNumber] = useState('');
  const [cinNumber, setCINNumber] = useState('');
  const [gstin, setGSITNumber] = useState('');
  const [tanNumber, setTanNumber] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailsContainer}>
          {/* details View */}
          <View styles={styles.detailsView}>
            {/* border */}
            {/* PAN */}
            <View style={styles.border}></View>
            <View style={styles.panContainer}>
              <View>
                <Text style={styles.textFieldinfo}>PAN:</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setPanNumber}
                  value={panNumber}
                />
              </View>
            </View>
            <View style={styles.border}></View>

            {/* CIN*/}

            <View style={styles.cinNumberContainer}>
              <View>
                <Text style={styles.textFieldinfo}>CIN:</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setCINNumber}
                  value={cinNumber}
                />
              </View>
            </View>
            <View style={styles.border}></View>
            {/* GSTIN*/}
            <View style={styles.gstinContainer}>
              <View>
                <Text style={styles.textFieldinfo}>GSTIN</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setGSITNumber}
                  value={gstin}
                />
              </View>
            </View>
            <View style={styles.border}></View>
            {/* TAN: */}
            <View style={styles.tanContainer}>
              <View>
                <Text style={styles.textFieldinfo}>TAN:</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setTanNumber}
                  value={tanNumber}
                />
              </View>
            </View>
            <View style={styles.border}></View>
          </View>
        </View>
        {/* button */}
        <View style={styles.footer}>
          <TouchableOpacity style={[styles.footerButton, styles.disabled]}>
            <Text style={[styles.footerButtonText]}>Save & Close</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.footerButton]}>
            <Text style={[styles.footerButtonText]}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  tagContainer: {
    marginTop: verticalScale(26),
    width: scale(330),
    alignSelf: 'center',
  },
  textTag: {
    color: '#727272',
  },
  filterCategory: {
    width: scale(330),
    alignSelf: 'center',
    alignItems: 'center',
    //backgroundColor: 'red',
  },
  categoryView: {
    width: scale(320),
    alignSelf: 'center',

    // backgroundColor: 'green',
    flexDirection: 'row',
  },
  closeIcon: {
    width: scale(15),
    height: verticalScale(10),
  },
  category: {
    width: scale(98),
    borderRadius: verticalScale(6),
    height: verticalScale(25),
    backgroundColor: '#F5F7FB',

    marginRight: scale(10),
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(5),
  },
  textCategory: {
    color: '#1D1D1D',
  },

  topBarIcon: {
    fontSize: scaleFont(20),
    color: '#0033A1',
  },
  detailsContainer: {
    marginTop: verticalScale(26),
    width: scale(330),
    alignSelf: 'center',
  },
  detailsView: {
    width: scale(310),
    alignSelf: 'center',
  },
  textFieldinfo: {
    color: '#727272',
  },
  border: {
    width: scale(330),
    marginTop: verticalScale(14),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },
  panContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  cinNumberContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  gstinContainer: {
    width: scale(330),
    //backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  tanContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  contactfieldValue: {},
  input: {},
  // button css
  buttonContainer: {
    marginTop: verticalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    width: scale(330),
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(15),
  },
  // clearApplyButton: {
  //   flexDirection: 'row',
  //   width: '100%',
  // },
  footerButton: {
    backgroundColor: '#0033A1',
    borderRadius: verticalScale(6),
    // alignSelf: 'center',

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
    alignSelf: 'flex-end',
  },
});
export default RegistrationInformation;
