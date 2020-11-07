import axios from "axios";

const axiosIntance = axios.create({
  baseURL: "http://localhost:4500/",
});

export const setTokenToAxiosIntance = (token: string) => {
  console.log(token);
  axiosIntance.interceptors.request.use((config) => {
    config.headers["x-access-token"] = token;
    return config;
  });
};

export default axiosIntance;
