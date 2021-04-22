import { StyleSheet } from 'react-native';
import { windowWidth, windowHeight, Colors } from '../../../common/styles';
import { Center } from '../../../common/styles/styles';

const { center } = Center;

const styles = StyleSheet.create({
  scanner: {
    ...center,
    width: windowWidth,
    height: windowHeight,
  },
  frame: {
    width: windowWidth / 1.2,
    height: windowWidth / 1.2,
    borderColor: Colors.White,
    borderWidth: 6,
    borderRadius: 12,
    marginBottom: windowHeight / 8,
  },
});

export default styles;
