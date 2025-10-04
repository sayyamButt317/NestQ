import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  created_at: null,
  email: null,
  firm_id: null,
  first_name: null,
  is_active: null,
  last_name: null,
  phone_number: null,
  updated_at: null,
  user_id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return { ...state, ...action.payload };
    },
    clearUser() {
      return initialState;
    },
  },
});
export const userSelector = (state) => state.user;

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
