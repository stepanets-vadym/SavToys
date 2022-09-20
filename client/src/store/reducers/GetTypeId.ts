import { IType } from 'Types/ProductTypes.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TypeIdState {
  typeId?: IType;
  
}


const initialState:TypeIdState = {
  // typeId: {}
 
};

export const getTypeIdSlice = createSlice({
  name: 'typeId',
  initialState,
  reducers: {
    getType(state, action: PayloadAction<IType>) {
      
    },
    
  },
});

export default getTypeIdSlice.reducer;
