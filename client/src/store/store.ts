import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSort from './reducers/ProductsSort';
import { productAPI } from 'servises/ProductServise';
import typeReduser from './reducers/ProductsTypesList';
import brandReducer from './reducers/BrandList';
import typeIdReducer from './reducers/GetTypeId';
import openMenuReducer from './reducers/OpenMenu';
import getUser from './reducers/GetUser';
import likesProducts from './reducers/LikeProducts';

const rootReduser = combineReducers({
  // Отримуємо всі типи
  typeReduser,
  // Отримуємо всі бренди
  brandReducer,
  // Отримуємо всі товари
  [productAPI.reducerPath]: productAPI.reducer,
  // Сортуємо товари за певними характеристиками
  productSort,
  // Отримуєми окремий Id типу
  typeIdReducer,
  // Меню каталогу
  openMenuReducer,
  // Юзер 
  getUser,
  // Обрані товари
  likesProducts
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReduser,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(productAPI.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReduser>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
