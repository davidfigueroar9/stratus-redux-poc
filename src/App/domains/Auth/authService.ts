import axios, { setTokenToAxiosIntance } from "../../axios";

export type authData = {
  accessToken: string;
  country: string;
  name: string;
  storeId: string;
};

const login = async (email: string, password: string): Promise<authData> => {
  const { data }: { data: authData } = await axios.post("/login", {
    email,
    password,
    registerFrom: "android",
  });

  setTokenToAxiosIntance(data.accessToken);

  return data;
};

const AuthServices = {
  login,
};

export default AuthServices;
