import axios from 'axios';
import { baseURL } from 'http/Http';
import { AppDispatch } from './../store';
import { IType } from 'Types/ProductTypes.types';
import { typeSlice } from './ProductsTypesList';

export const fetchProductTypes = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(typeSlice.actions.typesFetching());

    const response = await axios.get<IType[]>(baseURL + '/type');
    dispatch(typeSlice.actions.typesFetchingSuccess(response.data));
  } catch (error: any) {
    dispatch(typeSlice.actions.typesFetchingError(error.message));
  }
};
