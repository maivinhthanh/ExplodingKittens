import type { AxiosRequestConfig } from "axios";
import axios from "axios";
import { apiUrl, API_FETCH_TIMEOUT, ERROR_CODES } from "./constants";

import { getCookie } from "./cookies";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  removeAccessToken,
  removeRefreshToken,
} from "./token";
import { DefaultQueryError } from "../api/types";
export const publicHttpClient = axios.create({
  baseURL: apiUrl,
  timeout: API_FETCH_TIMEOUT * 1000,
});

const httpClient = axios.create({
  baseURL: apiUrl,
  timeout: API_FETCH_TIMEOUT * 1000,
});

httpClient.defaults.headers.common["Content-Type"] = "application/json";

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    const contentType = 'application/json';

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
      config.headers['Content-Type'] = contentType;
    } else config.headers['Content-Type'] = contentType;
    config.headers['Access-Control-Allow-Credentials'] = 'true';
    return config;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  (response) => response,
  async (error: DefaultQueryError) => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    const refreshToken = getCookie(REFRESH_TOKEN_KEY);

    const originalRequest: AxiosRequestConfig & { _retry?: boolean } =
      error.config as AxiosRequestConfig;

    if (
      error.response?.data.code === ERROR_CODES.NOT_AUTHORIZED.code &&
      !originalRequest._retry &&
      !!refreshToken &&
      !!accessToken
    ) {
      originalRequest._retry = true;
      try {
        return httpClient(originalRequest);
      } catch (error) {
        removeAccessToken();
        removeRefreshToken();

        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);

export default httpClient;
