import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import Navigation from './navigation';
import useLoading from './hooks/useLoading';
import Loading from './components/Loading';
import MenuProvider from './context/MenuList/MenuProvider';

const App = (): JSX.Element => {
  const [loading, error] = useLoading();

  if (error) return <Text>Error! {error}</Text>;
  return (
    <MenuProvider>
      <SafeAreaProvider>
        {loading ? <Loading /> : <Navigation />}
        {/* eslint-disable-next-line react/style-prop-object */}
        <StatusBar style="auto" />
      </SafeAreaProvider>
    </MenuProvider>
  );
};

export default App;
