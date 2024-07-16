import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { loggedInUser: null },
  reducers: {
    updateUser(state, action) {
      state.loggedInUser = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
