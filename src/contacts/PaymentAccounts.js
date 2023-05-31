import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Image,
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
import Icon from 'react-native-vector-icons/FontAwesome';
import AddBulkContact from './AddBulkContact';

const PaymentAccounts = props => {
  const [text, onChangeText] = useState('');
  const [accountNuber, setAccountNumber] = useState('');
  const [ifsc, setIFSC] = useState('');
  const [beneficiaryName, setBeneficiaryName] = useState('');
  const [showDownIcon, setShowDownIcon] = useState(true);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handlePressDropDown = () => {
    setShowDownIcon(!showDownIcon);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.detailsContainer}>
          {/* details View */}
          <View styles={styles.detailsView}>
            {/* border */}
            <View style={styles.border}></View>
            <View style={styles.payoutMethodContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Select Payout Method:</Text>
              </View>
              <View style={styles.paymentMethodView}>
                <View>
                  <Text
                    style={{
                      color: '#1D1D1D',
                      fontSize: scaleFont(14),
                      fontFamily: 'Inter-Medium',
                    }}>
                    Bank Account
                  </Text>
                </View>
                <View style={styles.download}>
                  <TouchableOpacity
                    onPress={() => (toggleOptions(), handlePressDropDown())}
                    onDoubleClick={toggleOptions}>
                    <Icon
                      name={showDownIcon ? 'caret-down' : 'caret-up'}
                      size={25}
                      color={'black'}
                    />
                  </TouchableOpacity>
                  {/* <Icon name="caret-down" size={30} color={'black'} /> */}
                </View>
              </View>
              {showOptions && (
                <View style={styles.payoutOptionsContainer}>
                  <TouchableOpacity>
                    <View style={styles.InnerPayoutView}>
                      <View style={styles.payoutIconView}>
                        <Icon2
                          name={'wallet-outline'}
                          size={19}
                          color={'black'}
                        />
                      </View>
                      <View>
                        <Text style={styles.payoutMethodName}>Wallet</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  {/* option 3 */}
                  <TouchableOpacity>
                    <View style={styles.InnerPayoutView}>
                      <View style={styles.payoutIconView}>
                        <Icon2 name={'bank'} size={19} color={'black'} />
                      </View>
                      <View style={styles.paymentMethodView}>
                        <Text style={styles.payoutMethodName}>
                          Bank Account
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  {/* option 3 */}
                  <TouchableOpacity>
                    <View style={styles.InnerPayoutView}>
                      <View style={styles.payoutIconView}>
                        {/* <Icon name={'caret-up'} size={25} color={'black'} /> */}
                        <Image source={require('../contacts/Images/upi.jpg')} />
                      </View>
                      <View style={styles.paymentMethodView}>
                        <Text style={styles.payoutMethodName}>UPI</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            </View>
            <View style={styles.border}></View>

            {/* phone */}

            <View style={styles.accountNumContainer}>
              <View>
                <Text style={styles.textFieldinfo}>Account Number:</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  keyboardType="numeric"
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setAccountNumber}
                  value={accountNuber}
                />
              </View>
            </View>
            <View style={styles.border}></View>
            {/* email */}
            <View style={styles.ifscContainer}>
              <View>
                <Text style={styles.textFieldinfo}>IFSC:</Text>
              </View>
              <View style={styles.contactfieldValue}>
                <TextInput
                  color={'#1D1D1D'}
                  style={styles.input}
                  onChangeText={setIFSC}
                  value={ifsc}
                />
              </View>
            </View>
            <View style={styles.border}></View>
            {/* company details */}
            <View style={styles.beneficiaryContainer}>
              <View style={styles.beneficiaryView}>
                <Text style={styles.textFieldinfo}>Beneficiary Name:</Text>
                <View>
                  <Text style={{color: '#0033A1'}}>Get Name</Text>
                </View>
              </View>
            </View>

            <View style={styles.contactfieldValue}>
              <TextInput
                color={'#1D1D1D'}
                style={styles.input}
                onChangeText={setBeneficiaryName}
                value={beneficiaryName}
              />
            </View>
            <View style={styles.border}></View>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => props.navigation.navigate(AddBulkContact)}>
            <View style={styles.addAnotheraccountContainer}>
              <View style={styles.addAnotherAccountView}>
                <View style={styles.addAccountView}>
                  <Text>Add another account</Text>
                </View>
                <View>
                  <Icon name="plus" color="#BEBEBE" size={10} />
                </View>
              </View>
            </View>
          </TouchableOpacity>
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

  // topBarIcon: {
  //   fontSize: scaleFont(20),
  //   color: '#0033A1',
  // },
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
    fontSize: scaleFont(11),
    fontFamily: 'Inter-Regular',
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
  payoutMethodContainer: {
    width: scale(330),
    //backgroundColor: 'green',
    marginTop: verticalScale(15),
  },
  payoutOptionsContainer: {
    width: scale(324),
    height: verticalScale(144),
    backgroundColor: '#FFFFFF',
    elevation: 4,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: verticalScale(4),
  },
  InnerPayoutView: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    height: verticalScale(40),
    marginTop: verticalScale(5),
    width: scale(290),
    alignSelf: 'center',
    alignItems: 'center',

    //justifyContent: 'space-between',
  },
  paymentMethodView: {
    width: scale(150),
    backgroundColor: 'green',
    height: verticalScale(48),
    backgroundColor: 'blue',
  },
  payoutIconView: {
    width: scale(35),
  },
  payoutMethodName: {
    textAlign: 'left',
    color: '#1D1D1D',
    fontSize: scaleFont(16),
    fontFamily: 'Inter-Regular',
  },
  accountNumContainer: {
    width: scale(330),
    // backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  ifscContainer: {
    width: scale(330),
    //backgroundColor: 'red',
    marginTop: verticalScale(15),
  },
  beneficiaryContainer: {
    // width: scale(330),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    // marginTop: verticalScale(15),
  },
  contactfieldValue: {},
  paymentMethodView: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'space-between',
  },
  beneficiaryView: {
    marginTop: verticalScale(15),

    width: scale(330),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  beneficiaryInput: {
    width: scale(330),
    marginTop: verticalScale(15),
  },
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
  addAnotheraccountContainer: {
    width: scale(330),
    marginTop: verticalScale(29),
  },
  addAnotherAccountView: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scale(284),
    height: verticalScale(44),
    flexDirection: 'row',
    backgroundColor: '#E7E7E7',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#BEBEBE',
    // backgroundColor: 'red',
    borderRadius: verticalScale(4),
  },
  addAccountView: {
    width: scale(121),
    alignSelf: 'center',
    alignItems: 'center',
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
  downloadIcon: {
    backgroundColor: '#F5F7FB',
    width: scale(28),
    height: verticalScale(28),
    alignItems: 'center',

    borderRadius: verticalScale(6),
  },
});
export default PaymentAccounts;
