import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Types/Product.types';

interface ProductState {
  likesProducts: IProduct[];
}

const localValue = localStorage.getItem('likesProducts')

const initialState: ProductState = {
  likesProducts: localValue
    ? JSON.parse(localValue)
    : [],
};

export const likesProductsArr = createSlice({
  name: 'likesProducts',
  initialState,
  reducers: {
    getLikeProduct(state, action: PayloadAction<IProduct>) {
      state.likesProducts.push(action.payload);
    },
    remuveProduct(state, action: PayloadAction<IProduct>) {
      // це моглоб виглядати так: (state.likesProducts.filter(toy => toy.id !== action.payload) але чомусь так не працювало
      state.likesProducts.splice(
        state.likesProducts.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
    setlocalStorage(state) {
      localStorage.setItem(
        'likesProducts',
        JSON.stringify(state.likesProducts)
      );
    },
  },
});

export default likesProductsArr.reducer;
