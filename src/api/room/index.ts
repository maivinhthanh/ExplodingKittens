import httpClient from "@/lib/httpClient";
import { IRoom, RoomResponse } from "./type";
import apiRoutes from "../apiRoutes";

export const getDetailRoom = async () => {
  const response = await httpClient.get<RoomResponse>(apiRoutes.rooms.detail);
  return response.data;
};

export const getListMyRoom = async () => {
  const response = await httpClient.get<IRoom[]>(apiRoutes.rooms.detail);
  return response.data;
};

export const createNewRoom = async () => {
  const response = await httpClient.post<IRoom>(apiRoutes.rooms.create);
  return response.data;
};
