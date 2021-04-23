import { StyleSheet } from 'react-native';
import { Sizes } from '../../common/styles';

const styles = StyleSheet.create({
  inputsContainer: {
    margin: Sizes.small,
  },
  inputContainerTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: Sizes.medium,
  },
  inputTitle: {
    fontSize: Sizes.large,
    letterSpacing: 4,
    textAlign: 'center',
  },
});

export default styles;
