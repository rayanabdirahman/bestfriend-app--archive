import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackScreenNamesEnum } from '../domain/enums';
import SignUpScreen from '../../screens/SignUp';
import SignInScreen from '../../screens/SignIn';
import SignUpFormNameScreen from '../../screens/SignUp/components/SignUpFormName';
import theme from '../../styles/constants/theme';
import SignUpFormUsernameScreen from '../../screens/SignUp/components/SignUpFormUsername';
import SignUpFormEmailScreen from '../../screens/SignUp/components/SignUpFormEmail';
import SignUpFormPasswordScreen from '../../screens/SignUp/components/SignUpFormPassword';
import SignInFormScreen from '../../screens/SignIn/SignInForm';

const defaultOptions = {
  title: '',
  headerShadowVisible: false,
  headerBackVisible: false
};

const authFormOptions = {
  headerBackVisible: true,
  headerBackTitle: '',
  headerTintColor: theme.color.black
};

const AuthStack = createNativeStackNavigator();
const AuthStackNavigator: React.FC = (): JSX.Element => (
  <AuthStack.Navigator
    initialRouteName={AuthStackScreenNamesEnum.SIGN_UP}
    screenOptions={defaultOptions}
  >
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP}
      component={SignUpScreen}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_IN}
      component={SignInScreen}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP_FORM_NAME}
      component={SignUpFormNameScreen}
      options={{ ...authFormOptions, title: 'Sign up' }}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP_FORM_USERNAME}
      component={SignUpFormUsernameScreen}
      options={{ ...authFormOptions, title: 'Sign up' }}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP_FORM_EMAIL}
      component={SignUpFormEmailScreen}
      options={{ ...authFormOptions, title: 'Sign up' }}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_UP_FORM_PASSWORD}
      component={SignUpFormPasswordScreen}
      options={{ ...authFormOptions, title: 'Sign up' }}
    />
    <AuthStack.Screen
      name={AuthStackScreenNamesEnum.SIGN_IN_FORM}
      component={SignInFormScreen}
      options={{ ...authFormOptions, title: 'Sign in' }}
    />
  </AuthStack.Navigator>
);

export default AuthStackNavigator;
