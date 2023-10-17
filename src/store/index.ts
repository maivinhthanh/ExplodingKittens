import { create, StateCreator } from "zustand";
import createAuthSlice, { AuthSliceState } from "./authSlice";
import { devtools, persist } from "zustand/middleware";

interface FishSlice {
  fishes: number;
  addFish: () => void;
}

const createFishSlice: StateCreator<
  AuthSliceState & FishSlice,
  [],
  [],
  FishSlice
> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
});

const useBoundStore = create<AuthSliceState & FishSlice>()(
  devtools(
    persist(
      (...a) => ({
        ...createAuthSlice(...a),
        ...createFishSlice(...a),
      }),
      { name: "store" }
    )
  )
);

export default useBoundStore;
