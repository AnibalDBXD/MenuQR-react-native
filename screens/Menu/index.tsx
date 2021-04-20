import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuProps } from './types';

import { getMenu } from '../../api';
import { IFetchReadResponse } from '../../api/type';
import { useMenuContext } from '../../context/MenuList/MenuContext';

import withData from './withData';

const Menu: React.FC<MenuProps> = ({ route: { params } }): JSX.Element => {
  const { setItem, getAllKeys } = AsyncStorage;
  const { SetMenus, Menus } = useMenuContext();

  const ID = params?.id;

  const [LocalData, setLocalData] = useState(params?.data);

  const [Data, setData] = useState<IFetchReadResponse>();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (ID) {
      setLoading(true);
      getMenu(ID)
        .then(data => {
          setData(data);
          if (SetMenus && data?.record)
            SetMenus([...Menus, { ID, MenuData: data.record }]);
        })
        .then(() => setLoading(false));

      // save the data in the storage
      getAllKeys().then(Allkeys => {
        // if Allkeys not includes the ID, add the data in the storage
        if (!Allkeys.includes(ID)) {
          setItem(ID, JSON.stringify(Data?.record));
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params?.id]);

  useEffect(() => {
    setData(undefined);
    setLocalData(params?.data);
  }, [params?.data]);

  const Component = withData({
    isLoading: Loading,
    Data: Data?.record || LocalData,
    Error: Data?.error,
  });

  return <Component />;
};

export default Menu;
