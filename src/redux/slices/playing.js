import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const playingSlice = createSlice({
  name: "playingState",
  initialState,
  reducers: {
    addGame(state, { payload }) {
      state.push({
        gameId: nanoid(10),
        payload,
      });
    },
  },
});

export default playingSlice;
export const { addGame } = playingSlice.actions;
