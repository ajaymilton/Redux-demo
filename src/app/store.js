import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";

const store = configureStore({
  reducer: {
    //Store
    usersInfo: userReducer,
  },
});

export default store;
