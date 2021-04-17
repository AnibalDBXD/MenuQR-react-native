import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './navigation';
import useLoading from './hooks/useLoading';
import Loading from './components/Loading';

const App = (): JSX.Element => {
  const [loading, error] = useLoading();

  if (error) return <Text>Error! {error}</Text>;
  return (
    <SafeAreaProvider>
      {loading ? <Loading /> : <Navigation />}
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

export default App;
