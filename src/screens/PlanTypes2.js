import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, FlatList } from 'react-native';

const PLAN_TYPES = ['ForYou', 'Data', 'Unlimited', 'International Roaming','AddOn'];
import DataPlan from './DataPlan'
import ForYouPlan from './ForYouPlan'
import UnlimitedPlan from './UnlimitedPlan'
import RoamingPlan from './RoamingPlan'
const PlanTypeTabs = ({ activeType, onChange }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {PLAN_TYPES.map((type) => (
        <TouchableOpacity
          key={type}
          onPress={() => onChange(type)}
          style={{
            padding: 20,
            borderBottomWidth: 2,
            borderBottomColor: type === activeType ? 'blue' : '#eee',
            
          }}
        >
          <Text style={{ color: type === activeType ? 'blue' : 'black',fontWeight:'bold' }}>{type}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const PlanTypes2 = () => {
  const [activeType, setActiveType] = useState(PLAN_TYPES[0]);

  const handleTypeChange = (type) => {
    console.log('handleTypeChange called with type:', type);
    setActiveType(type);
  };
  let PlanContent;
  switch (activeType) {
    case 'ForYou':
      PlanContent = <ForYouPlan />;
       break;
     case 'Data':
      PlanContent = <DataPlan />;
      break;
    case 'Unlimited':
      PlanContent = <UnlimitedPlan />;
      break;
    case 'International Roaming':
      PlanContent = <RoamingPlan />;
      break;
    default:
      PlanContent = null;
  }
  

  

  return (
    <View style={{ flex: 1 }}>
      <PlanTypeTabs activeType={activeType} onChange={handleTypeChange} />
      <View style={{ paddingBottom: 10 }}>
    
     </View>
    </View>
  );
};

export default PlanTypes2;
