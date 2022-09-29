import { userTabType } from './../../Types/UserTab.types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserTab } from 'Types/UserTab.types';

const initialState = { 
  userTabTypes: <UserTab>{
    id: 1,
    name: 'Мої замовлення',
    icon: 'Cart',
    type: userTabType.ORDERS
  },

}

export const getUserTabType = createSlice({
  name: 'userTabTypes',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<UserTab>) {
      state.userTabTypes = action.payload
    },
    
  },
});

export default getUserTabType.reducer;
