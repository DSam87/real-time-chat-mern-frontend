import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/user/usersSlice";
import postsSlice from "../features/posts/postsSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
    posts: postsSlice,
  },
});
