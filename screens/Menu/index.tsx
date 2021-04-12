import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View } from 'react-native';
import { IMenu, MenuProps } from './types';
import Category from './Category';
import styles from './styles';

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

  const [{ Categories, MenuName }, setData] = useState<IMenu>(MenuNotFound);

  useEffect(() => {
    if (params?.data !== undefined) {
      setData(JSON.parse(params?.data));
    }
  }, [params]);

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={container}>
          <Text style={containerTitle}>{MenuName}</Text>
          <View style={CaterogiesContainer}>
            {Categories.map(({ CategoryName, products, id }) => (
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
