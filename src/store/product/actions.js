import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "src/api/product";

export const get = createAsyncThunk("product/get", async (config) => {
  // const { formValues, navigate, toast } = data;
    const res = await productApi.get(config);
    return res.data;
});

export const update = createAsyncThunk("product/update", async (data) => {
  const { formValues, navigate, toast } = data;
  const res = await productApi.update({
    first_name: formValues.first_name,
    last_name: formValues.last_name,
    email: formValues.email,
    password: formValues.password,
    confirm_password: formValues.confirm_password,
  });
  if (res.status === 201) {
    navigate("/");
    return res?.data;
  } else {
    console.log(res);
  }
});


export const getTRL = createAsyncThunk("product/getTRL", async (config) => {
  // const { formValues, navigate, toast } = data;
    const res = await productApi.getTRL(config);
    return res.data;
});

export const getAppConfig = createAsyncThunk("product/getAppConfig", async (config) => {
  // const { formValues, navigate, toast } = data;
    const res = await productApi.getAppConfig(config);
    return res.data;
});