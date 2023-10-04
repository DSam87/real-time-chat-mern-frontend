import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 2,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
  {
    id: 3,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 4,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
  {
    id: 5,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 6,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
  {
    id: 1,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 2,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
  {
    id: 3,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 4,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
  {
    id: 5,
    username: "username",
    text: "post text test long post text test long post text test long post text test long post text test long post text test long  1",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 2,
  },
  {
    id: 6,
    username: "username",
    text: "post text test 2",
    img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    likes: 7,
  },
];

export const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
    },
  },
});

export const { postAdded } = postsSlice.actions;

export const postsSelector = (state) => state.posts;

export default postsSlice.reducer;
