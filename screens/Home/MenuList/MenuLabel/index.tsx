import React from 'react';
import { Text, View, TouchableOpacity, Share } from 'react-native';
import QR from 'react-native-qrcode-svg';
import { useNavigation } from '@react-navigation/native';
import { AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IMenuLabel } from './types';
import styles from './styles';
import { QRSize, Sizes, Colors } from '../../../../common/styles';
import SCREENS from '../../../../navigation/constants';
import { useMenuContext } from '../../../../context/MenuList/MenuContext';

const MenuLabel: React.FC<IMenuLabel> = ({ ID, MenuData }): JSX.Element => {
  const { Container, ContainerText, QRContainer, BottomButtons } = styles;
  const { removeItem } = AsyncStorage;
  const { SetMenus, Menus } = useMenuContext();
  const { share } = Share;

  const { navigate } = useNavigation();

  const handleShare = async () => {
    const message = `
    ${MenuData.MenuName}
    ----
    ${MenuData.Categories.map(
      category => `${category.CategoryName}
    --
    ${category.products.map(
      value => `${value.ProductName} ..... ${value.price}`,
    )}`,
    )}`;

    share({ title: 'Menu', message });
  };

  const handleDelete = async () => {
    // eslint-disable-next-line no-alert
    removeItem(ID).then(() => alert('Delete succesfully'));
    if (SetMenus) SetMenus(Menus.filter(value => value.ID !== ID));
  };

  return (
    <View style={Container}>
      <TouchableOpacity
        style={QRContainer}
        onPress={() => navigate(SCREENS.menu, { data: MenuData })}
      >
        <QR value={ID} size={QRSize} />
      </TouchableOpacity>
      <Text style={ContainerText}>{MenuData.MenuName}</Text>
      <View style={BottomButtons}>
        <TouchableOpacity onPress={handleShare}>
          <Entypo name="share" size={Sizes.medium} color={Colors.DodgerBlue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <AntDesign name="delete" size={Sizes.medium} color={Colors.Red} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuLabel;
