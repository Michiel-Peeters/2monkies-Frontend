import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import difficultyAPI from "./api/difficultyAPI";
import gameAPI from "./api/gameAPI";
import roomAPI from "./api/roomAPI";
import tipAPI from "./api/tipAPI";
import tipGivenAPI from "./api/tipGivenAPI";
import userAPI from "./api/userAPI";
import playingSlice from "./slices/playing";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import userSlice from "./slices/user";
import loginAPI from "./api/loginAPI";

const persistConfig = {
  key: "playing",
  storage,
};

const reducers = combineReducers({
  [playingSlice.name]: playingSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: combineReducers({
    // Redux api calls
    [difficultyAPI.reducerPath]: difficultyAPI.reducer,
    [roomAPI.reducerPath]: roomAPI.reducer,
    [gameAPI.reducerPath]: gameAPI.reducer,
    [tipGivenAPI.reducerPath]: tipGivenAPI.reducer,
    [tipAPI.reducerPath]: tipAPI.reducer,
    [userAPI.reducerPath]: userAPI.reducer,
    [loginAPI.reducerPath]: loginAPI.reducer,

    // Redux Slices
    persistedReducer,
    [userSlice.name]: userSlice.reducer,
  }),
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
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
