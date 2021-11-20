import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import FeedScreen from '../../screens/Feed';
const defaultOptions = {
  title: '',
  headerShadowVisible: false,
  headerBackVisible: false
};

const BottomTab = createBottomTabNavigator();
function BottomTabNavigator() {
  return (
    <BottomTab.Navigator defaultScreenOptions={defaultOptions}>
      <BottomTab.Screen name="Feed" component={FeedScreen} />
    </BottomTab.Navigator>
  );
}

export default BottomTabNavigator;
