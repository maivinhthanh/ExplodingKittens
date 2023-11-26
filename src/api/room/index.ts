import httpClient from "@/lib/httpClient";
import { IRoom, ParamCreateNewRoom, RoomResponse } from "./type";
import apiRoutes from "../apiRoutes";

export const getDetailRoom = async (id: string) => {
  const response = await httpClient.get<RoomResponse>(apiRoutes.rooms.detail + `/${id}/member`);
  return response.data;
};

export const getListMyRoom = async () => {
  const response = await httpClient.get<IRoom[]>(apiRoutes.rooms.detail);
  return response.data;
};

export const createNewRoom = async (param: ParamCreateNewRoom) => {
  const response = await httpClient.post<IRoom>(apiRoutes.rooms.create, param);
  return response.data;
};
