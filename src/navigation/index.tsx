import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './auth';

const Navigation: React.FC = (): JSX.Element => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};

export default Navigation;
