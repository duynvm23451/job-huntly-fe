import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./role-slice";
import userSlice from "./user-slice";

const store = configureStore({
  reducer: {
    role: roleSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
