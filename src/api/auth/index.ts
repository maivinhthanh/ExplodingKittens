import apiRoutes from "@/api/apiRoutes";
import { publicHttpClient } from "@/lib/httpClient";
import { LoginParams, ResponseLogin } from "./type";
import { setCookie } from "@/lib/cookies";
import { token } from "@/lib/constants";

export const logIn = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.login, params);
  setCookie(token, response.data.accessToken)
  return response.data;
};

export const signUp = async (params?: LoginParams) => {
  const response = await publicHttpClient.post<ResponseLogin>(apiRoutes.sign_up, params);
  setCookie(token, response.data.accessToken)
  return response.data;
};

export const getProfile = async () => {
  const response = await publicHttpClient.get<ResponseLogin>(apiRoutes.profile);
  return response.data;
};
