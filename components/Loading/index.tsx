import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Colors } from '../../common/styles';
import { Center } from '../../common/styles/styles';

const Loading: React.FC = (): JSX.Element => (
  <View style={Center.center}>
    <ActivityIndicator size={128 || 'large'} color={Colors.DodgerBlue} />
  </View>
);

export default Loading;
