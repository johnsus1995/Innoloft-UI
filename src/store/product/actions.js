import { createAsyncThunk } from "@reduxjs/toolkit";
import * as productApi from "src/api/product";

export const get = createAsyncThunk("auth/get", async (config) => {
  // const { formValues, navigate, toast } = data;

    const res = await productApi.get(config);
    return res.data;

});

export const update = createAsyncThunk("auth/update", async (data) => {
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