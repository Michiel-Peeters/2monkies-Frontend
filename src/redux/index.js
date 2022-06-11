import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import difficultyAPI from "./api/difficultyAPI";

const store = configureStore({
  reducer: combineReducers({
    [difficultyAPI.reducerPath]: difficultyAPI.reducer,
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    difficultyAPI.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
