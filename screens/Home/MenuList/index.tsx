import React, { useEffect, useState, useCallback } from 'react';
import { FlatList, ListRenderItem, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuLabelWidthPlusMargin, windowWidth } from '../../../common/styles';
import MenuLabel from './MenuLabel';
import { IMenuLabel } from './MenuLabel/types';
import styles from './styles';

const MenuList: React.FC = (): JSX.Element => {
  const { MenuListContainer } = styles;
  const { getAllKeys, getItem } = AsyncStorage;

  const [MenusData, setMenusData] = useState<IMenuLabel[]>([]);
  const [Loading, setLoading] = useState(true);

  const getMenusData = async () => {
    const Keys = await getAllKeys();
    const Data: IMenuLabel[] = [];
    Keys.map(key =>
      getItem(key).then(value => {
        if (value) {
          Data.push({
            MenuID: key,
            MenuName: JSON.parse(value).MenuName,
          });
          setMenusData(Data);
        }
      }),
    );
  };

  const GetData = useCallback(getMenusData, [getAllKeys, getItem]);

  useEffect(() => {
    GetData().then(() => setLoading(false));
  }, [GetData, MenusData]);

  const numColumns = Math.floor(windowWidth / MenuLabelWidthPlusMargin);

  const renderItem: ListRenderItem<IMenuLabel> = ({
    item: { MenuID, MenuName },
  }) => <MenuLabel MenuID={MenuID} MenuName={MenuName} />;

  if (Loading) {
    return <Text>Loading</Text>;
  }

  return (
    <FlatList
      contentContainerStyle={MenuListContainer}
      numColumns={numColumns < 1 ? 1 : numColumns}
      data={MenusData}
      renderItem={renderItem}
      keyExtractor={(_item, index) => index.toString()}
    />
  );
};

export default MenuList;
