import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    authToken: null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = null;
    },
    setAuth: (state, action) => {
      state.authToken = action.payload.authToken;
      state.email = action.payload.email;
    },
  },
});

export const { logout, setAuth } = authSlice.actions;
export const selectAuthToken = (state) => state.auth.authToken;
export default authSlice.reducer;
