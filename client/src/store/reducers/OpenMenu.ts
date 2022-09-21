import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface getTypeIdType {
  openMenu: boolean;
  
}


const initialState = {
  openMenu: false
 
};

export const openMenuSlice = createSlice({
  name: 'openMenu',
  initialState,
  reducers: {
    openMenu(state) {
      state.openMenu = true
    },
    closeMenu(state) {
      state.openMenu = false
    }
  },
});

export default openMenuSlice.reducer;
