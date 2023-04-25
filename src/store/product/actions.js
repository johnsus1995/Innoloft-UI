import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "src/api/product";

export const get = createAsyncThunk("product/get", async (config) => {
  // const { formValues, navigate, toast } = data;
  const res = await productApi.get(config);
  return res.data;
});

export const update = createAsyncThunk("product/update", async (data) => {
  const res = await productApi.update(data);
  return res?.data;
});

export const getTRL = createAsyncThunk("product/getTRL", async (config) => {
  // const { formValues, navigate, toast } = data;
  const res = await productApi.getTRL(config);
  return res.data;
});

export const getAppConfig = createAsyncThunk(
  "product/getAppConfig",
  async (config) => {
    // const { formValues, navigate, toast } = data;
    const res = await productApi.getAppConfig(config);
    return res.data;
  }
);
