import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Icon4 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/Octicons';
import Icon6 from 'react-native-vector-icons/Feather';

import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

import Navigation from '../MainNavigation/Navigation';
import {useState} from 'react';
import DigiKendraMappingForm from './DigiKendraMappingForm';
import LoadMoneyDgKendra from './LoadMoneyDgKendra';

const data = [
  {
    id: 1,
    per: 'Vs last month',
    title: 'Today',
    amount: '₹867',
  },
  {
    id: 2,
    title: 'MTD',
    per: 'Vs last month',
    amount: '₹867',
  },
  {
    id: 3,
    title: 'LMT',
    per: 'Vs last month',
    amount: '₹867',
  },
  {
    id: 4,
    title: 'LMT',
    per: 'Vs last month',
    amount: '₹867',
  },
];

const report = [
  {label: 'Last to Last Month', value: 99999, progress: 30},
  {label: 'Last Month', value: 99999, progress: 0},
  {label: 'Last Month Till Date', value: 99999, progress: 40},
  {label: 'Month Till Date', value: 99999, progress: 50},
  {label: 'Today', value: 99999, progress: 40},
];

const ReportDigiKendra = ({navigation}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [showDownIcon, setShowDownIcon] = useState(true);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  const handlePressDropDown = () => {
    setShowDownIcon(!showDownIcon);
  };

  // render Item1
  //   const renderItem = ({item, index}) => {
  //     return (
  //       <TouchableOpacity
  //         activeOpacity={1}
  //         key={index}
  //         style={styles.ReportContainer}>
  //         <View style={{height: verticalScale(146)}}>
  //           <View style={styles.reportView}>
  //             {/* Top View */}
  //             <View style={styles.topInfo}>
  //               <View
  //                 style={{
  //                   width: scale(20),
  //                   height: scale(20),
  //                   backgroundColor: '#0488484C',
  //                   borderRadius: 10,
  //                 }}>
  //                 <View>
  //                   <Icon6
  //                     name="arrow-up-right"
  //                     color="#048848"
  //                     size={20}
  //                     style={styles.reportArrow}
  //                   />
  //                 </View>
  //               </View>
  //               <View style={{}}>
  //                 <Text
  //                   style={{
  //                     color: '#048848',
  //                     fontFamily: 'Inter-SemiBold',
  //                     fontSize: scaleFont(12),
  //                   }}>
  //                   34.7%
  //                 </Text>
  //                 <Text
  //                   style={{
  //                     fontSize: scaleFont(7),
  //                     fontFamily: 'Inter-SemiBold',
  //                     color: '#727272',
  //                   }}>
  //                   {item.per}
  //                 </Text>
  //               </View>
  //             </View>
  //             {/* bottom View */}

  //             <View style={styles.bottomInfo}>
  //               <Text style={styles.bottomTextInfo}>{item.title}</Text>
  //               <Text style={styles.amountInfo}>{item.amount}</Text>
  //             </View>
  //           </View>
  //         </View>
  //       </TouchableOpacity>
  //     );
  //   };
  // render Item 2
  const renderItem2 = ({item}) => (
    <View
      style={{
        marginTop: verticalScale(22),
        flexDirection: 'row',
        width: scale(300),
        alignSelf: 'center',
        justifyContent: 'space-around',
        //backgroundColor: 'red',
      }}>
      <View style={{width: verticalScale(160)}}>
        <Text style={styles.label}>{item.label}</Text>
      </View>
      <View style={{width: verticalScale(50), flex: 1}}>
        <Text style={styles.value}>{item.value}</Text>
      </View>
      <View style={{width: verticalScale(30)}}>
        <Text
          style={[
            styles.progress,
            item.label === 'Last Month' && styles.progressStyling,
          ]}>
          {item.progress}%
        </Text>
      </View>
    </View>
  );

  const customListFooter = () => {
    return (
      <View style={styles.container}>
        {/* dg kendra info details */}
        <View style={styles.dginfoContainer}>
          <View style={styles.dgkDetails}>
            <Text style={styles.dgkName}>Ahuja Paint Depo</Text>
            <Text style={{color: '#727272', fontSize: scaleFont(11)}}>
              Prem Ahuja
            </Text>
            <Text style={{color: '#727272', fontSize: scaleFont(11)}}>
              UID no.- 307727
            </Text>
          </View>
          <View style={styles.dgkwalletContainer}>
            <View style={styles.walletView}>
              <Text
                style={{
                  color: '#727272',
                  fontSize: scaleFont(11),
                  fontFamily: 'Inter-Regular',
                }}>
                Wallet Balance
              </Text>
              <View style={styles.walletAmtView}>
                <Text
                  style={{
                    color: '#0033A1',
                    fontSize: scaleFont(18),
                    fontFamily: 'Inter-Bold',
                  }}>
                  ₹1,27,325.34
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate(LoadMoneyDgKendra)}>
                  <View
                    style={{
                      width: scale(53),
                      height: verticalScale(23),
                      backgroundColor: '#F4F6F8',
                      alignItems: 'center',
                      borderRadius: verticalScale(7),
                    }}>
                    <Text
                      style={{
                        alignItems: 'center',
                        marginTop: verticalScale(5),
                        color: '#0033A1',
                        fontSize: scaleFont(11),
                        fontFamily: 'Inter-Regular',
                      }}>
                      Topup
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        {/* flat list moving data */}
        <ScrollView
          horizontal={true}
          style={{width: scale(330), alignSelf: 'center'}}>
          <View
            style={{
              alignSelf: 'center',
              flexDirection: 'row',
            }}>
            {data.map((item, index) => (
              <TouchableOpacity
                activeOpacity={1}
                key={index}
                style={styles.ReportContainer}>
                <View>
                  <View style={styles.reportView}>
                    {/* Top View */}
                    <View style={styles.topInfo}>
                      <View
                        style={{
                          width: scale(20),
                          height: scale(20),
                          backgroundColor: '#0488484C',
                          borderRadius: 10,
                        }}>
                        <View>
                          <Icon6
                            name="arrow-up-right"
                            color="#048848"
                            size={20}
                            style={styles.reportArrow}
                          />
                        </View>
                      </View>
                      <View style={{}}>
                        <Text
                          style={{
                            color: '#048848',
                            fontFamily: 'Inter-SemiBold',
                            fontSize: scaleFont(12),
                          }}>
                          34.7%
                        </Text>
                        <Text
                          style={{
                            fontSize: scaleFont(7),
                            fontFamily: 'Inter-SemiBold',
                            color: '#727272',
                          }}>
                          {item.per}
                        </Text>
                      </View>
                    </View>
                    {/* bottom View */}

                    <View style={styles.bottomInfo}>
                      <Text style={styles.bottomTextInfo}>{item.title}</Text>
                      <Text style={styles.amountInfo}>{item.amount}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
        {/* business by product */}
        <View style={styles.businessProductContainer}>
          <View style={styles.businessproductView}>
            <View>
              <Text style={styles.productText}>Business By Product</Text>
            </View>
            <View style={styles.downloadIcon}>
              <Icon5
                name="download"
                size={20}
                color={'black'}
                style={{padding: 6}}
              />
            </View>
          </View>
        </View>
        {/* money transfer container */}
        <View style={styles.moneyTransferContainer}>
          <View style={styles.moneyTransferView}>
            <View>
              <Text style={styles.mtdTitle}>Money Transfer (Domestic)</Text>
            </View>
            <TouchableOpacity
              style={styles.iconDropdown}
              onPress={() => (toggleOptions(), handlePressDropDown())}
              onDoubleClick={toggleOptions}>
              <View style={styles.download}>
                <Icon
                  name={showDownIcon ? 'caret-down' : 'caret-up'}
                  size={30}
                  color={'black'}
                />
                {/* <Icon name="caret-down" size={30} color={'black'} /> */}
              </View>
            </TouchableOpacity>
          </View>
          {/* showing options for money Transfer */}

          {showOptions && (
            <View style={styles.optionsContainer}>
              <View style={styles.optionView}>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    Balance enquiry via AePS
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    Bank Account Verification
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>Money Received via UPI</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>Money Sent to Paytm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>Mini Statement via AePS</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                  <Text style={styles.optionText}>
                    Cash Withdrawal via AePS
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        {/* reporting details data */}

        <FlatList
          scrollEnabled={false}
          data={report}
          renderItem={renderItem2}
          keyExtractor={item => item.label}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="angle-left"
                size={30}
                style={styles.arrow}
                color={'#0033A1'}
              />
            </TouchableOpacity>
            <Text style={styles.titleText}>Reporting</Text>
          </View>
        </View>
      </View>
      <FlatList ListFooterComponent={customListFooter} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: verticalScale(48),
    width: scale(330),
    backgroundColor: '#FFFFFF',
    // backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',

    // marginBottom:verticalScale(22)
  },
  headerLeft: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: scale(110),
    //backgroundColor: 'green',
    //width: '70%',
    flexDirection: 'row',
  },
  // headerRight: {
  //   justifyContent: 'space-between',
  //   flexDirection: 'row',
  //   width: scale(70),
  // },
  titleText: {
    color: '#0033A1',
    fontSize: scaleFont(18),
    fontFamily: 'Inter-Medium',
  },

  dginfoContainer: {
    width: scale(330),
    alignSelf: 'center',
    borderRadius: verticalScale(12),
    height: verticalScale(140),

    backgroundColor: '#F5F7FB',
  },
  dgkDetails: {
    marginTop: verticalScale(13),
    alignSelf: 'center',
    width: scale(300),
    fontFamily: 'Inter-Bold',
  },
  dgkName: {
    color: '#1D1D1D',
    fontSize: scaleFont(16),
  },
  dgkwalletContainer: {
    marginTop: verticalScale(9),
    alignSelf: 'center',
    width: scale(300),
    backgroundColor: '#FFFFFF',
    height: verticalScale(60),
    borderRadius: verticalScale(6),
  },
  walletView: {
    height: verticalScale(60),
    width: scale(270),
    alignSelf: 'center',
    marginTop: verticalScale(8),
  },
  walletAmtView: {
    height: verticalScale(33),
    width: scale(270),
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: verticalScale(6),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    flex: 1,
    color: '#1D1D1D',
    fontSize: scaleFont(12),
    color: '#727272',
    fontFamily: 'Inter-Regular',
  },
  ReportContainer: {
    marginTop: verticalScale(18),
    paddingRight: scale(11),
  },
  reportView: {
    width: scale(135),
    height: verticalScale(146),
    borderRadius: verticalScale(8),
    backgroundColor: '#F5F7FB',
    alignItems: 'center',
    alignSelf: 'center',
  },
  topInfo: {
    marginTop: verticalScale(13),
    //height: verticalScale(120),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(110),
  },
  reportArrow: {
    //transform: [{rotate: '45deg'}],
  },
  bottomInfo: {
    marginTop: verticalScale(49),
    width: scale(110),
  },
  bottomTextInfo: {
    color: '#1D1D1D',
    fontSize: scaleFont(11),
    fontFamily: 'Inter-Regular',
  },
  amountInfo: {
    color: '#0033A1',
    fontFamily: 'Inter-SemiBold',
    fontSize: 24,
  },
  // ReportingDetailsContainer
  ReportingDetailsContainer: {
    marginTop: verticalScale(15),
    width: scale(330),
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
  },
  reportingView: {
    width: scale(300),
    height: verticalScale(72),
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  LeftSideContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    width: scale(200),
    justifyContent: 'space-between',
    // backgroundColor: 'red',
  },
  dgkProfile: {
    width: scale(80),
  },
  businessProductContainer: {
    marginTop: verticalScale(10),
    width: scale(330),
    alignSelf: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 0,
  },
  businessproductView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(300),
    alignSelf: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    backgroundColor: '#F5F7FB',
    width: scale(28),
    height: verticalScale(28),
    alignItems: 'center',

    borderRadius: verticalScale(6),
  },
  productText: {
    color: '#727272',
    fontSize: scaleFont(12),
    fontFamily: 'Inter-SemiBold',
  },
  moneyTransferContainer: {
    marginTop: verticalScale(17),
    width: scale(330),
    alignSelf: 'center',
    borderTopWidth: 0,
    backgroundColor: '#FFFFFF',
    borderRadius: verticalScale(12),
    borderTopColor: '#FFFFFF',
    elevation: 1,
  },
  moneyTransferView: {
    height: verticalScale(52),
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: scale(300),
    alignSelf: 'center',
    alignItems: 'center',
  },
  mtdTitle: {
    color: '#1D1D1D',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(14),
  },
  border: {
    width: scale(310),
    marginTop: verticalScale(8),
    justifyContent: 'center',
    alignSelf: 'center',
    opacity: 0.1,
    borderStyle: 'dashed',
    borderBottomWidth: 1,
    color: '#BEBEBE',
  },
  // Css for bottom data report
  label: {
    color: '#1D1D1D',
    fontFamily: 'Inter-Bold',
    fontSize: scaleFont(12),
  },
  value: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(12),
    color: '#727272',
  },
  progress: {
    fontFamily: 'Inter-SemiBold',
    fontSize: scaleFont(12),
    color: '#048848',
    textAlign: 'right',
  },
  progressStyling: {
    color: '#E50000',
    fontSize: scaleFont(12),
  },
  // css for money transfer Options
  optionsContainer: {
    backgroundColor: '#F5F7FB',
    // borderBottomLeftRadius: verticalScale(6),
    // borderBottomRightRadius: verticalScale(6),
    borderBottomLeftRadius: verticalScale(12),
    borderBottomRightRadius: verticalScale(12),

    width: scale(330),
    alignSelf: 'center',
  },
  optionView: {
    width: scale(300),
    alignSelf: 'center',
    marginTop: verticalScale(9),
    marginBottom: verticalScale(9),
  },
  option: {
    marginTop: verticalScale(17),
  },
  optionText: {
    color: '#1D1D1D',
    fontSize: scaleFont(14),
    fontFamily: 'Inter-Regular',
  },
});
export default ReportDigiKendra;
