import customAxios from "../utils/api";


export const get = (config={}) => {
    // const {} = config
    return customAxios({
      url: "/product/6781/",
      method: "GET",
      ...config
    });
  };
  
  export const update = (data, options) => {
    return customAxios({
      url: "/product/6781/",
      method: "PUT",
      data,
      ...options,
    });
  };

  export const getTRL = (data, options) => {
    return customAxios({
      url: "/trl/",
      method: "GET",
      data,
      ...options,
    });
  };

  export const getAppConfig = (data, options) => {
    return customAxios({
      url: "/trl/",
      method: "GET",
      data,
      ...options,
    });
  };