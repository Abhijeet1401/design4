import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BrandVoucher from '../Assignment/BrandVoucher';
import VoucherBalance from '../Assignment/VoucherBalance';
import Transanction from '../Assignment/Transanction';

import CheckBalance from '../Assignment/CheckBalance';
import BrandVoucher2 from '../Assignment/BrandVoucher2';
import Vouchers from '../Assignment/Vouchers';
import EGiftVoucher from '../Assignment/EGiftVoucher';
import EGiftVoucher2 from '../Assignment/EGiftVoucher2';
import BulkEgift from '../Assignment/BulkEgift';
import Pin from '../Assignment/Pin';
import SuccessPage from '../Assignment/SuccessPage';

// import Calender from '../Screen7/Calender';
// import ExploreUI from '../Screen6/ExploreUI';
// import MyLoan from '../Screen4/MyLoan';
// import Offers from '../Screen4/Offers';
// import Tabs from '../Screen4/Tabs';
// import DeviceInformation from '../Screen7/DeviceInformation';
// import BusinessWallet from '../Screen3/BusinessWallet';
// import ImagePickerApp from '../Screen5/ImagePickerApp';
// import Rating from '../Screens2/Rating';
// import Improve from '../Screens2/Improve';
// import Design from '../screens/Design';
// import PlanTypes from '../screens/PlanTypes';
// import UnlimitedPlan from '../screens/UnlimitedPlan';
// import RoamingPlan from '../screens/RoamingPlan';
// import ForYouPlan from '../screens/ForYouPlan';
// import DataPlan from '../screens/DataPlan';
// import Weather from '../Screen7/Weather';
// import WeatherInfo from '../Screen7/WeatherInfo';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Calender"
          component={Calender}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExploreUI"
          component={ExploreUI}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Offers"
          component={Offers}
          options={{headerShown: false}}
        />
        <Stack.Screen name="MyLoan" component={MyLoan} />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DeviceInformation"
          component={DeviceInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BusinessWallet"
          component={BusinessWallet}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ImagePickerApp"
          component={ImagePickerApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Rating"
          component={Rating}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Improve"
          component={Improve}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Design"
          component={Design}
          options={{headerShown: false}}
        />
        <Stack.Screen  name='DataPlan' component={DataPlan}/>
        <Stack.Screen  name='ForYouPlan'component={ForYouPlan}/>
        <Stack.Screen  name='PlanTypes'component={PlanTypes}/>
        <Stack.Screen   name='UnlimitedPlan' component={UnlimitedPlan}/>
        <Stack.Screen  name='RoamingPlan'component={RoamingPlan}/>
        <Stack.Screen  name='Weather' component={Weather} options={{headerShown:false}}/>
        <Stack.Screen  name='WeatherInfo' component={WeatherInfo} options={{headerShown:false}}   /> */}

        <Stack.Screen
          name="BrandVoucher"
          component={BrandVoucher}
          options={{headerShown: false}}
        />
        <Stack.Group screenOptions={{animation: 'slide_from_right'}}>
          {/* <Stack.Screen
          name="BrandVoucher2"
          component={BrandVoucher2}
          options={{headerShown: false}}
        /> */}
          <Stack.Screen
            name="VoucherBalance"
            component={VoucherBalance}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Transanction"
            component={Transanction}
            options={{headerShown: false}}
          />

          <Stack.Screen
            name="CheckBalance"
            component={CheckBalance}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Vouchers"
            component={Vouchers}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EGiftVoucher"
            component={EGiftVoucher}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="EGiftVoucher2"
            component={EGiftVoucher2}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="BulkEgift"
            component={BulkEgift}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Pin"
            component={Pin}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SuccessPage"
            component={SuccessPage}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
