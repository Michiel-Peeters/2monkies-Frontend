import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// TODO: Fill in post put patch

const tipGivenAPI = createApi({
  reducerPath: "tipGivenState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/tip_givens",
  }),
  endpoints: (builder) => ({
    getAllTipsGiven: builder.query({
      query: () => `/`,
      providesTags: ["AllTipsGiven"],
    }),
    getTipGivenById: builder.query({
      query: (id) => `/${id}`,
    }),
    postTipGiven: builder.query({
      query: ({ name, difficulty }) => ({
        url: `/`,
        method: "POST",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllTipsGiven"],
    }),
    putTipGiven: builder.query({
      query: ({ id, name, difficulty }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllTipsGiven"],
    }),
    patchTipGiven: builder.query({
      query: ({ id, name, difficulty }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllTipsGiven"],
    }),
    deleteTipGiven: builder.query({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllTipsGiven"],
    }),
  }),
});

export default tipGivenAPI;
export const {
  useGetAllTipsGivenQuery,
  useGetTipGivenByIdQuery,
  usePostTipGivenMutation,
  usePutTipGivenMutation,
  usePatchTipGivenMutation,
  useDeleteTipGivenMutation,
} = tipGivenAPI;
