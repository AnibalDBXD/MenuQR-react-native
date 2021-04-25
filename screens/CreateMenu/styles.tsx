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
  fullQRContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrButtonContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: Sizes.small,
    marginBottom: Sizes.small,
  },
  saveButtonContainer: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

export default styles;
