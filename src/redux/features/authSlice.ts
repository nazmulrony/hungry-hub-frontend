import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface User {
    name: string | null;
    email: string | null;
    photo?: string | null;
    addressLine1?: string | null;
    city?: string | null;
    country?: string | null;
}
interface AuthState {
    isLoggedIn: boolean;
    user: User | null;
    token: string | null;
}

const initialState: AuthState = {
    isLoggedIn: false,
    user: null,
    token: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (
            state,
            action: PayloadAction<{ user: User; token: string }>
        ) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            state.token = null;
        },
    },
});

export const { setUser, setLogout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
