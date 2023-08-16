import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MenuCategories } from "@/interfaces/menus/MenuCategories";
import { Categories } from "@/interfaces/menus/Categories";

export interface CategoriesState {
  value: Categories[];
}

const initialState: CategoriesState = {
  value: [],
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriesLists: (state, action: PayloadAction<Categories[]>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setCategoriesLists } = categoriesSlice.actions;

export default categoriesSlice.reducer;
