import { getProducts, IProduct } from './../Types/Product.types';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react'
import { baseURL } from 'http/Http'

export const productAPI = createApi({
  reducerPath: 'productAPI',
  baseQuery: fetchBaseQuery({baseUrl: baseURL}),
  endpoints: build => ({
    fetchAllProducts: build.query<getProducts, number>({
      query: (limit: number = 9) => ({
        url: '/product',
        params: {
          _limit: limit
        }
      })
    })
  })
})