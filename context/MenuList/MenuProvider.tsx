import React, { ReactNode, useCallback, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState, MenuContext } from './MenuContext';
import MenuReducer from './MenuReducer';
import { IMenuLabel } from '../../screens/Home/MenuList/MenuLabel/types';
import MenuActions from './MenuActions';
import defaultData from './defaultData';

interface IProps {
  children: ReactNode;
}

const MenuProvider = ({ children }: IProps): JSX.Element => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);
  const { getAllKeys, getItem, setItem } = AsyncStorage;

  const isFirstTime = async () => {
    const result = (await getItem('FirstTime')) === null;
    return result;
  };

  const SetMenus = (newMenus: IMenuLabel[]): void => {
    dispatch({ type: MenuActions.SET_MENU_LIST, payload: newMenus });
  };

  const SetLoading = (loading: boolean): void => {
    dispatch({ type: MenuActions.SET_LOADING, payload: loading });
  };

  const getMenusData = useCallback(async () => {
    const Data: IMenuLabel[] = [];
    if (await isFirstTime()) {
      setItem('FirstTime', 'false');
      setItem('FirstTimeData', JSON.stringify(defaultData));
    }
    const Keys = await getAllKeys();
    Keys.map(key =>
      getItem(key).then(value => {
        if (value && value !== 'false') {
          Data.push({
            ID: key,
            MenuData: JSON.parse(value),
          });
          SetMenus(Data);
        }
      }),
    );

    SetLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllKeys, getItem]);

  useEffect((): void => {
    getMenusData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MenuContext.Provider
      value={{ Menus: state.Menus, SetMenus, Loading: state.Loading }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
