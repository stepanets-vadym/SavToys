import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBrand } from 'Types/Brand.types';

interface BrandState {
  brands: IBrand[];
  isLoading: boolean;
  error: string;
}

const initialState: BrandState = {
  brands: [],
  isLoading: false,
  error: '',
};

export const brandSlice = createSlice({
  name: 'brand',
  initialState,
  reducers: {
    brandsFetching(state) {
      state.isLoading = true;
    },
    brandsFetchingSuccess(state, action: PayloadAction<IBrand[]>) {
      state.isLoading = false;
      state.error = '';
      state.brands = action.payload;
    },
    brandsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default brandSlice.reducer;
