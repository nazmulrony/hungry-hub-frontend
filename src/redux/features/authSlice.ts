import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState = {
    isLoggedIn: false,
    user: {
        name: null,
        email: null,
        photo: null,
        addressLine1: null,
        city: null,
        country: null,
    },
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.isLoggedIn = true;
            state.user = payload;
        },
        setLogout: (state) => {
            state = initialState;
        },
    },
});

export const { setUser, setLogout } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;

export default authSlice.reducer;
