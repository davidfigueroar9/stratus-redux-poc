import axios from "axios";

const axiosIntance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:4500/"
      : "https://cirrus.tiendanube.com/",
});

export const setTokenToAxiosIntance = (token: string) => {
  axiosIntance.interceptors.request.use((config) => {
    config.headers["x-access-token"] = token;
    return config;
  });
};

export default axiosIntance;
