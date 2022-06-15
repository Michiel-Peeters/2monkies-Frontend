import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [];

const playingSlice = createSlice({
  name: "playingState",
  initialState,
  reducers: {
    addGame(state, { payload }) {
      state.push({
        gameId: nanoid(10),
        gameInfo: payload,
      });
    },
    updateCurrentTip(state, { payload: { roomId, currentTip } }) {
      const gameToEdit = state.find(
        ({ gameInfo }) => gameInfo.roomId == roomId
      );
      gameToEdit.gameInfo.currentTip = currentTip;
    },
    updateSeconds(state, { payload: { roomId, seconds } }) {
      const gameToEdit = state.find(
        ({ gameInfo }) => gameInfo.roomId == roomId
      );
      gameToEdit.gameInfo.seconds = seconds - 3;
    },
    stopGame(state, { payload }) {
      state.splice(
        state.findIndex((game) => game.roomId === payload),
        1
      );
    },
  },
});

export default playingSlice;
export const { addGame, stopGame, updateCurrentTip, updateSeconds } =
  playingSlice.actions;
