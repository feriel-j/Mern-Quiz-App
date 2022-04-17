import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./userSlice/quizSlice";
import userSlice from "./userSlice/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice,
  },
});
