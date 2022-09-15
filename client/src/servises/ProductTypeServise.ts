import { IType } from './../Types/ProductTypes.types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from 'http/Http';

export const productAPI = createApi({
  reducerPath: 'productTypeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IType[], number>({
      query: () => ({
        url: '/type',
      }),
    }),
  }),
});
