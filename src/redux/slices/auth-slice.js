import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        authUser: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
    },
});

export default authSlice.reducer;
export const { setAuthUser } = authSlice.actions;
