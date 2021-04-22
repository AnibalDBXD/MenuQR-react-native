import { StyleSheet } from 'react-native';
import { Colors, Sizes, windowHeight } from '.';

export const Center = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    height: windowHeight - 128,
  },
});

export const Header = StyleSheet.create({
  header: {
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
  headerText: {
    fontSize: Sizes.medium,
    textAlign: 'center',
  },
});
