import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  verticalScale,
  scale,
  scaleFont,
  fullHeight,
  fullWidth,
} from './Utility';

const Transactions = () => {
  return (
    <View style={styles.container}>
      <Text>Transactions</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  textBtnContainer: {
    marginTop: verticalScale(60),
    backgroundColor: '#FFFFFF',
    width: scale(320),
    alignSelf: 'center',
    height: verticalScale(178),
    elevation: 4,
  },
});
export default Transactions;
