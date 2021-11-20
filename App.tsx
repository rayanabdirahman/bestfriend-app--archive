import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { ThemeProvider } from 'styled-components';
import useCachedResources from './src/hooks/useCachedResources';
import theme from './src/styles/constants/theme';
import Navigation from './src/navigation';
import { Provider, useSelector } from 'react-redux';
import { State, store } from './src/store';
import useToast from './src/hooks/useToast';
import { SessionState } from './src/store/interface';
import useAuthGuard from './src/hooks/useAuthGuard';
import { Spinner } from './src/components';

function App() {
  const { showToast, alerts } = useToast();
  const { isAuthCheckComplete } = useAuthGuard();
  const { token, isLoading } = useSelector<State, SessionState>(
    (state) => state.session
  );

  React.useEffect(() => {
    showToast();
  }, [alerts]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {isLoading || !isAuthCheckComplete ? (
        <Spinner.FullScreen />
      ) : (
        <Navigation isUserSignedIn={token ? true : false} />
      )}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

export default function (): JSX.Element {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center' }}>
        <ActivityIndicator />
      </SafeAreaView>
    );
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
