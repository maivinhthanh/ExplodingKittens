import apiRoutes from "@/api/apiRoutes";
import httpClient , { publicHttpClient } from "@/lib/httpClient";
import { LoginParams, ResponseLogin, User } from "./type";
import { setCookie } from "@/lib/cookies";
import { ACCESS_TOKEN_KEY } from "@/lib/token";

export const logIn = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.login, params);
  setCookie(ACCESS_TOKEN_KEY, response.data.accessToken)
  return response.data;
};

export const signUp = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.sign_up, params);
  setCookie(ACCESS_TOKEN_KEY, response.data.accessToken)
  return response.data;
};

export const getProfile = async () => {
  const response = await httpClient.get<User>(apiRoutes.profile);
  return response.data;
};
