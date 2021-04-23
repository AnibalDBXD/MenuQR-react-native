import { StyleSheet } from 'react-native';
import { Sizes } from '../../../../common/styles';

const styles = StyleSheet.create({
  productContainer: {
    marginTop: 3,
    marginBottom: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: Sizes.mediumSmall,
    width: '70%',
  },
  productPrice: {
    fontSize: Sizes.mediumSmall,
    fontWeight: 'bold',
    width: '20%',
  },
});

export default styles;
