import { createSlice } from "@reduxjs/toolkit";
import * as actions from "./actions";

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: "",
    product: {},
    trl:{},
    appConfig:{}
  },

  extraReducers: {
    // get
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
    // update
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
    // TRL
    [actions.getTRL.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.getTRL.fulfilled]: (state, action) => {
      state.loading = false;
      state.trl = action.payload;
    },
    [actions.getTRL.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
    // appConfig
    [actions.getAppConfig.pending]: (state, action) => {
      state.loading = true;
    },
    [actions.getAppConfig.fulfilled]: (state, action) => {
      state.loading = false;
      state.appConfig = action.payload;
    },
    [actions.getAppConfig.rejected]: (state, action) => {
      state.loading = false;
      state.error = action?.payload?.message;
    },
  },
});

export default productSlice.reducer;