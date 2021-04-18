import { IMenu } from '../../screens/Menu/types';

const defaultData: IMenu = {
  MenuName: 'Example Menu',
  Categories: [
    {
      CategoryName: 'BreakFast',
      products: [
        {
          ProductName: 'HAM AND EGG',
          price: '$20',
          id: 'product1',
        },
        {
          ProductName: 'BACON AND CHEESE',
          price: '$10',
          id: 'product2',
        },
        {
          ProductName: 'TUNA SALAD',
          price: '$15',
          id: 'product3',
        },
        {
          ProductName: 'BEEF SOUP',
          price: '$25',
        },
      ],
      id: 'category1',
    },
    {
      CategoryName: 'LUNCH',
      products: [
        {
          ProductName: 'SPICY BEEF BARBECUE',
          price: '$20',
          id: 'product2.1',
        },
        {
          ProductName: 'PORK BARBECUE',
          price: '$10',
          id: 'product2.2',
        },
        {
          ProductName: 'OVEN CHICKEN BARBECUE',
          price: '$15',
          id: 'product2.3',
        },
        {
          ProductName: 'PULLED BEEF BURGER',
          price: '$25',
          id: 'product2.4',
        },
      ],
      id: 'caterogory2',
    },
    {
      CategoryName: 'DINNER',
      products: [
        {
          ProductName: 'SPICY PORK BARBECUE',
          price: '$20',
          id: 'product3.1',
        },
        {
          ProductName: 'VEGETABLE PORK BARBECUE',
          price: '$10',
          id: 'product3.2',
        },
        {
          ProductName: 'OVEN PORK BARBECUE',
          price: '$10',
          id: 'product3.3',
        },
        {
          ProductName: 'PULLED PORK BARBECUE',
          price: '$25',
          id: 'product3.4',
        },
      ],
    },
  ],
};

export default defaultData;
