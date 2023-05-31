import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Dash = () => {
  return (
    <View style={styles.container}>
      <Text>Dash</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
});
export default Dash;
