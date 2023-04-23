import customAxios from "../utils/api";


export const get = (config={}) => {
    // const {} = config
    return customAxios({
      url: "/users/signin",
      method: "POST",
      ...config
    });
  };
  
  export const update = (data, options) => {
    return customAxios({
      url: "/users/signup",
      method: "POST",
      data,
      ...options,
    });
  };