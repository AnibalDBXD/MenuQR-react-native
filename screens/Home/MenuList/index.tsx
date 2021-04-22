import React from 'react';
import { FlatList, ListRenderItem, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MenuLabelWidthPlusMargin, windowWidth } from '../../../common/styles';
import { Center } from '../../../common/styles/styles';
import MenuLabel from './MenuLabel';
import { IMenuLabel } from './MenuLabel/types';
import LoadingComponent from '../../../components/Loading';
import styles from './styles';
import { useMenuContext } from '../../../context/MenuList/MenuContext';

const MenuList: React.FC = (): JSX.Element => {
  const { MenuListContainer, BottomText, MiddleText, TopIcon } = styles;
  const { center } = Center;
  const { Menus, Loading } = useMenuContext();

  const numColumns = Math.floor(windowWidth / MenuLabelWidthPlusMargin);

  const renderItem: ListRenderItem<IMenuLabel> = ({
    item: { ID, MenuData },
    index,
  }) => <MenuLabel ID={ID} MenuData={MenuData} key={index} />;

  if (Loading) {
    return <LoadingComponent />;
  }

  if (Menus.toString() === [].toString()) {
    return (
      <View style={center}>
        <Ionicons
          style={TopIcon}
          name="md-restaurant-outline"
          size={128}
          color="black"
        />
        <Text style={MiddleText}>The list is empty</Text>
        <Text style={BottomText}>Scan a QR to add Menus on the list</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={MenuListContainer}
      numColumns={numColumns < 1 ? 1 : numColumns}
      data={Menus}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default MenuList;
