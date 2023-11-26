import { IUser } from "../auth/type";

export interface IUserRoom extends IUser {
  isOnline: boolean;
  isAlive: boolean;
}

export interface IRoom {
  _id: string;
  members: IUserRoom[];
  cards?: string[];
  type: string;
  name?: string;
}

export interface RoomResponse {
  room: IRoom;
}

export interface ParamCreateNewRoom {
  members: IUser[];
  cards: string[];
  type: string;
  name: string;
}