import {View, Text, Modal, TouchableOpacity, StatusBar} from 'react-native';
import React, {useState} from 'react';
import ImagePicker from 'react-native-image-picker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {PermissionsAndroid} from 'react-native';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const CameraOpenModal = props => {
  const [arr, setArr] = useState([]);

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };
  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  // for camera
  const captureImage = async type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        //console.log('Response = ', response.didCancel);
        if (response.didCancel != true) {
          let e = {uri: response.assets[0].uri};
          setArr(myVal => [...myVal, e]);
          props.path['path'] = e;
          props.setVisible(false);
        }
      });
    }
  };

  //  for Gallery

  const chooseFile = type => {
    //console.log('hi');
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      //console.log('Response = ', response.assets[0].uri);
      if (response.didCancel != true) {
        let e = {uri: response.assets[0].uri};
        setArr(myVal => [...myVal, e]);
        props.path['path'] = e;
        props.setVisible(false);
        console.log(props.path);
      }
    });
  };
  const handleDelete = props => {
    console.log('props', props);
    arr.splice(props, 1);
    setArr(myVal => [...myVal]);
  };
  const handleColor = color => {
    setBgColor('blue');
  };

  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          flex: 1,
          //backgroundColor: 'red',
          // height: verticalScale(500),
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: '#FFFFFF',
            elevation: 5,
            height: verticalScale(200),
            width: scale(360),
            padding: 10,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => captureImage('photo')}
            style={{
              paddingHorizontal: 10,
              backgroundColor: 'white',
              elevation: 2,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                marginVertical: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'black',
              }}>
              Camera
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => chooseFile('photo')}
            style={{
              paddingHorizontal: 10,
              backgroundColor: 'white',
              elevation: 2,
              marginTop: 15,
              borderRadius: 15,
            }}>
            <Text
              style={{
                fontSize: 18,
                marginVertical: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'black',
              }}>
              Gallery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => props.setVisible(false)}
            style={{
              paddingHorizontal: 10,
              backgroundColor: 'white',
              elevation: 2,
              marginTop: 15,
              borderRadius: 15,
              marginBottom: 40,
            }}>
            <Text
              style={{
                fontSize: 18,
                marginVertical: 10,
                justifyContent: 'center',
                alignSelf: 'center',
                color: 'black',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CameraOpenModal;
