import { StyleSheet } from 'react-native';
import { Sizes, Colors, FontFamily } from '../../../../common/styles';

const styles = StyleSheet.create({
  categoryContainer: {
    width: '100%',
    marginTop: Sizes.small,
  },
  categoryTitle: {
    fontSize: Sizes.medium,
    textTransform: 'uppercase',
    fontFamily: FontFamily.RobotoBoldItalic,
    letterSpacing: 2,
    borderBottomWidth: 4,
    borderBottomColor: Colors.Black,
  },
  productContainer: {
    marginTop: 3,
    marginBottom: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: Sizes.mediumSmall,
  },
  productPrice: {
    fontSize: Sizes.mediumSmall,
    fontWeight: 'bold',
  },
});

export default styles;
