import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Modal,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import {TextInput} from 'react-native-paper';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

import {useNavigation} from '@react-navigation/native';
import {useState} from 'react';

const DigiKendraMappingForm = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const navigation = useNavigation();
  const handleTextInput1Change = Number => {
    setMobileNumber(Number);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity
            activeOpacity={1}
            style={{width: 30, height: 30}}
            onPress={() => navigation.goBack()}>
            <Icon
              name="angle-left"
              size={30}
              style={styles.arrow}
              color={'#0033A1'}
            />
          </TouchableOpacity>
          <Text style={styles.titleText}>Digi Kendra Mapping</Text>
        </View>
      </View>

      {/* mobile Number Mapping Form  */}
      <ScrollView>
        <TouchableOpacity activeOpacity={1} onPress={() => Keyboard.dismiss()}>
          <View style={styles.VoucherInput}>
            <TextInput
              label="Mobile Number"
              textColor="#1D1D1D"
              value={mobileNumber}
              keyboardType="phone-pad"
              onChange={handleTextInput1Change}
              mode="outlined"
              style={styles.textinputBox}
              activeOutlineColor="#1D1D1D"
            />
          </View>

          {/* Declaration */}
          <View style={styles.DeclarationContainer}>
            <View style={styles.declarationView}>
              <View>
                <Text style={styles.titleTextDeclration}>
                  I Confirm the Following:
                </Text>
              </View>
              <View>
                <Text style={styles.textDeclaration}>
                  • I have physically verified the KYC documents of the agent.
                </Text>
                <Text style={styles.textDeclaration}>
                  • I have physically verified the shop/store/office of the
                  agent where transactions will happen.
                </Text>
              </View>
            </View>
          </View>

          {/* button */}

          <View style={styles.button}>
            <TouchableOpacity activeOpacity={1}>
              <Text style={styles.buttonText}>Proceed</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: verticalScale(48),
    width: scale(330),
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
    // marginBottom:verticalScale(22)
  },
  headerLeft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(190),
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

  VoucherInput: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: scale(324),
    //marginTop: verticalScale(38),
  },
  textinputBox: {
    marginTop: verticalScale(24),
    backgroundColor: '#FFFFFF',
    fontFamily: 'Inter-Medium',
  },
  DeclarationContainer: {
    marginTop: verticalScale(20),
    borderRadius: verticalScale(6),
    width: scale(320),
    alignSelf: 'center',
    backgroundColor: '#F5F7FB',
    //height: verticalScale(122),
  },
  declarationView: {
    height: verticalScale(110),
    width: scale(280),
    alignSelf: 'center',
  },
  titleTextDeclration: {
    marginTop: verticalScale(10),
    color: '#0033A1',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-Bold',
  },
  textDeclaration: {
    lineHeight: 20,
    fontSize: 12,
    fontFamily: 'Inter-SemiBold',
    color: '#868686',
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
    marginTop: verticalScale(278),
    height: verticalScale(52),
    borderRadius: verticalScale(6),
    // marginBottom: verticalScale(9),
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#0033A1',
  },
});

export default DigiKendraMappingForm;
