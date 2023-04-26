import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Design from './src/screens/Design';
import Rating from './src/Screens2/Rating';
//import AuthStack from './src/Screens2/Navigation/AuthStack'
//import BusinessWallet from './src/Screen3/BusinessWallet'
//import AuthStack from './src/Screen4/Navigation/Authstack'
import Loan from './src/Screen4/Loan';
import Tabs from './src/Screen4/Tabs';
import ImagePickerApp from './src/Screen5/ImagePickerApp';
//import ExploreUI from './src/Screen6/ExploreUI';
import Calender from './src/Screen7/Calender';
import Navigation from './src/MainNavigation/Navigation';
//import DeviceInformation from './src/Screen7/DeviceInformation';
//import ImagePickers from './src/Screen5/ImagePickers';
import Weather2 from './src/Screen7/Weather2';
import Weather from './src/Screen7/Weather';
import {loadFonts} from './assets/fonts/fonts';

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Design/> */}
      {/* <Rating/> */}
      {/* <AuthStack/> */}
      {/* <BusinessWallet/> */}
      {/* <Loan/> */}
      {/* <Tabs/> */}
      {/* <AuthStack/> */}
      {/* <ImagePickerApp /> */}
      {/* <ExploreUI/> */}
      {/* <Calender /> */}
      <Navigation />
      {/* <ImagePickers /> */}
      {/* <Weather2 /> */}
      {/* <Weather/> */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
export default App;
