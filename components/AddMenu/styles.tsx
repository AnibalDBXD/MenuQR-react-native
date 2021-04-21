import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../common/styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.DodgerBlue,
    borderRadius: 100,
    width: Sizes.extraLarge,
    height: Sizes.extraLarge,
    position: 'absolute',
    bottom: 0,
    right: 0,
    margin: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  icon: {
    color: Colors.White,
    textAlign: 'center',
    fontSize: Sizes.extraLarge,
    marginBottom: 4,
  },
});

export default styles;
