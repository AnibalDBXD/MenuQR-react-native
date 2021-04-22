import { StyleSheet } from 'react-native';
import { Colors, FontFamily, Sizes } from '../../common/styles';

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
  inputCategory: {
    fontSize: Sizes.medium,
    textTransform: 'uppercase',
    fontFamily: FontFamily.RobotoBoldItalic,
    width: '90%',
    letterSpacing: 2,
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
    width: '70%',
  },
  productPrice: {
    fontSize: Sizes.mediumSmall,
    fontWeight: 'bold',
    width: '20%',
  },
  AddCategoryContainer: {
    width: '50%',
    textAlign: 'center',
    marginBottom: Sizes.mediumSmall,
  },
  CategoryTop: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: Colors.Black,
  },
  deleteButton: {
    width: '10%',
    display: 'flex',
    justifyContent: 'center',
  },
});

export default styles;
