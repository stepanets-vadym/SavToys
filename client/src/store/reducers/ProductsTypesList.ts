import { IType } from 'Types/ProductTypes.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TypeState {
  types: IType[];
  isLoading: boolean;
  error: string;
}

const initialState: TypeState = {
  types: [],
  isLoading: false,
  error: '',
};

export const typeSlice = createSlice({
  name: 'type',
  initialState,
  reducers: {
    typesFetching(state) {
      state.isLoading = true;
    },
    typesFetchingSuccess(state, action: PayloadAction<IType[]>) {
      state.isLoading = false;
      state.error = '';
      state.types = action.payload;
    },
    typesFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default typeSlice.reducer;
