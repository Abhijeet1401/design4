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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const CameraModal = () => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
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
                color: 'black',
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
const styles = StyleSheet.create({
  container: {},
});
export default CameraModal;
