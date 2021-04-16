import { StyleSheet } from 'react-native';
import {
  Colors,
  Sizes,
  FontFamily,
  MenuLabelWidth,
} from '../../../../common/styles';

const styles = StyleSheet.create({
  Container: {
    backgroundColor: Colors.White,
    flexDirection: 'column',
    width: MenuLabelWidth,
    height: 200,
    padding: 6,
    shadowOffset: { height: 5, width: 2 },
    shadowRadius: 20,
    shadowOpacity: 0.15,
    shadowColor: Colors.Black,
    margin: Sizes.small,
  },
  QRContainer: {
    marginBottom: 12,
  },
  ContainerText: {
    borderTopColor: Colors.Black,
    borderTopWidth: 2,
    paddingTop: 4,
    fontSize: Sizes.mediumSmall,
    textAlign: 'center',
    fontFamily: FontFamily.RobotoBold,
  },
});

export default styles;
