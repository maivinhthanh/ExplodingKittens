import apiRoutes from "@/api/apiRoutes";
import httpClient from "@/lib/httpClient";
import { IUser } from "../auth/type";

export const searchUser = async (email: string) => {
  const response = await httpClient.post<IUser[]>(apiRoutes.users.search, {email});
  return response.data;
};
