import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './navigation';
import useLoading from './hooks/useLoading';

const App = (): JSX.Element => {
  const [loading, error] = useLoading();

  if (loading) return <Text>Loading</Text>;

  if (error) return <Text>Error! {error}</Text>;
  return (
    <SafeAreaProvider>
      <Navigation />
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
