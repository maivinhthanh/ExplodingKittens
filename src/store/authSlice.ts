import { getProfile } from "@/api/auth";
import { JWTDecode, IUser } from "@/api/auth/type";
import { getCookie } from "@/lib/cookies";
import { ACCESS_TOKEN_KEY } from "@/lib/token";
import { StateCreator } from "zustand";
import jwt_decode from "jwt-decode";

export interface AuthSliceState {
  user: IUser | null;
  isLoading: boolean;
  hasErrors: boolean;
  setUser: (user: IUser | null) => void;
  fetchUser: () => void;
  auth: () => boolean;
}

const createAuthSlice: StateCreator<AuthSliceState, [], [], AuthSliceState> = (
  set
) => ({
  user: null,
  isLoading: false,
  hasErrors: false,
  setUser: (user: IUser | null) => set((state) => ({ ...state, user })),
  fetchUser: async () => {
    set({ isLoading: true });

    try {
      const response = await getProfile();
      set((state) => ({
        ...state,
        user: response,
        isLoading: false,
        hasErrors: false,
      }));
    } catch (err) {
      set({ hasErrors: true, isLoading: false });
    }
  },
  auth: () => {
    const accessToken = getCookie(ACCESS_TOKEN_KEY);
    if (!accessToken) return false;
    const decoded: JWTDecode = jwt_decode(accessToken);
    if (decoded.exp * 1000 < Date.now()) {
      return false;
    }

    return true;
  },
});

export default createAuthSlice;
