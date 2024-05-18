import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    email: null,
    authToken: null,
    name: null,
    gender: null,
    birthdate: null,
    height: null,
    horoscope: null,
    hobby: null,
    language: null,
    education: null,
    hometown: null,
    coordinates: null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = null;
      state.email = null;
      state.name = null;
      state.gender = null;
      state.birthdate = null;
      state.horoscope = null;
      state.height = null;
      state.hobby = null;
      state.language = null;
      state.education = null;
      state.hometown = null;
      state.coordinates = null;
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
