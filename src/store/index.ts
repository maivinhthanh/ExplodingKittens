import { create } from "zustand";
import createAuthSlice, { AuthSliceState } from "./authSlice";
import { devtools, persist } from "zustand/middleware";
import createGameSlice, { GameSliceState } from "./gameSlice";

const useBoundStore = create<AuthSliceState & GameSliceState>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createGameSlice(...a),
      }),
      { name: "store" }
    )
  )
);

export default useBoundStore;
