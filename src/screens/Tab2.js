// import React, { useState, useRef } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// const PlanCarousel = () => {
//   const [activeTab, setActiveTab] = useState('For You');
//   const carouselRef = useRef(null);

//   const handleTabPress = (tabName) => {
//     setActiveTab(tabName);
//     const tabIndex = ['For You', 'Data', 'Unlimited', 'International Roaming'].indexOf(tabName);
//     carouselRef.current.snapToItem(tabIndex);
//   };

//   const renderTab = (tabName) => {
//     const isActive = activeTab === tabName;
//     return (
//       <TouchableOpacity
//         key={tabName}
//         style={[styles.tabButton, isActive && styles.activeTabButton]}
//         onPress={() => handleTabPress(tabName)}
//       >
//         <Text style={[styles.tabButtonText, isActive && styles.activeTabButtonText]}>{tabName}</Text>
//       </TouchableOpacity>
//     );
//   };

//   const renderPlanItem = (plan) => {
//     return (
//       <View key={plan.name} style={styles.planItem}>
//         <Text style={styles.planName}>{plan.name}</Text>
//         <Text style={styles.planPrice}>{plan.price}</Text>
//         <Text style={styles.planDescription}>{plan.description}</Text>
//       </View>
//     );
//   };

//   const plans = [
//     {
//       name: 'Plan 1',
//       price: '$10/month',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porttitor faucibus enim in sodales.'
//     },
//     {
//       name: 'Plan 2',
//       price: '$20/month',
//       description: 'Nullam luctus, leo nec consectetur interdum, velit enim bibendum ex, vel ultricies sapien sapien sit amet nunc.'
//     },
//     {
//       name: 'Plan 3',
//       price: '$30/month',
//       description: 'Fusce placerat, augue vel luctus scelerisque, mauris risus dictum augue, in pharetra est libero quis nibh.'
//     },
//     {
//       name: 'Plan 4',
//       price: '$40/month',
//       description: 'Praesent commodo ante eget nunc finibus, non sollicitudin mi maximus. In venenatis, velit eget aliquet bibendum.'
//     }
//   ];

//   return (
//     <View style={styles.container}>
//       <View style={styles.tabBar}>
//         {['For You', 'Data', 'Unlimited', 'International Roaming'].map(renderTab)}
//       </View>
//       <Carousel
//         ref={carouselRef}
//         data={plans}
//         renderItem={({ item }) => renderPlanItem(item)}
//         sliderHeight={300}
//         itemHeight={250}
//         vertical={true}
//         onSnapToItem={(index) => setActiveTab(['For You', 'Data', 'Unlimited', 'International Roaming'][index])}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   tabBar: {
//     flexDirection: 'row',
//     backgroundColor: '#f2f2f2',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   tabButton: {
//     flex: 1,
//     paddingVertical: 10,
//     alignItems: 'center',
//   },
//   active
