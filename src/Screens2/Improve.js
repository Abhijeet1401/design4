import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Rating from './Rating';

const Improve = ({route}) => {
  const [text, setText] = useState();
  const [starRating, setStarRating] = useState(0);
  const rate = [1, 2, 3, 4, 5];
  const [selectedArea, setSelectedArea] = useState([]);
  

  
   const handleSubmit=()=>{
  
   }
  const handlePress = value => {
    setSelectedArea(value);
  };

  const handleAreaImprovePress = (area) => {
   //setSelectedArea(area);
   if(selectedArea.includes(area)){
    setSelectedArea(selectedArea.filter((e)=>e!==area))
   }else{
    setSelectedArea([...selectedArea,area])
   }
  };
  const Button = ({ label, onPress, selected }) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.button, selected && styles.selectedButton]}
      >
        <Text style={[styles.buttonText, selected && styles.selectedButtonText]}>
          {label}
        </Text>
        {selected && (<Text style={styles.checkmark}>✓</Text>)}
      </TouchableOpacity>
    );
  };


  
  return (
    <View style={styles.container}>
      {/* <Text>how can we Improve</Text> */}
      <View style={styles.title}>
        <Icon
          name="angle-left"
          size={25}
          style={{
            marginTop: 30,
            position: 'absolute',
            marginLeft: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}
        />
        <Text
          style={{
            marginLeft: 40,
            marginTop: 30,
            position: 'absolute',
            fontSize: 20,
            color: 'blue',
            fontWeight: 'bold',
          }}>
          How can we improve
        </Text>
      </View>

      <View style={styles.msg}>
        <Text style={{fontSize: 25, color: 'black'}}>Rate Your experience</Text>
        <View style={styles.starsContainer}>
          {/* {rate.map(value => (
            <TouchableOpacity
              key={value}
              onPress={() => handlePress(value)}
              onLongPress={() => handlePress(0)}>
              <Icon
                size={35}
                name={value <= starRating ? 'star' : 'star-o'}
                color={value <= starRating ? 'blue' : 'grey'}
              />
            </TouchableOpacity>
          ))} */}
          {
            rate.map((value)=>(
              value<=route.params.rating? <Icon
                size={35}
                name='star'
                color='blue'
              />: console.log('')
            ))
          }
        </View>
      </View>
      {/* --------------------- area of Improvement------------------ */}
      <View style={styles.improvement}>
        <Text style={{fontSize: 20, color: 'black'}}>Area Of Improvement</Text>
        <View style={styles.areaContainer1}>
          {/* ------------Button 1------------ */}
          <Button
            label='Performance'
            selected={selectedArea.includes("Performance")}
            onPress={() => handleAreaImprovePress('Performance')}
            />
          {/* <Text style={[styles.checkmark,styles.selectedCheck]}>✓</Text> */}
        
          {/* ------------Button 2------------ */}
          <Button
            label='Service'
            selected={selectedArea.includes("Service")}
            onPress={() => handleAreaImprovePress('Service')}
            />
          {/* <Text style={styles.checkmark}>✓</Text> */}
          {/* ------------Button 3------------ */}
          <Button
            label='Product'
            selected={selectedArea.includes("Product")}
            onPress={() => handleAreaImprovePress('Product')}
            />
          {/* <Text style={styles.checkmark}>✓</Text> */}

          {/* ------------Button 4------------ */}
          <Button
            label='UserExperience'
            selected={selectedArea.includes("User Experience")}
            onPress={() => handleAreaImprovePress('User Experience')}
            />
          {/* <Text style={[styles.checkmark]}>✓</Text> */}

        </View>
        </View>

      {/* -------------------Text field------------ */}
      <View style={{marginLeft: 20, marginTop: 30}}>
        <Text style={{fontSize: 20, color: 'black'}}>Other Issue</Text>
        <TextInput style={styles.input} setText={setText} value={text} />
      </View>
      {/* -------------------Submit Feedback------------ */}
      <TouchableOpacity
        style={[
          styles.buttonSubmit,selectedArea.length>0 && styles.selectedButton2   
        ]}
        >
        <Text style={[styles.buttonTxt,selectedArea.length>0 && styles.selectedArea]}>Submit Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  msg: {
    marginTop: 80,
    marginLeft: 30,
  },
  improvement: {
    marginTop: 80,
    marginLeft: 10,
    width: '100%',
    flexWrap:'wrap',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
    backgroundColor: 'white',
    width: '50%',
    marginTop: 20,
    padding:5
  },
  areaContainer1: {
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom: 30,
  },
 
  // categoryButton: {
  //   paddingVertical: 5,
  //   paddingHorizontal: 10,
  //   borderRadius: 5,
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   width: '30%',
  //   marginTop: 10,
  //   marginLeft: 10,
  // },
  // categoryButtonText: {
  //   color: '#333',
  //   fontSize: 15,
  // },
  checkmark: {
    
    color:'blue',
    position:'absolute',
    alignSelf:'flex-end',
     marginTop:8,
    paddingRight:5
    
  },
  selectedCheck:{
   color:'blue'
  },
  input: {
    height: 130,
    marginTop: 30,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    width: '90%',
    padding: 10,
  },
  activeCategoryButton: {
    borderColor: 'blue',
  },
  activeCategoryButtonText: {
    color: 'blue',
  },
  button: {
    backgroundColor: '#eee',
    paddingHorizontal: 25,
    paddingVertical:10,
    margin: 10,
    borderRadius: 10,
    marginRight: 0, // default value
    borderWidth:1,
    borderColor:'#eee'
  },
  selectedButton: {
    borderColor: 'blue',
    
  },
  selectedButton2 :{
     backgroundColor:'blue'
  },
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'blue',
  },
  buttonMarginRight: {
    marginRight: 10, 
  },
  buttonSubmit: {
    backgroundColor: '#eee',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    width: '60%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
  },
  enabledButton: {
    backgroundColor: 'blue',
  },
  disabledButton: {
    backgroundColor: '#eee',
  },
  buttonTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Improve;
