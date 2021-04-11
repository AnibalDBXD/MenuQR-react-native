import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './navigation';

const App = (): JSX.Element => (
  <>
    <Navigation />
    {/* eslint-disable-next-line react/style-prop-object */}
    <StatusBar style="auto" />
  </>
);

export default App;
