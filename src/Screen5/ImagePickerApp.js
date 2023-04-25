import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  StyleSheet,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon4 from 'react-native-vector-icons/Ionicons';

import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import BusinessWallet from '../Screen3/BusinessWallet';
import Rating from '../Screens2/Rating';
const ImagePickerApp = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [bgColor, setBgColor] = useState('white');
  const [filePath, setFilePath] = useState({});
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
          setModalVisible(false);
        }
        // if (response.didCancel) {
        //   alert('User cancelled camera picker');
        //   return;
        // } else if (response.errorCode == 'camera_unavailable') {
        //   alert('Camera not available on device');
        //   return;
        // } else if (response.errorCode == 'permission') {
        //   alert('Permission not satisfied');
        //   return;
        // } else if (response.errorCode == 'others') {
        //   alert(response.errorMessage);
        //   return;
        // }
        // console.log('base64 -> ', response.base64);
        // console.log('uri -> ', response.uri);
        // console.log('width -> ', response.width);
        // console.log('height -> ', response.height);
        // console.log('fileSize -> ', response.fileSize);
        // console.log('type -> ', response.type);
        // console.log('fileName -> ', response.fileName);
        // setFilePath(response);
      });
    }
  };

  //  for Gallery

  const chooseFile = type => {
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
        setModalVisible(false);
      }
      // if (response.didCancel) {
      //   alert('User cancelled camera picker');
      //   return;
      // } else if (response.errorCode == 'camera_unavailable') {
      //   alert('Camera not available on device');
      //   return;
      // } else if (response.errorCode == 'permission') {
      //   alert('Permission not satisfied');
      //   return;
      // } else if (response.errorCode == 'others') {
      //   alert(response.errorMessage);
      //   return;
      // }
      // console.log('base64 -> ', response.base64);
      // console.log('uri -> ', response.uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      // setFilePath(response);
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
  //console.log(arr, 'arr');
  return (
    <View style={{}}>
      <View style={styles.container}>
        {/* <Image
          source={{
            uri: 'data:image/jpeg;base64,' + filePath.data,
          }}
          style={styles.imageStyle}
          
        /> */}
        <View
          style={{
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: 10,
          }}>
          <Text
            style={{
              marginTop: 20,
              color: 'black',
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Camera & Gallery Picker
          </Text>
        </View>
        {filePath && (
          <Image source={{uri: filePath.uri}} style={styles.imageStyle} />
        )}
        <Text style={styles.textStyle}>{filePath.uri}</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          {arr.map((item, index) => (
            <View>
              <Image
                style={{width: 100, height: 100, margin: 10}}
                source={item}
              />
              <TouchableOpacity
                onPress={() => handleDelete(index)}
                style={{
                  position: 'absolute',
                  backgroundColor: 'red',
                  padding: 5,
                  borderRadius: 100,
                  marginTop: 10,
                  marginLeft: 88,
                }}>
                <Icon2 name="cross" style={{color: 'white'}} />
              </TouchableOpacity>
            </View>
          ))}
          {arr.length < 6 ? (
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              style={{
                borderStyle: 'dashed',
                margin: 10,
                padding: 20,
                borderWidth: 2,
                borderRadius: 10,
              }}>
              <Icon name="camera" size={40} style={styles.icon} />
            </TouchableOpacity>
          ) : null}
        </View>
        {/* Header with camera icon */}

        {/* Modal for camera/gallery selection */}
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <View
              style={{
                backgroundColor: '#fff',
                width: '100%',
                padding: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              }}>
              <TouchableOpacity
                onPress={() => captureImage('photo')}
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  elevation: 10,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Camera
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => chooseFile('photo')}
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  elevation: 10,
                  marginTop: 15,
                  borderRadius: 15,
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignSelf: 'center',
                  }}>
                  Gallery
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  paddingHorizontal: 10,
                  backgroundColor: 'white',
                  elevation: 10,
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
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 550,
        }}>
        <TouchableOpacity onPress={() => navigation.navigate(Rating)}>
          <Icon4
            name="arrow-back"
            size={26}
            style={{marginLeft: 20, color: 'black', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate(BusinessWallet)}>
          <Icon4
            name="arrow-forward"
            size={26}
            style={{marginRight: 40, color: 'black', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {},
});
export default ImagePickerApp;
