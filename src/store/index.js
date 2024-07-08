import { configureStore } from "@reduxjs/toolkit";
import roleSlice from "./role-slice";

const store = configureStore({
  reducer: {
    role: roleSlice.reducer,
  },
});

export default store;
