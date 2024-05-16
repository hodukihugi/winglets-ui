import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    email: null,
    authToken: null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = null;
      state.email = null;
    },
    setAuth: (state, action) => {
      state.authToken = action.payload.authToken;
      state.userId = action.payload.userId;
      state.email = action.payload.email;
    },
  },
});

export const { logout, setAuth } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.authToken;
export default authSlice.reducer;
