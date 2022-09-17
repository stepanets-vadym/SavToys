import productSort from './reducers/ProductsSort';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productAPI } from 'servises/ProductServise';
import typeReduser from './reducers/ProductsTypesList';

const rootReduser = combineReducers({
  typeReduser,
  [productAPI.reducerPath]: productAPI.reducer,
  productSort,
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
