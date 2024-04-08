import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toasts: [],
  showTopLoading: false,
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    addToast: (state, action) => {
      state.toasts.push({
        _id: Date.now().toString(),
        type: action.payload.type ? action.payload.type : "success",
        ...action.payload,
      });
    },
    removeToast: (state, action) => {
      state.toasts = state.toasts.filter(
        (toast) => toast._id !== action.payload
      );
    },
    showTopLoading: (state) => {
      state.showTopLoading = true;
    },
    hideTopLoading: (state) => {
      state.showTopLoading = false;
    },
  },
});

export const { addToast, removeToast, showTopLoading, hideTopLoading } =
  commonSlice.actions;

export const selectToasts = (state) => state.common.toasts;

export const selectShowTopLoading = (state) => state.common.showTopLoading;

export default commonSlice.reducer;
