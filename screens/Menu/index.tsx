import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text, ScrollView, View } from 'react-native';
import { MenuProps } from './types';
import Category from './Category';
import styles from './styles';

const Menu: React.FC<MenuProps> = (): JSX.Element => {
  const { container, containerTitle, CaterogiesContainer } = styles;

  const Productdata = [
    { ProductName: 'Package blue', price: '399$', id: 1 },
    { ProductName: 'Package blue', price: '399$', id: 2 },
    { ProductName: 'Package blue', price: '399$', id: 3 },
    { ProductName: 'Package blue', price: '399$', id: 4 },
    { ProductName: 'Package blue', price: '399$', id: 5 },
    { ProductName: 'Package blue', price: '399$', id: 6 },
    { ProductName: 'Package blue', price: '399$', id: 7 },
    { ProductName: 'Package blue', price: '399$', id: 8 },
    { ProductName: 'Package blue', price: '399$', id: 9 },
    { ProductName: 'Package blue', price: '399$', id: 10 },
    { ProductName: 'Package blue', price: '399$', id: 11 },
    { ProductName: 'Package blue', price: '399$', id: 12 },
    { ProductName: 'Package blue', price: '399$', id: 13 },
    { ProductName: 'Package blue', price: '399$', id: 14 },
    { ProductName: 'Package blue', price: '399$', id: 15 },
    { ProductName: 'Package blue', price: '399$', id: 16 },
    { ProductName: 'Package blue', price: '399$', id: 17 },
    { ProductName: 'Package blue', price: '399$', id: 18 },
    { ProductName: 'Package blue', price: '399$', id: 19 },
    { ProductName: 'Package blue', price: '399$', id: 20 },
  ];

  const CategoryData = [
    { CategoryName: 'Categoria 1', data: Productdata, id: 1 },
    { CategoryName: 'Categoria 2', data: Productdata, id: 2 },
  ];
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={container}>
          <Text style={containerTitle}>Pizza John restaurant</Text>
          <View style={CaterogiesContainer}>
            {CategoryData.map(({ CategoryName, data, id }) => (
              <Category CategoryName={CategoryName} products={data} key={id} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
