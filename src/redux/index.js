import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import difficultyAPI from "./api/difficultyAPI";
import gameAPI from "./api/gameAPI";
import roomAPI from "./api/roomAPI";
import tipGivenAPI from "./api/tipGivenAPI";

const store = configureStore({
  reducer: combineReducers({
    [difficultyAPI.reducerPath]: difficultyAPI.reducer,
    [roomAPI.reducerPath]: roomAPI.reducer,
    [gameAPI.reducerPath]: gameAPI.reducer,
    [tipGivenAPI.reducerPath]: tipGivenAPI.reducer,
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    difficultyAPI.middleware,
    roomAPI.middleware,
    gameAPI.middleware,
    tipGivenAPI.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
