import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import { MenuLabelWidthPlusMargin, windowWidth } from '../../../common/styles';
import MenuLabel from './MenuLabel';
import { IMenuLabel } from './MenuLabel/types';
import LoadingComponent from '../../../components/Loading';
import styles from './styles';
import { useMenuContext } from '../../../context/MenuList/MenuContext';

const MenuList: React.FC = (): JSX.Element => {
  const { MenuListContainer } = styles;
  const { Menus, Loading } = useMenuContext();

  const numColumns = Math.floor(windowWidth / MenuLabelWidthPlusMargin);

  const renderItem: ListRenderItem<IMenuLabel> = ({
    item: { ID, MenuData },
  }) => <MenuLabel ID={ID} MenuData={MenuData} />;

  if (Loading) {
    return <LoadingComponent />;
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
