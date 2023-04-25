import React, {useState} from 'react';
import {View, Text, Image, Modal, TouchableOpacity} from 'react-native';


import Icon from 'react-native-vector-icons/FontAwesome';
import {
  ImagePicker,
} from 'react-native-image-picker';
import { launchCamera } from 'react-native-image-picker';
import { launchImageLibrary } from 'react-native-image-picker';
const ImagePickerApp = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [imageSource, setImageSource] = useState(null);


  const handleCameraClick = () => {
    const options = {
      quality: 0.5,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchCamera(options, (response) => {
      if (response.uri) {
        setImageSource(response.uri);
        setModalVisible(false);
      }
    });
  };


  const handleGalleryClick = async () => {
    const {edges} = await CameraRoll.getPhotos({first: 1});
    const firstImage = edges[0].node.image.uri;
    setImageSource(firstImage);
    setModalVisible(false);
  };

  
  const handleCrossClick = () => {
    setImageSource(null);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* Header with camera icon */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Icon name="camera" size={40} />
      </TouchableOpacity>

      {/* Selected image */}
      {imageSource && (
        <View style={{flex: 1, alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={handleCrossClick}>
            <Image
              // source={require('./cross.png')}
              style={{width: 20, height: 20, marginRight: 10}}
            />
          </TouchableOpacity>
          <Image
            source={{uri: imageSource}}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        </View>
      )}

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
            <TouchableOpacity onPress={handleCameraClick}>
              <Text style={{fontSize: 18, marginVertical: 10}}>Camera</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleGalleryClick}>
              <Text style={{fontSize: 18, marginVertical: 10}}>Gallery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={{fontSize: 18, marginVertical: 10}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ImagePickerApp;
