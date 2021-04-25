import { StyleSheet } from 'react-native';
import { Colors, FontFamily, Sizes } from '../../../common/styles';

const styles = StyleSheet.create({
  CategoryTop: {
    display: 'flex',
    flexDirection: 'row',
    borderBottomWidth: 4,
    borderBottomColor: Colors.Black,
  },
  inputCategory: {
    fontSize: Sizes.medium,
    textTransform: 'uppercase',
    fontFamily: FontFamily.RobotoBoldItalic,
    width: '90%',
    letterSpacing: 2,
  },
  addCategoryButtonContainer: {
    marginBottom: Sizes.medium,
  },
});

export default styles;
