import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';
import useCachedResources from './src/hooks/useCachedResources';
import theme from './src/styles/constants/theme';
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/store';
import { NativeBaseProvider } from 'native-base';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigation />
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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <NativeBaseProvider>
          <App />
        </NativeBaseProvider>
      </ThemeProvider>
    </Provider>
  );
}
