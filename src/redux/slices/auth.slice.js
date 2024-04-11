import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userId: null,
    username: null,
    authToken: null,
  },
  reducers: {
    logout: (state) => {
      state.authToken = null;
      state.userId = null;
      state.username = null;
    },
    setAuth: (state, action) => {
      state.authToken = action.payload.token;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    }
  },
});

export const {logout,setAuth} = authSlice.actions;

export const selectAuthToken = (state) => state.auth.authToken;
export const selectUsername = (state) => state.auth.username;
export default authSlice.reducer;