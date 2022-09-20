import { IType } from './../Types/ProductTypes.types';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from 'http/Http';

export const productTypeAPI = createApi({
  reducerPath: 'productTypeAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<IType[], string>({
      query: () => ({
        url: '/type',
      }),
    }),
  }),
});
