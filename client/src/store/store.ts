import productSort from './reducers/ProductsSort';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { productAPI } from 'servises/ProductServise';
import typeReduser from './reducers/ProductsTypesList';
import brandReducer from './reducers/BrandList';
import typeIdReducer from './reducers/GetTypeId';

const rootReduser = combineReducers({
  typeReduser,
  brandReducer,
  [productAPI.reducerPath]: productAPI.reducer,
  productSort,
  typeIdReducer,
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
