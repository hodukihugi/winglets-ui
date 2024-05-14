import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    userId: null,
    Email: null,
    authToken: null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = null;
      state.userId = null;
      state.Email = null;
    },
    setAuth: (state, action) => {
      state.authToken = action.payload.authToken;
      state.userId = action.payload.userId;
      state.Email = action.payload.Email;
    },
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice;
