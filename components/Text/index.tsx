import React from 'react';
import { useFonts } from 'expo-font';
import { Text as ReactText } from 'react-native';

const Text: React.FC = ({ children }): JSX.Element => {
  const [loaded, error] = useFonts({});
  return <ReactText>{children}</ReactText>;
};

export default Text;
