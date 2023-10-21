import apiRoutes from "@/api/apiRoutes";
import httpClient , { publicHttpClient } from "@/lib/httpClient";
import { LoginParams, ResponseLogin, IUser } from "./type";
import { setCookie } from "@/lib/cookies";
import { ACCESS_TOKEN_KEY } from "@/lib/token";

export const logIn = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.users.login, params);
  setCookie(ACCESS_TOKEN_KEY, response.data.accessToken)
  return response.data;
};

export const signUp = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.users.sign_up, params);
  setCookie(ACCESS_TOKEN_KEY, response.data.accessToken)
  return response.data;
};

export const getProfile = async () => {
  const response = await httpClient.get<IUser>(apiRoutes.users.profile);
  return response.data;
};
