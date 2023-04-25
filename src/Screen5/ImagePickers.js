import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  callback,
  Modal,
} from 'react-native';
import React, {useCallback, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ImagePicker,
  launchCamera,
  launchImageLibrary,
} from 'react-native-image-picker';
const ImagePickers = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const onCameraPress = () => {
    console.log('take photo');
  };

  const onGalleryPress = () => {
    console.log('choose photo');
  };

  return (
    <View style={styles.container}>
      {/* <View style={styles.cameraContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>
            <Icon name="camera" size={40} />
          </Text>
        </TouchableOpacity>
      </View> */}
      {/* image picker  */}

      <View style={styles.modal}>
        <View style={styles.cameraContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text>
              <Icon name="camera" size={40} />
            </Text>
          </TouchableOpacity>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View
            styles={{
              margin: 90,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              onPress={onCameraPress}
              style={{
                paddingHorizontal: 130,
                padding: 10,
                backgroundColor: 'white',
                elevation: 20,
                width: '100%',
              }}>
              <Text style={{fontSize: 16}}> Open Camera</Text>
            </TouchableOpacity>
            {/* button 2 */}
            <TouchableOpacity
              onPress={onGalleryPress}
              style={{
                paddingHorizontal: 130,
                padding: 10,
                backgroundColor: 'white',
                elevation: 20,
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 16}}>Open Gallery</Text>
            </TouchableOpacity>
            {/* button 3 */}
            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                paddingHorizontal: 150,
                padding: 10,
                backgroundColor: 'white',
                elevation: 20,
                width: '100%',
                marginTop: 20,
              }}>
              <Text style={{fontSize: 16}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cameraContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    marginTop: 50,
  },
  modal: {
    flex: 1,
    width: '100%',
  },
  modalView: {
   // flex: 1,
    marginTop: 500,
  },
});

export default ImagePickers;
