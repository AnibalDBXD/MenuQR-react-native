import { StyleSheet } from 'react-native';
import { Colors, Sizes } from '../../common/styles';

const styles = StyleSheet.create({
  Header: {
    backgroundColor: Colors.White,
    paddingTop: Sizes.small,
    paddingBottom: Sizes.small,
    shadowOffset: { height: 5, width: 2 },
    shadowRadius: 20,
    shadowOpacity: 0.15,
    shadowColor: Colors.Black,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    elevation: 3,
  },
  HeaderText: {
    fontSize: Sizes.medium,
    textAlign: 'center',
  },
});

export default styles;
