import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MAX_ICONS = 14;
const ICONS_PER_ROW = 4;
import Fashion from './Vouchers';
import BrandVoucher from './BrandVoucher';
const IconsList = props => {
  const [showAll, setShowAll] = useState(false);

  const icons = [
    {name: 'filmstrip', label: 'movies & shows'},
    {name: 'hanger', label: 'fashion&LifeStyle'},
    {name: 'wallet-giftcard', label: 'physicalBrand'},
    {name: 'message', label: 'Messages'},
    {name: 'settings', label: 'Settings'},
    {name: 'star', label: 'Favorites'},
    {name: 'info', label: 'Info'},
    {name: 'people', label: 'People'},
    {name: 'account-balance', label: 'Balance'},
    {name: 'attach-money', label: 'Money'},
    {name: 'backup', label: 'Backup'},
    {name: 'call', label: 'Call'},
    {name: 'camera', label: 'Camera'},
    {name: 'delete', label: 'Delete'},
  ];

  const visibleIcons = showAll ? icons : icons.slice(0, 3);

  const renderIcon = icon => {
    return (
      <TouchableOpacity key={icon.name} style={styles.iconContainer3}>
        <Icon name={icon.name} size={30} color="#000" />

        <Text style={styles.label}>{icon.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderIcons = () => {
    const rows = [];

    for (let i = 0; i < visibleIcons.length; i += ICONS_PER_ROW) {
      const rowIcons = visibleIcons.slice(i, i + ICONS_PER_ROW);
      const row = (
        <View key={i} style={styles.row}>
          {rowIcons.map(renderIcon)}
        </View>
      );
      rows.push(row);
    }

    return rows;
  };

  const renderMoreButton = () => {
    return (
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => setShowAll(true)}>
        <Text style={styles.label}>
          <Icon2
            name="dashboard-customize"
            size={35}
            style={{color: '#4E74C7'}}
          />
        </Text>
        <Text>More</Text>
      </TouchableOpacity>
    );
  };

  const renderLessButton = () => {
    return (
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => setShowAll(false)}>
        <Text style={styles.label}>Less</Text>
        <Icon name="unfold-less" size={30} color="#000" />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {renderIcons()}
      {icons.length > ICONS_PER_ROW && (
        <View style={styles.buttonContainer}>
          {showAll ? renderLessButton() : renderMoreButton()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container2: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  iconContainer3: {
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 5,

    fontSize: 12,
    marginTop: 5,
  },
  buttonContainer3: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 8,
  },
});
export default IconsList;
