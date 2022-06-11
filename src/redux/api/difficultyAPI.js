import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const difficultyAPI = createApi({
  reducerPath: "difficultyState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/difficulties",
  }),
  endpoints: (builder) => ({
    getDifficulties: builder.query({
      query: () => `/`,
      providesTags: ["AllDifficulties"],
    }),
    getDifficultyById: builder.query({
      query: (id) => `/${id}`,
    }),
    postDifficulty: builder.query({
      query: ({ name, maxTime }) => ({
        url: `/`,
        method: "POST",
        body: {
          name,
          maxTime,
        },
      }),
      invalidatesTags: ["AllDifficulties"],
    }),
    putDifficulty: builder.query({
      query: ({ id, name, maxTime }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          name,
          maxTime,
        },
      }),
      invalidatesTags: ["AllDifficulties"],
    }),
    patchDifficulty: builder.query({
      query: ({ id, name, maxTime }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          name,
          maxTime,
        },
      }),
      invalidatesTags: ["AllDifficulties"],
    }),
    deleteDifficulty: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllDifficulties"],
    }),
  }),
});

export default difficultyAPI;
export const {
  useGetDifficultiesQuery,
  useGetDifficultyByIdQuery,
  usePostDifficultyMutation,
  usePutDifficultyMutation,
  usePatchDifficultyMutation,
  useDeleteDifficultyMutation,
} = difficultyAPI;
