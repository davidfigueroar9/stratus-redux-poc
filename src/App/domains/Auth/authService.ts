import axios, { setTokenToAxiosIntance } from "../../axios";

type authResponse = {
  accessToken: string;
  country: string;
  name: string;
  storeId: string;
};

const login = async (
  email: string,
  password: string
): Promise<authResponse> => {
  const { data }: { data: authResponse } = await axios.post("/login", {
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
