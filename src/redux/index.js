import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import difficultyAPI from "./api/difficultyAPI";
import gameAPI from "./api/gameAPI";
import roomAPI from "./api/roomAPI";
import tipAPI from "./api/tipAPI";
import tipGivenAPI from "./api/tipGivenAPI";
import userAPI from "./api/userAPI";
import playingSlice from "./slices/playing";

const store = configureStore({
  reducer: combineReducers({
    // Redux api calls
    [difficultyAPI.reducerPath]: difficultyAPI.reducer,
    [roomAPI.reducerPath]: roomAPI.reducer,
    [gameAPI.reducerPath]: gameAPI.reducer,
    [tipGivenAPI.reducerPath]: tipGivenAPI.reducer,
    [tipAPI.reducerPath]: tipAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,

    // Redux Slices
    [playingSlice.name]: playingSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    difficultyAPI.middleware,
    roomAPI.middleware,
    gameAPI.middleware,
    tipGivenAPI.middleware,
    tipAPI.middleware,
    userAPI.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
