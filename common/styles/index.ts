import { Dimensions } from 'react-native';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export enum Sizes {
  small = 12,
  mediumSmall = 18,
  medium = 24,
  large = 32,
  extraLarge = 40,
}

export enum FontFamily {
  RobotoBold = 'Roboto-Bold',
  RobotoItalic = 'Roboto-Italic',
  Roboto = 'Roboto',
  RobotoBoldItalic = 'Roboto-BoldItalic',
}

// The name of the colors come from https://chir.ag/projects/name-that-color/

export enum Colors {
  DodgerBlue = '#2196F3',
  Black = '#000000',
  White = '#FFFFFF',
  Punch = '#D72828',
  Red = '#FF0000',
}

export const QRSize = 150;

export const MenuLabelWidth = 160;
export const MenuLabelWidthPlusMargin = MenuLabelWidth + Sizes.small;
