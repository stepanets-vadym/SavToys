import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from 'Types/Product.types';

interface ProductState {
  productSort: IProduct[];
}

const initialState: ProductState = {
  productSort: [],
};

export const productSortByClick = createSlice({
  name: 'productSort',
  initialState,
  reducers: {
    getaAllProducts(state, action: PayloadAction<IProduct[]>) {
      const allProducts = JSON.stringify(action.payload);
      state.productSort = JSON.parse(allProducts);
    },
    sortByNewProduct(state) {
      const newProducts: IProduct[] = [];

      for (let index = 0; index < state.productSort.length; index++) {
        if (state.productSort[index].newProd) {
          newProducts.unshift(state.productSort[index]);
          let num = state.productSort.indexOf(state.productSort[index]);
          state.productSort.splice(num, 1);
        }
      }
      newProducts.map((el) => state.productSort.unshift(el));
      state.productSort = state.productSort;
    },
    sortByBestProduct(state) {
      const newProducts: IProduct[] = [];

      for (let index = 0; index < state.productSort.length; index++) {
        if (state.productSort[index].bestseller) {
          newProducts.unshift(state.productSort[index]);
          let num = state.productSort.indexOf(state.productSort[index]);
          state.productSort.splice(num, 1);
        }
      }
      newProducts.map((el) => state.productSort.unshift(el));
      state.productSort = state.productSort;
    },
    sortByСheapProductPrice(state) {
      state.productSort = state.productSort.sort((a, b) => a.price - b.price);
    },
    sortByExpensiveProductPrice(state) {
      state.productSort = state.productSort.sort((a, b) => b.price - a.price);
    },

    sortByPrice(state, action: PayloadAction<{max:number, min: number}> ) {

      function filterRange(arr:IProduct[], a:number, b:number) {
        
        return arr.filter(item => (a <= item.price && item.price <= b));
      }

      state.productSort = filterRange(state.productSort, action.payload.min, action.payload.max)
    },
  },
});

export default productSortByClick.reducer;
