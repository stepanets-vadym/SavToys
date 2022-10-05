import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Types/Product.types';

interface ProductState {
  cartItems: IProduct[];
}

const localValue = localStorage.getItem('cartItems');

const initialState: ProductState = {
  cartItems: localValue ? JSON.parse(localValue) : [],
};

export const cartItemsArr = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    getCartProduct(state, action: PayloadAction<IProduct>) {
      state.cartItems.push(action.payload);
    },
    remuveCartProduct(state, action: PayloadAction<IProduct>) {
      // це моглоб виглядати так: (state.cartItems.filter(toy => toy.id !== action.payload) але чомусь так не працювало
      state.cartItems.splice(
        state.cartItems.findIndex((item) => item.id === action.payload.id),
        1
      );
    },
    setCartlocalStorage(state) {
      localStorage.setItem(
        'cartItems',
        JSON.stringify(state.cartItems)
      );
    },
  },
});

export default cartItemsArr.reducer;
