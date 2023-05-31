import React, {Component, useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  Keyboard,
  Modal,
  Image,
} from 'react-native';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ContactDetails from './ContactDetails';
import PaymentAccounts from './PaymentAccounts';
import Addresses from './Addresses';
import Notes from './Notes';
import RegistrationInformation from './RegistrationInformation';
import CameraOpenModal from './CameraOpenModal';

//import OpenCamera from './OpenCamera';

const Tab = createMaterialTopTabNavigator();

function MyTabBar(props) {
  const navigate = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  const [path, setPath] = useState({
    path: '',
  });

  const handleImageSelection = () => {
    const selectedImagePath = path['path'];
    setProfileImg(selectedImagePath);
    setProfileImg(true);
    setShowModal(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <CameraOpenModal
        visible={showModal}
        setVisible={setShowModal}
        path={path}
      />
      <TouchableOpacity
        onPress={() => navigate.goBack()}
        activeOpacity={1}
        style={{
          width: scale(317),
          height: verticalScale(48),
          flexDirection: 'row',
          alignSelf: 'center',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <MaterialIcons style={styles.topBarIcon} name="arrow-back-ios" />
        <View
          style={{
            width: scale(294),
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: scaleFont(18),
              fontFamily: 'Inter-Medium',
              color: '#0033A1',
            }}>
            Add Contacts
          </Text>
        </View>
      </TouchableOpacity>
      {/* profile Avatar container */}
      {/* <OpenCamera /> */}

      <TouchableOpacity>
        <View style={styles.profileImageView}>
          {!profileImg && (
            <Image
              source={require('../contacts/Images/profileAvtar.png')}
              style={{
                width: 110,
                height: 110,
                borderRadius: 55,
                alignSelf: 'center',
                textAlign: 'center',
                //backgroundColor: '#ddd',
                //justifyContent: 'center',
              }}
            />
          )}

          {profileImg && (
            <Image
              source={path['path']}
              style={{
                width: 110,
                height: 110,
                borderRadius: 55,
                alignSelf: 'center',
                textAlign: 'center',
                backgroundColor: '#F5F7FB',

                //justifyContent: 'center',
              }}
            />
          )}

          {/* <Image
              source={
                profileImg !== ''
                  ? path['path']
                  : path('../contacts/Images/profileAvtar.png')
              }
              style={{
                width: 110,
                height: 110,
                borderRadius: 55,
                alignSelf: 'center',
                textAlign: 'center',
                //justifyContent: 'center',
              }}
            /> */}

          <View style={styles.cameraView}>
            <Icon
              onPress={() => handleImageSelection(setProfileImg(true))}
              name="camera"
              size={20}
              color="#1D1D1D"
              style={styles.cameraIcon}
            />
          </View>
          {/* <Image
                onPress={() => setShowModal(true)}
                source={path['path']}
                style={{
                  width: 110,
                  height: 110,
                  borderRadius: 55,
                  alignSelf: 'center',
                  textAlign: 'center',
                  //justifyContent: 'center',
                }}
              />     */}
        </View>
      </TouchableOpacity>

      {/* <View style={styles.cameraView}>
          <Icon name="camera" size={20} color="#1D1D1D" />
        </View> */}

      <View style={styles.headView}>
        {props.val.state.routes.map((route, index) => {
          const {options} = props.val.descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = props.val.state.index === index;

          const onPress = () => {
            const event = props.val.navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              props.val.navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            props.val.navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              activeOpacity={1}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{flex: 1}}>
              <View
                style={[
                  styles.headTab,
                  {
                    borderBottomColor: isFocused ? '#0133a1' : 'white',
                    alignItems: 'center',
                  },
                ]}>
                <Text
                  style={{
                    color: isFocused ? '#0133a1' : '#222',
                    fontFamily: 'Inter-Medium',
                    fontSize: scaleFont(12),
                    textAlign: 'center',
                    fontFamily: isFocused ? 'Inter-Bold' : 'Inter-Regular',
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
      <View style={styles.topNavigatorBorder}></View>
    </View>
  );
}
const AddContactMainScreen = ({value}) => {
  // const [modalVisible, setModalVisible] = useState(false);
  return (
    <Tab.Navigator
      ScreenOptions={{
        tabBarIndicatorStyle: {
          color: 'red',
        },
      }}
      tabBar={props => <MyTabBar val={props} val1={value} />}>
      <Tab.Screen
        name="ContactDetails"
        component={ContactDetails}
        options={{tabBarLabel: <Text>Contact{'\n'}Details</Text>}}
      />
      <Tab.Screen
        name="PaymentAccounts"
        component={PaymentAccounts}
        options={{tabBarLabel: <Text>Payment{'\n'}Accounts</Text>}}
      />
      <Tab.Screen
        name="Addresses"
        component={Addresses}
        options={{tabBarLabel: 'Addresses'}}
      />
      <Tab.Screen
        name="RegistrationInformation"
        component={RegistrationInformation}
        options={{tabBarLabel: <Text>Registration{'\n'}Information</Text>}}
      />
      <Tab.Screen
        name="Notes"
        component={Notes}
        options={{tabBarLabel: <Text>Notes</Text>}}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  topBarIcon: {
    fontSize: scaleFont(20),
    color: '#0033A1',
  },

  profileImageView: {
    position: 'relative',
    // backgroundColor: '#F5F7FB',
    alignItems: 'flex-end',
    alignSelf: 'center',
    width: scale(110),
    borderRadius: verticalScale(55),
    height: verticalScale(97),
    borderStyle: 'solid',
  },
  cameraView: {
    position: 'absolute',
    backgroundColor: '#F5F7FB',
    width: scale(39),
    height: verticalScale(39),
    // alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: verticalScale(65),
    borderRadius: verticalScale(6),
    right: -10,
  },
  cameraIcon: {},

  headView: {
    //backgroundColor: 'red',
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: verticalScale(5),
    width: scale(330),
    alignSelf: 'center',
    borderBottomWidth: 1.5,
    borderBottomColor: '#727272',
    //marginTop: verticalScale(132),
  },
  headTab: {
    //backgroundColor: 'red',
    alignSelf: 'center',
    height: verticalScale(26),
    borderBottomWidth: verticalScale(2),

    // borderBottomLeftRadius: verticalScale(2),
    // borderBottomRightRadius: verticalScale(2),

    width: scale(65),
    height: verticalScale(40),
    justifyContent: 'center',
    //justifyContent: 'space-around',
  },
  // topNavigatorBorder: {
  //   width: scale(330),
  //   borderWidth: 1,
  //   borderColor: '#727272',
  //   opacity: 0.3,
  //   alignSelf: 'center',
  // },
});
export default AddContactMainScreen;
