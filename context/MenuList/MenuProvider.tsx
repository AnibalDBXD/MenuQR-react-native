import React, { ReactNode, useCallback, useEffect, useReducer } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { initialState, MenuContext } from './MenuContext';
import MenuReducer from './MenuReducer';
import { IMenuLabel } from '../../screens/Home/MenuList/MenuLabel/types';
import MenuActions from './MenuActions';

interface IProps {
  children: ReactNode;
}

const MenuProvider = ({ children }: IProps): JSX.Element => {
  const [state, dispatch] = useReducer(MenuReducer, initialState);
  const { getAllKeys, getItem } = AsyncStorage;

  const SetMenus = (newMenus: IMenuLabel[]): void => {
    dispatch({ type: MenuActions.SET_MENU_LIST, payload: newMenus });
  };

  const SetLoading = (loading: boolean): void => {
    dispatch({ type: MenuActions.SET_LOADING, payload: loading });
  };

  const getMenusData = useCallback(async () => {
    const Keys = await getAllKeys();
    const Data: IMenuLabel[] = [];
    Keys.map(key =>
      getItem(key).then(value => {
        if (value) {
          Data.push({
            ID: key,
            MenuData: JSON.parse(value),
          });
          SetMenus(Data);
        }
      }),
    );
    SetLoading(false);
  }, [getAllKeys, getItem]);

  useEffect((): void => {
    getMenusData();
  }, [getMenusData, state.Menus]);

  return (
    <MenuContext.Provider
      value={{ Menus: state.Menus, SetMenus, Loading: state.Loading }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
