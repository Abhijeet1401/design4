import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import CheckVoucherBalanceFormModal from '../brandVoucher/CheckVoucherBalanceFormModal';
// import TransanctionModal from '../brandVoucher/TransanctionModal';
// import ShowVoucherBalanceModal from '../brandVoucher/ShowVoucherBalanceModal.js';
// import BrandVoucher2 from '../brandVoucher/BrandVoucher2';
// import FashionLifeStyleScreen from '../brandVoucher/FashionLifeStyleScreen';
// import EGiftVoucherFormModal from '../brandVoucher/EGiftVoucherFormModal';
// import TermCondition from '../brandVoucher/TermCondition';
// import BulkEgift from '../brandVoucher/BulkEgift';
// import IPinModal from '../brandVoucher/IPinModal';
// import TransactionStatusModal from '../brandVoucher/TransactionStatusModal';
// import BrandVoucherMainScreen from '../brandVoucher/BrandVoucherMainScreen.js';
import CreditCardMainScreen from '../creditCard/CreditCardMainScreen';
import CcBillsPayForm from '../creditCard/CcBillsPayForm';
import BillsPaymentStatus from '../creditCard/BillsPaymentStatus';
import PreviousTransanctions from '../creditCard/PreviousTransanctions';
import IPinModal from '../creditCard/IPinModal';

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
      <Stack.Navigator initialRouteName="CreditCardMainScreen">
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
        <Stack.Screen name="DataPlan" component={DataPlan} />
        <Stack.Screen name="ForYouPlan" component={ForYouPlan} />
        <Stack.Screen name="PlanTypes" component={PlanTypes} />
        <Stack.Screen name="UnlimitedPlan" component={UnlimitedPlan} />
        <Stack.Screen name="RoamingPlan" component={RoamingPlan} />
        <Stack.Screen
          name="Weather"
          component={Weather}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WeatherInfo"
          component={WeatherInfo}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="BrandVoucherMainScreen"
          component={BrandVoucherMainScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CheckVoucherBalanceFormModal"
          component={CheckVoucherBalanceFormModal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowVoucherBalanceModal"
          component={ShowVoucherBalanceModal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IPinModal"
          component={IPinModal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TransactionStatusModal"
          component={TransactionStatusModal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EGiftVoucherFormModal"
          component={EGiftVoucherFormModal}
          options={{headerShown: false}}
        /> */}

        {/* <Stack.Screen
          name="BrandVoucher2"
          component={BrandVoucher2}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
            name="CheckVoucherBalanceForm"
            component={CheckVoucherBalanceForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ShowVoucherBalance"
            component={ShowVoucherBalance}
            options={{headerShown: false}}
          /> */}
        {/* <Stack.Screen
          name="TransanctionModal"
          component={TransanctionModal}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="FashionLifeStyleScreen"
          component={FashionLifeStyleScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="TermCondition"
          component={TermCondition}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BulkEgift"
          component={BulkEgift}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen
          name="CreditCardMainScreen"
          component={CreditCardMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CcBillsPayForm"
          component={CcBillsPayForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BillsPaymentStatus"
          component={BillsPaymentStatus}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PreviousTransanctions"
          component={PreviousTransanctions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IPinModal"
          component={IPinModal}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
