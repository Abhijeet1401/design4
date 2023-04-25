import { View, Text ,FlatList,StyleSheet,TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
const plan = [
  {
    id: 1,
    amount: '19',
    Validity: '1 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 2,
    amount: '109',
    Validity: '24 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 3,
    amount: '229',
    Validity: '28 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },

  {
    id: 4,
    amount: '399',
    Validity: '30 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 5,
    amount: '799',
    Validity: '64 days',
    plan: 'Unlimited local /Std',
    data: '2.5GB/Day',
  },
  {
    id: 6,
    amount: '1099',
    Validity: '64 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 7,
    amount: '3509',
    Validity: '365 days',
    plan: 'Unlimited local /Std',
    data: '0',
  },
  {
    id: 8,
    amount: '115',
    Validity: '18 days',
    plan: ' unlimited',
    data: '0',
  },
  {
    id: 9,
    amount: '199',
    Validity: '15 days',
    plan: 'Unlimited',
    data: '0',
  },

];
const UnlimitedPlan = () => {
  const renderItem2 = ({item}) => {
    return (
      <ScrollView>
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
            <Icon name='angle-right' size={30} style={{marginLeft:200,fontWeight:'bold',color:'black',marginTop:-10,marginTop:-15,width:'20%',justifyContent:'flex-end',position:'absolute'}}/>
          </View>

          <View style={styles.row2}>
              <Text>Data:</Text>
              <Text>{item.data}</Text>
        
          </View>
          <TouchableOpacity>
          <Text style={{fontWeight:'bold',color:'black',opacity:0.5}}>more</Text>
         </TouchableOpacity>
        </View>

        
      </View>
      </ScrollView>
    );
  };

  
  return (
     
     <ScrollView>
     <FlatList
            data={plan}
            renderItem={renderItem2}
            keyExtractor={(plan) => plan.id}
          />

     </ScrollView>
       
  
  )
}
const styles= StyleSheet.create({
   
  planContainer: {
    flex:1,
   //justifyContent:'center',
   width:'100%',
   marginTop: 30,
   flexDirection:'row',
   
   
   // flex:1,
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
})
export default UnlimitedPlan
