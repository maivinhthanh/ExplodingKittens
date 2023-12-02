import { IUser } from "../auth/type";

export interface MemberGame {
  memberid: Pick<IUser, "_id" | "name" | "email">;
  isOnline: boolean;
  isAlive: boolean;
  cards: Array<string>;
}

export interface IGame {
  _id: string;
  members: Array<MemberGame>;
  usedCards: Array<string>;
  winner?: string;
  runnerUp?: string;
  room: string;
  datecreate: number;
  dateedit?: number;
}

export interface MemberGameParam {
  memberid: string;
  isOnline: boolean;
  isAlive: boolean;
  cards: Array<string>;
}

export type ParamCreateNewGame = {
  members: Array<MemberGameParam>;
  room: string;
};
