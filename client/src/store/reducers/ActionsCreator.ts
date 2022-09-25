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
import { getUser } from './GetUser';

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

export const getCheckedUser = () => async (dispatch: AppDispatch) => {
  const apiUrl = `${baseURL}/user/auth`;
  const token = localStorage.getItem('token');
  const user = localStorage.getItem('user');
  console.log('work');

  const config = {
    method: 'get',
    url: apiUrl,
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsImVtYWlsIjoiZGFzZGFzZGFoc0BnbWFpbC5kYXNkIiwicm9sZSI6IlVzZXIiLCJpYXQiOjE2NjQwNDU0MjgsImV4cCI6MTY2NDEzMTgyOH0.E6JaPzOC5OYHwXtD2E43ad11IUFsHgU8lARLhfqIQSs',
    },
  };
  await axios(config)
    .then((res) => {
      dispatch(getUser.actions.getUser(JSON.parse(user !== null ? user : '')));
    })
    .catch((errors) => {
      console.log(errors);
    });
};
