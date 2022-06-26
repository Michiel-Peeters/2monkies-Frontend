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
      state.length = 0;
    },
    userState(state, { payload }) {
      return state;
    },
  },
});

export default userSlice;
export const { addUser, removeUser, userState } = userSlice.actions;
