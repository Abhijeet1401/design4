import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CheckVoucherBalanceFormModal from '../brandVoucher/CheckVoucherBalanceFormModal';
import TransanctionModal from '../brandVoucher/TransanctionModal';
import ShowVoucherBalanceModal from '../brandVoucher/ShowVoucherBalanceModal.js';
import BrandVoucher2 from '../brandVoucher/BrandVoucher2';
import FashionLifeStyleScreen from '../brandVoucher/FashionLifeStyleScreen';
import EGiftVoucherFormModal from '../brandVoucher/EGiftVoucherFormModal';
import TermCondition from '../brandVoucher/TermCondition';
import BulkEgift from '../brandVoucher/BulkEgift';
import IPinModal from '../brandVoucher/IPinModal';
import TransactionStatusModal from '../brandVoucher/TransactionStatusModal';
import BrandVoucherMainScreen from '../brandVoucher/BrandVoucherMainScreen.js';
import CreditCardMainScreen from '../creditCard/CreditCardMainScreen';
import CcBillsPayForm from '../creditCard/CcBillsPayForm';
import BillsPaymentStatus from '../creditCard/BillsPaymentStatus';
import PreviousTransanctions from '../creditCard/PreviousTransanctions';
import CcIPinModal from '../creditCard/CcIPinModal';
import ReportingMainScreen from '../reporting/ReportingMainScreen';
import DigiKendraMappingForm from '../reporting/DigiKendraMappingForm';
import ReportDigiKendra from '../reporting/ReportDigiKendra';
import LoadMoneyDgKendra from '../reporting/LoadMoneyDgKendra';
import MoneyTransferMainScreen from '../nepalMoney/MoneyTransferMainScreen';
import RemitterDetails from '../nepalMoney/RemitterDetails';
import Transactions from '../nepalMoney/Transactions';
import RegisterRemitter from '../nepalMoney/RegisterRemitter';
import BeneficiaryListScreen from '../nepalMoney/BeneficiaryListScreen';
import AddBeneficiaryScreen from '../nepalMoney/AddBeneficiaryScreen';
import CashTransfer from '../nepalMoney/CashTransfer';
import BankTransfer from '../nepalMoney/BankTransfer';
import CashFundTransfer from '../nepalMoney/CashFundTransfer';
import BankFundTransfer from '../nepalMoney/BankFundTransfer';
import ContactsMainScreen from '../contacts/ContactsMainScreen';
import Dash from '../contacts/Dash';
import Contacts from '../contacts/Contacts';
import Nearby from '../contacts/Nearby';
import Profile from '../contacts/Profile';
import Explore from '../contacts/Explore';
import AddContactMainScreen from '../contacts/AddContactMainScreen';
import ContactDetails from '../contacts/ContactDetails';
import PaymentAccounts from '../contacts/PaymentAccounts';
import Addresses from '../contacts/Addresses';
import RegistrationInformation from '../contacts/RegistrationInformation';
import Notes from '../contacts/Notes';
import AddBulkContact from '../contacts/AddBulkContact';
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
      <Stack.Navigator initialRouteName="BrandVoucherMainScreen">
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

        <Stack.Screen
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
        />

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
        <Stack.Screen
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
        />

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
          name="CcIPinModal"
          component={CcIPinModal}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="ReportingMainScreen"
          component={ReportingMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DigiKendraMappingForm"
          component={DigiKendraMappingForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ReportDigiKendra"
          component={ReportDigiKendra}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoadMoneyDgKendra"
          component={LoadMoneyDgKendra}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MoneyTransferMainScreen"
          component={MoneyTransferMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RemitterDetails"
          component={RemitterDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterRemitter"
          component={RegisterRemitter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BeneficiaryListScreen"
          component={BeneficiaryListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBeneficiaryScreen"
          component={AddBeneficiaryScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashTransfer"
          component={CashTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankTransfer"
          component={BankTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CashFundTransfer"
          component={CashFundTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BankFundTransfer"
          component={BankFundTransfer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactsMainScreen"
          component={ContactsMainScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Dash"
          component={Dash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Explore"
          component={Explore}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Nearby"
          component={Nearby}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="AddContactMainScreen"
          component={AddContactMainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ContactDetails"
          component={ContactDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentAccounts"
          component={PaymentAccounts}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Addresses"
          component={Addresses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegistrationInformation"
          component={RegistrationInformation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddBulkContact"
          component={AddBulkContact}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
