export interface MemberGame {
  memberid: string,
  isOnline: boolean,
  isAlive: boolean,
  cards: Array<string>
}

export interface IGame {
  _id: string,
  members: Array<MemberGame>,
  drawCards: Array<string>,
  usedCards: Array<string>,
  winner?: string,
  runnerUp?: string,
  room: string
}

export type ParamCreateNewGame = {
  members: Array<MemberGame>,
  room: string,
}

export interface GameDetailResponse {
  _id:     string;
  members: Member[];
  room:    string;
}

export interface Member {
  memberid: string;
  isOnline: boolean;
  isAlive:  boolean;
}