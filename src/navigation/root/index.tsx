import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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

const Stack = createNativeStackNavigator();
const RootNavigator = (): JSX.Element => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name={'Root'} component={BottomTabNavigator} />
  </Stack.Navigator>
);

export default RootNavigator;
