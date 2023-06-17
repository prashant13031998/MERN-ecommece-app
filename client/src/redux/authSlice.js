import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;
