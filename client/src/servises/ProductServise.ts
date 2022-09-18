import { getProducts, IProduct } from './../Types/Product.types';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { baseURL } from 'http/Http';

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (build) => ({
    fetchAllProducts: build.query<
      getProducts,
      { limit?: string; typeId?: number , brandId?: number, page?: number }
    >({
      query: (args) => {
        const {limit, typeId, brandId, page} = args
        return {
          url: '/product',
          params: {
            limit,
            typeId,
            brandId,
            page
          },
        };
      },
    }),
  }),
});
