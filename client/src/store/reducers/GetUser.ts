import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from 'Types/User.types';


interface TypeState {
  user: IUser | null,
  isLoading: boolean,
  error: string
}

const initialState = {
  user: <IUser| null>{},
  isLoading: false,
  error: '',
};

export const getUser = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser(state, action: PayloadAction<IUser | null>) {
      state.user = action.payload
    },
    
  },
});

export default getUser.reducer;
