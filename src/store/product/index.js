import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    product: null,
    error: "",
    loading: false,
  },

  extraReducers: {
    [actions.get.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.get.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [actions.get.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    [actions.update.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.update.fulfilled]: (state, action) => {
      state.loading = false;
      state.product = action.payload;
    },
    [actions.update.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
  },
});

export default productSlice.reducer;