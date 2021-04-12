import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './navigation';

const App = (): JSX.Element => (
  <SafeAreaProvider>
    <Navigation />
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
  </SafeAreaProvider>
);

export default App;
