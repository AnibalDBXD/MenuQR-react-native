import { StyleSheet } from 'react-native';
import { Sizes, FontFamily } from '../../common/styles';

const styles = StyleSheet.create({
  container: {
    margin: Sizes.small,
  },
  containerTitle: {
    fontFamily: FontFamily.RobotoBold,
    fontSize: Sizes.large,
    letterSpacing: 4,
    textAlign: 'center',
    marginBottom: Sizes.medium,
  },
  CaterogiesContainer: {
    flex: 1,
    alignItems: 'center',
  },
});

export default styles;
