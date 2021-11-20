import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './auth';
import RootNavigator from './root';

type Props = {
  isUserSignedIn: boolean;
};

const Navigation: React.FC<Props> = ({ isUserSignedIn }): JSX.Element => {
  return (
    <NavigationContainer>
      {isUserSignedIn ? <RootNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
