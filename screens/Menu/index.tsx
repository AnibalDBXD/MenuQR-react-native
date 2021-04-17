import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MenuProps } from './types';
import styles from './styles';

import Error from './Error';
import LoadingComponent from './Loading';
import MenuComponent from './Menu';
import NoMenu from './NoMenu';

import { getMenu } from '../../api';
import { IFetchReadResponse } from '../../api/type';

const Menu: React.FC<MenuProps> = ({ route: { params } }): JSX.Element => {
  const { container } = styles;
  const { setItem, getAllKeys } = AsyncStorage;

  const ID = params?.data;

  const [Data, setData] = useState<IFetchReadResponse>();
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    if (ID) {
      setLoading(true);
      getMenu(ID)
        .then(data => {
          setData(data);
        })
        .then(() => setLoading(false));
    }
  }, [ID]);

  const ComponentView: React.FC = ({ children }): JSX.Element => (
    <SafeAreaView>
      <ScrollView>
        <View style={container}>{children}</View>
      </ScrollView>
    </SafeAreaView>
  );

  if (Loading) {
    return (
      <ComponentView>
        <LoadingComponent />
      </ComponentView>
    );
  }

  if (Data?.record) {
    if (ID) {
      getAllKeys().then(Allkeys => {
        // if Allkeys not includes the ID, add the data in the storage
        if (!Allkeys.includes(ID)) {
          setItem(ID, JSON.stringify(Data.record));
        }
      });
    }
    return (
      <ComponentView>
        <MenuComponent
          MenuName={Data.record.MenuName}
          Categories={Data.record.Categories}
        />
      </ComponentView>
    );
  }

  if (Data?.error) {
    return (
      <ComponentView>
        <Error
          errorMessage={Data?.error || Data?.message || 'Error not found D:'}
        />
      </ComponentView>
    );
  }

  return (
    <ComponentView>
      <NoMenu />
    </ComponentView>
  );
};

export default Menu;
