import apiRoutes from "@/api/apiRoutes";
import httpClient from "@/lib/httpClient";
import { ICard } from "./type";

export const listCard = async () => {
  const response = await httpClient.get<ICard[]>(
    apiRoutes.cards.list + "?isBasic=false"
  );
  return response.data;
};
