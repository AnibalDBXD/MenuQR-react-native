import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View } from 'react-native';
import { IMenu, MenuProps } from './types';
import Category from './Category';
import styles from './styles';
import { getMenu } from '../../api';
import { IFetchReadResponse } from '../../api/type';

// ACA VOY HACER UN COMPONEMTE QUE TE DIGA COSAS QUE AGREGES UN MENU PERO MIENTRAS ESTO
const MenuNotFound: IMenu = {
  MenuName: 'Menu Found',
  Categories: [
    {
      CategoryName: 'Categoria 1',
      products: [
        {
          ProductName: 'Producto 1',
          price: '300 d',
          id: 'adas3',
        },
      ],
      id: 'estacosaid1',
    },
  ],
  id: 'menuID1',
};

const Menu: React.FC<MenuProps> = ({ route: { params } }): JSX.Element => {
  const { container, containerTitle, CaterogiesContainer } = styles;

  const [ID, setID] = useState('');
  const [Data, setData] = useState<IFetchReadResponse>();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    if (params?.data !== undefined) {
      setID(params.data);
    }
  }, [params]);

  useEffect(() => {
    setLoading(true);
    getMenu(ID)
      .then(data => setData(data))
      .then(() => setLoading(false));
  }, [ID]);

  if (Loading) {
    return <Text>Loading</Text>;
  }

  if (Data?.error) {
    return <Text>{Data.error}</Text>;
  }

  if (Data?.record === undefined) {
    return <Text>NOHAY</Text>;
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={container}>
          <Text style={containerTitle}>{Data.record.MenuName}</Text>
          <View style={CaterogiesContainer}>
            {Data.record.Categories.map(({ CategoryName, products, id }) => (
              <Category
                CategoryName={CategoryName}
                products={products}
                key={id}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
