import { StateCreator } from "zustand";
import { IGame } from "@/api/game/type";
import { getDetailGame } from "@/api/game";
import { RoomMember } from "@/api/room/type";

export interface GameSliceState {
  game: IGame | null;
  isLoading: boolean;
  hasErrors: boolean;
  room: RoomMember | null;
  setGame: (game: IGame | null) => void;
  fetchGame: (gameid: string) => void;
}

const createGameSlice: StateCreator<GameSliceState, [], [], GameSliceState> = (
  set
) => ({
  game: null,
  isLoading: false,
  hasErrors: false,
  setGame: (game: IGame | null) => set((state) => ({ ...state, game })),
  fetchGame: async (gameid) => {
    set({ isLoading: true });

    try {
      const gameResponse = await getDetailGame(gameid || "");
      
      set((state) => ({
        ...state,
        game: gameResponse,
        isLoading: false,
        hasErrors: false,
      }));
    } catch (err) {
      set({ hasErrors: true, isLoading: false });
    }
  },
  room: null
});

export default createGameSlice;
