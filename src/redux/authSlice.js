import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: {},
  persist: JSON.parse(localStorage.getItem("persist")) || true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
      state.persist = true;
    },
    logout: (state) => {
      state.auth = {};
      state.persist = false;
    },
    setPersist: (state, action) => {
      state.persist = action.payload;
      localStorage.setItem("persist", JSON.stringify(action.payload));
    },
  },
});

export const authSelector = (state) => state.auth;
export const { setAuth, logout, setPersist } = authSlice.actions;
export default authSlice.reducer;
