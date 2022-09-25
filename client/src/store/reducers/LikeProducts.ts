import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Types/Product.types';

interface ProductState {
  likesProducts: IProduct[];
}

const initialState: ProductState = {
  likesProducts: [],
};

export const likesProductsArr = createSlice({
  name: 'likesProducts',
  initialState,
  reducers: {
    getLikeProduct(state, action: PayloadAction<IProduct>) {
      state.likesProducts.push(action.payload);
    },
    remuveProduct(state, action: PayloadAction<IProduct>) {

      state.likesProducts.splice(state.likesProducts.findIndex((item)=> item.id === action.payload.id), 1);
    },
  },
});

export default likesProductsArr.reducer;
