import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface getTypeIdType {
  typeId: number | undefined;
  
}


const initialState = {
  typeId: 0
 
};

export const getTypeIdSlice = createSlice({
  name: 'typeId',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<number>) {
      state.typeId = action.payload
    },
    deleteType(state, action) {
      state.typeId = 0
    }
  },
});

export default getTypeIdSlice.reducer;
