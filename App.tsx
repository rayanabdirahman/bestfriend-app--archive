import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import useCachedResources from './src/hooks/useCachedResources';
import theme from './src/styles/constants/theme';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SignInScreen /> */}
      <SignUpScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return <ActivityIndicator />;
  }
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
