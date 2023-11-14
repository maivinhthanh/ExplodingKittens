import { IUser } from "../auth/type";
import { ICard } from "../card/type";

export interface IRoom {
  _id: string;
  members: IUser[];
  cards?: string[];
  type: string;
  name?: string;
}

export interface RoomResponse {
  room: IRoom;
  listCardDetail?: ICard[];
}

export interface ParamCreateNewRoom {
  members: IUser[];
  cards: string[];
  type: string;
  name: string;
}