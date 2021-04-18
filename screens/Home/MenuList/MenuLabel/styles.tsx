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
    height: 240,
    padding: 6,
    shadowOffset: { height: 5, width: 2 },
    shadowRadius: 20,
    shadowOpacity: 1,
    elevation: 3,
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
  BottomButtons: {
    paddingRight: 8,
    paddingLeft: 8,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
