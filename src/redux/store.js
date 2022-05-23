import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import postSlice from "./postSlice";
import commentSlice from "./commentSlice";

export default configureStore({
  reducer: {
    userSlice,
    postSlice,
    commentSlice
  }
})
