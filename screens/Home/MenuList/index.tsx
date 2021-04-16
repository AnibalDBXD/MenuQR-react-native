import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { MenuLabelWidthPlusMargin, windowWidth } from '../../../common/styles';
import MenuLabel from './MenuLabel';
import { IMenuLabel } from './MenuLabel/types';
import styles from './styles';

const MenuList: React.FC = (): JSX.Element => {
  const { MenuListContainer } = styles;

  const numColumns = Math.floor(windowWidth / MenuLabelWidthPlusMargin);

  const renderItem: ListRenderItem<IMenuLabel> = ({
    item: { MenuID, MenuName },
  }) => <MenuLabel MenuName={MenuName} MenuID={MenuID} />;

  const DATA = [
    {
      MenuID: '60761263ee971419c4d8ff0b',
      MenuName: 'Nashe',
    },
    {
      MenuID: '60761263ee971419c4d8ff0b',
      MenuName: 'Nashetopia',
    },
    {
      MenuID: '60761263ee971419c4d8ff0b',
      MenuName: 'Nashetropolis',
    },
  ];
  return (
    <FlatList
      contentContainerStyle={MenuListContainer}
      numColumns={numColumns < 1 ? 1 : numColumns}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default MenuList;
