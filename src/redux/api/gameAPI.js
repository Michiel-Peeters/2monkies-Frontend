import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const gameAPI = createApi({
  reducerPath: "gameState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/games",
  }),
  endpoints: (builder) => ({
    getGames: builder.query({
      query: () => `/`,
      providesTags: ["AllGames"],
    }),
    getGameById: builder.query({
      query: (id) => `/${id}`,
    }),
    postGame: builder.query({
      query: ({ user, room, startDate, endDate }) => ({
        url: `/`,
        method: "POST",
        body: {
          user,
          room,
          startDate,
          endDate,
        },
      }),
      invalidatesTags: ["AllGames"],
    }),
    putGame: builder.query({
      query: ({ id, user, room, startDate, endDate }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          user,
          room,
          startDate,
          endDate,
        },
      }),
      invalidatesTags: ["AllGames"],
    }),
    patchGame: builder.query({
      query: ({ id, user, room, startDate, endDate }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          user,
          room,
          startDate,
          endDate,
        },
      }),
      invalidatesTags: ["AllGames"],
    }),
    deleteGame: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllGames"],
    }),
  }),
});

export default gameAPI;
export const {
  useGetGamesQuery,
  useGetGameByIdQuery,
  usePostGameMutation,
  usePutGameMutation,
  usePatchGameMutation,
  useDeleteGameQuery,
} = gameAPI;
