import httpClient from "@/lib/httpClient";
import { IGame, ParamCreateNewGame } from "./type";
import apiRoutes from "../apiRoutes";

export const createNewGame = async (param: ParamCreateNewGame) => {
  const response = await httpClient.post<IGame>(apiRoutes.games.create, param);
  return response.data;
};

export const getDetailGame = async (id: string) => {
  const response = await httpClient.get<IGame>(apiRoutes.games.detail + `/${id}`);
  return response.data;
};

export const getListMyGame = async () => {
  const response = await httpClient.get<IGame[]>(apiRoutes.games.detail);
  return response.data;
};