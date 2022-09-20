// React
import axios from 'axios';
// Http
import { baseURL } from 'http/Http';
// Types
import { IBrand } from './../../Types/Brand.types';
import { IType } from 'Types/ProductTypes.types';
// Hooks
import { AppDispatch } from './../store';
// Reducers
import { typeSlice } from './ProductsTypesList';
import { brandSlice } from './BrandList';

export const fetchProductTypes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(typeSlice.actions.typesFetching());

    const response = await axios.get<IType[]>(baseURL + '/type');
    dispatch(typeSlice.actions.typesFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(typeSlice.actions.typesFetchingError(error.message));
  }
};

export const fetchBrands = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(brandSlice.actions.brandsFetching());

    const response = await axios.get<IBrand[]>(baseURL + '/brand');
    dispatch(brandSlice.actions.brandsFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(brandSlice.actions.brandsFetchingError(error.message));
  }
};
