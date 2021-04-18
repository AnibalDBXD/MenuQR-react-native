import { StyleSheet } from 'react-native';
import { Sizes } from '../../../common/styles';

const styles = StyleSheet.create({
  MenuListContainer: {
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingBottom: 60,
  },
  TopIcon: {
    marginBottom: 64,
  },
  MiddleText: {
    fontSize: Sizes.mediumSmall,
    textAlign: 'center',
  },
  BottomText: {
    fontSize: Sizes.medium,
    textAlign: 'center',
  },
});

export default styles;
