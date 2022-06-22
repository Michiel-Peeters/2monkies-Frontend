import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "userState",
  initialState,
  reducers: {
    addUser(state, { payload }) {
      state.push({
        user: payload,
      });
    },
    removeUser(state, { payload }) {
      //   return (state = initialState);
    },
  },
});

export default userSlice;
export const { addUser, removeUser } = userSlice.actions;
