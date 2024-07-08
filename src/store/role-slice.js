import { createSlice } from "@reduxjs/toolkit";

export const EMPLOYEE = "EMPLOYEE";
export const RECRUITER = "RECRUITER";

const roleSlice = createSlice({
  name: "role",
  initialState: { role: EMPLOYEE },
  reducers: {
    changeRole(state, action) {
      const newRole = action.payload;
      console.log(newRole);
      state.role = newRole;
    },
  },
});

export const roleActions = roleSlice.actions;

export default roleSlice;
