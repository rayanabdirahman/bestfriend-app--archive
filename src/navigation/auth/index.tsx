import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreenNamesEnum } from '../domain/enums';
import SignUpScreen from '../../screens/SignUp';
import SignInScreen from '../../screens/SignIn';

const options = {
  title: '',
  headerShadowVisible: false,
  headerBackVisible: false
};

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator: React.FC = (): JSX.Element => (
  <AuthStack.Navigator
    initialRouteName={AuthStackScreenNamesEnum.SIGN_UP}
    screenOptions={options}
  >
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP}
      component={SignUpScreen}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_IN}
      component={SignInScreen}
    />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
