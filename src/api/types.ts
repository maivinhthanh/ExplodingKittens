import { AxiosError } from 'axios';

export type ApiError = {
  code: string;
  http_code: number;
  title: string;
  description: string;
  internal: string;
};

export type DefaultQueryError = AxiosError<ApiError>;

export type JwtTokenPayload = {
  typ: string;
  cid: string;
  status: string;
  eoc: string;
  noc: string;
  cty: string;
  imei: string;
  type: string;
  exp: number;
  iat: number;
  iss: string;
};
