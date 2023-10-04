import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    value: 0,
  },
  reducers: {},
});

export const selectUsers = (state) => state.users;
export default usersSlice.reducer;
