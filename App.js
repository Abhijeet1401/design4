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
import {Provider} from 'react-redux';
import store from './src/contacts/Redux/store';

import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const DefaultTheme = {
    colors: {
      primary: 'rgb(0, 104, 116)',
      onPrimary: 'rgb(255, 255, 255)',
      primaryContainer: 'rgb(151, 240, 255)',
      onPrimaryContainer: 'rgb(0, 31, 36)',
      secondary: 'rgb(74, 98, 103)',
      onSecondary: 'rgb(255, 255, 255)',
      secondaryContainer: '#F5F7FB',
      onSecondaryContainer: 'rgb(5, 31, 35)',
    },
  };
  const theme = {
    ...DefaultTheme,
  };
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

      <PaperProvider theme={theme}>
        <Provider store={store}>
          <Navigation />
        </Provider>
      </PaperProvider>

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
