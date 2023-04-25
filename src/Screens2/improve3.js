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

  
   
  // const handlePress = value => {
  //   setStarRating(value);
  // };

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
      </TouchableOpacity>
    );
  };


  //const isSubmitDisabled = selectedArea === 0;
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
            selected={selectedButtons.includes("Performance")}
            onPress={() => handleAreaImprovePress('Performance')}
            />
           <Text style={styles.checkmark}>✓</Text>
          {/* ------------Button 2------------ */}
          <Button
            label='Service'
            selected={selectedButtons.includes("Service")}
            onPress={() => handleAreaImprovePress('Service')}
            />
           <Text style={styles.checkmark}>✓</Text>
          {/* ------------Button 3------------ */}
          <Button
            label='Product'
            selected={selectedButtons.includes("Product")}
            onPress={() => handleAreaImprovePress('Product')}
            />
          <Text style={styles.checkmark}>✓</Text>

          {/* ------------Button 4------------ */}
          <Button
            label='UserExperience'
            selected={selectedButtons.includes("User Experience")}
            onPress={() => handleAreaImprovePress('User Experience')}
            />
          <Text style={[styles.checkmark]}>✓</Text>

        </View>
        </View>

      {/* -------------------Text field------------ */}
      <View style={{marginLeft: 20, marginTop: 30}}>
        <Text style={{fontSize: 20, color: 'black'}}>Other Issue</Text>
        <TextInput style={styles.input} setText={setText} value={text} />
      </View>
      {/* -------------------Submit Feedback------------ */}
      <TouchableOpacity> 
        
    
        <Text style={styles.buttonTxt}>Submit Feedback</Text>
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
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 50,
    backgroundColor: 'white',
    width: '50%',
    marginTop: 20,
  },
  areaContainer1: {
    flexDirection: 'row',
    flexWrap:'wrap',
    marginBottom: 30,
  },
  areaContainer2: {
    flexDirection: 'row',
    marginTop: -10,
  },
  categoryButton: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    marginTop: 10,
    marginLeft: 10,
  },
  categoryButtonText: {
    color: '#333',
    fontSize: 15,
  },
  checkmark: {
    color: 'blue',
    fontWeight: 'bold',
    position: 'absolute',
    top: 5,
    //paddingLeft: 80,
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
   // backgroundColor: '#eee',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    marginRight: 0, // default value

    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '30%',
    marginTop: 10,
    marginLeft: 10,
  },
  // selectedButton: {
  //   backgroundColor: 'blue',
  // },
  buttonText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  selectedButtonText: {
    color: 'white',
  },
  buttonMarginRight: {
    marginRight: 10, // add margin only to non-last buttons
  },
  buttonSubmit: {
    backgroundColor: '#ccc',
    borderRadius: 5,
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
    backgroundColor: '#ccc',
  },
  buttonTxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
});
export default Improve;
