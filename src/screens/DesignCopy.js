import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,TextInput
} from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
//import FontAwesome from 'react-native-vector-icons/FontAwesome'
//import Tab from './Tab';
//import PagerView from 'react-native-pager-view';
import PlanTypes from './PlanTypes';

const plan = [
  {
    id: 1,
    amount: '19',
    Validity: '28 days',
    plan: 'Unlimited local Std',
    data: '0',
  },
  {
    id: 2,
    amount: '109',
    Validity: '24 days',
    plan: 'Unlimited local Std',
    data: '1GB/Day',
  },
  {
    id: 3,
    amount: '229',
    Validity: '28 days',
    plan: 'Unlimited local Std',
    data: '1GB/Day',
  },

  {
    id: 4,
    amount: '399',
    Validity: '30 days',
    plan: '0',
    data: '1.5GB/Day',
  },
  {
    id: 5,
    amount: '799',
    Validity: '64 days',
    plan: 'Unlimited local Std',
    data: '2.5GB/Day',
  },
  {
    id: 6,
    amount: '1099',
    Validity: '64 days',
    plan: 'Unlimited local Std',
    data: '0',
  },
  {
    id: 7,
    amount: '3509',
    Validity: '365 days',
    plan: 'Unlimited local Std',
    data: '2GB/Day',
  },
  {
    id: 8,
    amount: '115',
    Validity: '28 days',
    plan: '0',
    data: '12GB',
  },
  {
    id: 9,
    amount: '199',
    Validity: '15 days',
    plan: 'Unlimited',
    data: '0',
  },
  {
    id: 10,
    amount: 299,
    Validity: '28days',
    plans: 'Unlimited local Std | Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 11,
    amount: '399',
    Validity: '34days',
    plans: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 12,
    amount: '499',
    Validity: '64days',
    plans: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 13,
    amount: '699',
    Validity: '64days',
    plans: 'Data:3GB/Day',
    day: 'Details:Choose...',
  },
  {
    id: 14,
    amount: '799',
    Validity: '64 days',
    plan: 'Unlimited local Std',
    data: '2.5GB/Day',
  },
  {
    id: 15,
    amount: '1099',
    Validity: '64 days',
    plan: 'Unlimited local Std',
    data: '0',
  },
  {
    id: 16,
    amount: '3509',
    Validity: '365 days',
    plan: 'Unlimited local Std',
    data: '2GB/Day',
  },
  {
    id: 17,
    amount: '19',
    Validity: '1 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 18,
    amount: '109',
    Validity: '24 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 19,
    amount: '229',
    Validity: '28 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },

  {
    id: 20,
    amount: '399',
    Validity: '30 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 21,
    amount: '799',
    Validity: '64 days',
    plan: 'Unlimited local /Std',
    data: '2.5GB/Day',
  },
  {
    id: 22,
    amount: '1099',
    Validity: '64 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 23,
    amount: '3509',
    Validity: '365 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 24,
    amount: '115',
    Validity: '18 days',
    plan: ' unlimited',
    data: '0',
  },
  {
    id: 25,
    amount: '199',
    Validity: '15 days',
    plan: 'Unlimited',
    data: '0',
  },
  {
    id: 26,
    amount: '1101',
    Validity: '28 days',
    plan: 'value pack without wifi calling|on International Roaming around 100 countries|1500 min',
    data: '0',
    Roaming:'true'
  },
  {
    id: 27,
    amount: '5751',
    Validity: '30 days',
    plan: 'Unlimited Packs without wifi calling | Total countries covered:22',
    data: '0',
    Roaming:'true'
  },
  {
    id: 28,
    amount: '2875',
    Validity: '7 days',
    plan: 'value pack without wifi calling|on International Roaming around 100 countries|100 min',
    data: '0',
    Roaming:'true'
  },

  {
    id: 29,
    amount: '575',
    Validity: '1 days',
    plan: 'Unlimited Packs without wifi calling | Total countries covered:22',
    data: '0',
    Roaming:'true'
  },
  {
    id: 30,
    amount: '501',
    Validity: '64 days',
    plan: 'Unlimited Packs without wifi calling | Total countries covered:22',
    data: '250 MB /Day',
    Roaming:'true'
  },
  {
    id: 31,
    amount: '1099',
    Validity: '28 days',
    plan: 'ISD Talktime Rs:424.58 and 5 ISD SMS',
    data: '0',
    Roaming:'true'
  },

];
 const list=[
  {
    id:1,
    name:'For You'

  },
   {
    id:2,
    name:'Data'
   },
   {
    id:3,
    name: 'Unlimited'
   },
   {
    id:4,
    name:'International Roaming'

   }
 ];

const designCopy = () => {
  const[text,setText] = useState()
  const [filteredData, setFilteredData] = useState([]);
  const renderItem = ({item}) => {
    return (
      <View style={styles.planContainer}>
      <View style={styles.amountContainer}>
      <View style={styles.row1}>
          <Icon name="rupee" size={20} color={'black'} style={{paddingTop:4}} />
          <Text style={{fontSize: 22, fontWeight: 'bold', color: 'black',}}>
            {item.amount}
          </Text>
        </View>
        
      </View>
      

        <View style={styles.detailsContainer}>
          <View style={styles.row2}>
            <Text style={{fontWeight:'bold',color:'black'}}>Validity:</Text>
            <Text style={{fontWeight:'bold',color:'black',marginBottom:5}}>{item.Validity}</Text>
            
          </View>
          <View style={styles.row2}>
            <Text>{item.plan}</Text>
            <Icon name='angle-right' size={30} style={{marginLeft:200,fontWeight:'bold',color:'black',marginTop:-15,width:'20%',justifyContent:'flex-end',position:'absolute'}}/>
          </View>

          <View style={styles.row2}>
              <Text>Data:</Text>
              <Text>{item.data}</Text>
          </View>

          <View style={styles.row2}>
              <Text>Roaming:</Text>
              <Text>{item.Roaming}</Text>
          </View>

          <TouchableOpacity>
          <Text style={{fontWeight:'bold',color:'black',opacity:0.5}}>more</Text>
         </TouchableOpacity>
        </View>
      </View>
    );
  };
  // const renderItem2=({item2})=>{
  //  return(
  //     <View>
  //        <Text>For You</Text>
  //        <Text>Data</Text>
  //        <Text>Unlimited</Text>
  //        <Text>International Roaming</Text>
  //     </View>
  //  )
  // }



  
  return (
    <View style={styles.container}>
      {/* <Text>design</Text> */}
      {/* ------------------------------------------ header section--------------------------- */}
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.header}>
            <Icon name="angle-left" size={30} style={{fontWeight: 'bold',color:'blue'}} /> 
              <Text style={{width:50,height:50,borderRadius:50/2, backgroundColor:'#ddd',marginLeft:10}}></Text>
               <View style={{marginLeft:20}}>
                <Text style={{color:'black',fontSize:20,fontWeight:'bold'}}>Jio-Delhi NCR</Text>
                <Text style={{fontSize:15,fontWeight:'bold'}}>89782678999</Text>
               </View>
            
          </View>
          <Icon
            name="rupee"
            size={30}
            style={{
              color: 'green',
              fontSize: 25,
              marginTop: 30,
              paddingtop: 40,
              marginRight: 90,
            }}
          />
        </View>
        {/* --------------------Search Bar---------- */}
        
        <View
          style={styles.searchInput}
        >
          <TextInput
            onChangeText={setText}
            value={text}
            style={{ flex: 1, fontSize: 14, marginRight: 22, paddingLeft: 5 ,}}
            placeholder='Search for Plan'
            
          />
          <Icon
            name="search"
            style={{ color: "black", marginRight: 20 }}
            size={20}
          />
          
        </View>
  
        

        {/* --------------------data-------------------- */}
        <View style={styles.plan}>
          <View style={styles.planType}>
            {/* <Text>For you</Text>
            <Text>Data</Text>
            <Text>Unlimited</Text>
            <Text>International Roaming</Text> */}
            
             <PlanTypes/>
            {/* <Tab/> */}
          </View>
       
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={plan => plan.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // flex:1,
    width:'100%'
  },
  header: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
    paddingLeft: 40,
    marginRight: 100,
    flexDirection:'row'
  },
  profile:{
    flexDirection:'row'
  },
  planType: {
    flexDirection: 'row',
    width:'100%',
    justifyContent: 'space-evenly',
    margin:30,
    paddingLeft:5,
    fontSize:20,
    marginLeft:0,
    marginRight:0
  },
  
  planContainer: {
     flex:1,
    //justifyContent:'center',
    width:'100%',
    marginTop: 30,
    flexDirection:'row',
    
    
    // flex:1,
  },
  row1: {
    flexDirection:'row',
  },
  row2:{
    flexDirection:'row', 
  },
  amountContainer:{
    marginLeft:40,
    width:'15%'
  },
  detailsContainer: {
    flexDirection: 'column',
    marginLeft:40
  },
  searchInput:{
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 60,
    width: "85%",
    //backgroundColor: "red",
    height: 50,
    paddingHorizontal: -30,
    //borderRadius: 20,
    marginTop:20,
    borderWidth: 1,
    // borderColor:'blue',
    paddingLeft: 10,
  }
});
export default designCopy;
