import {View, Text,StyleSheet,focused} from 'react-native';
import React, {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap,} from 'react-native-tab-view';
import { TabBar } from 'react-native-tab-view';

const FirstRoute = () => <View style={{color:'black',flex:1}} />
const SecondRoute = () =><View style={{color:'black',flex:1}} />;

//const ThirdRoute = () => <View  style={{color:'black',flex:1}} />;
const ThirdRoute = ({unlimitedPlans}) => (
  <View style={{color:'black',flex:1}}>
    {unlimitedPlans.map((plan) => (
      <Text>{plan.title}</Text>
    ))}
  </View>
);


const FourthRoute = () => <View style={{color:'black',flex:1}} />;

renderLabel2 = ({ route, focused }) => {
  return (
    <View>
      <Text
        style={[focused ? styles.activeTabTextColor : styles.tabTextColor]}
      >
        {route.title}
      </Text>
    </View>
  )
  }
  

const ForYou=[
  {
    id: 1,
    amount: '19',
    Validity: '28 days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 2,
    amount: '109',
    Validity: '28 days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 3,
    amount: '229',
    Validity: '28 days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },

  {
    id: 4,
    amount: '399',
    Validity: '30 days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 5,
    amount: '799',
    Validity: '64days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 6,
    amount: '1099',
    Validity: '64days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 7,
    amount: '3509',
    Validity: '64days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
  {
    id: 7,
    amount: '3509',
    Validity: '365days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: '|100/Day| Details:Choose...',
  },
]
 const Data =[
  {
    id: 1,
    amount: '299',
    Validity: '28days',
    plan: 'Unlimited local Std | Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 2,
    amount: '399',
    Validity: '34days',
    plan: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 3,
    amount: '499',
    Validity: '64days',
    plan: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 4,
    amount: '699',
    Validity: '64days',
    plan: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
 ]
 const unlimitedPlans=[
  {
    id: 1,
    amount: '199',
    Validity: '24days',
    plan: 'Unlimited local Std',
    day: 'Details:Choose...',
  },
  {
    id: 2,
    amount: '199',
    Validity: '24days',
    plan: 'Unlimited local Std',
    day: 'Details:Choose...',
  },
  {
    id: 3,
    amount: '399',
    Validity: '31days',
    plan: 'Unlimited local Std',
    day: 'Details:Choose...',
  },
  {
    id: 4,
    amount: '599',
    Validity: '180days',
    plan: 'Unlimited local Std',
    day: 'Details:Choose...',
  },
  {
   id: 5,
    amount: '1899',
    Validity: '365days',
    plan: 'Unlimited local Std',
    day: 'Details:Choose...',
  },
 ]

// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
//   fourth:FourthRoute,

// });

const renderScene = ({route}) => {
  switch (route.key) {
    case 'first':
      return <FirstRoute/>;
    case 'second':
      return <SecondRoute  />;
    case 'third':
      return <ThirdRoute jumpTo={unlimitedPlans} />;
    case 'fourth':
      return <FourthRoute/>;
    default:
      return null;
  }
};
const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'blue' }}
    style={{ backgroundColor: 'white',height:55 }}
    renderLabel={({focused,route}) => (
  
    // <Text style={{color: 'blue', margin: 3,fontWeight:'bold'}}>
     <Text style={[focused?styles.activeTabTextColor:styles.tabTextColor,]}>
     {route.title}
     
  </Text>
     
  )}
   
  />
);
 
const Tab = () => {
  const layout = useWindowDimensions();
  
  const [index, setIndex] = React.useState(0);
  const [routes] = useState([
    {key: 'first', title: 'ForYou'},
    {key: 'second', title: 'Data'},
    {key: 'third', title: 'Unlimited'},
    {key: 'fourth', title:'InternationalRoaming'},
    
  ]);
  return (
  
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
      renderTabBar={renderTabBar}
      

    />
   
  );
};
const styles=StyleSheet.create({
  activeTabTextColor: {
    color: 'blue'
  },
  tabTextColor: {
    color: 'black'
  }

})

export default Tab;
