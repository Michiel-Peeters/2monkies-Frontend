import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import difficultyAPI from "./api/difficultyAPI";
import roomAPI from "./api/roomAPI";

const store = configureStore({
  reducer: combineReducers({
    [difficultyAPI.reducerPath]: difficultyAPI.reducer,
    [roomAPI.reducerPath]: roomAPI.reducer,
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    difficultyAPI.middleware,
    roomAPI.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
