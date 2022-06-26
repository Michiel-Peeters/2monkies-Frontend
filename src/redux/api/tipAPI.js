import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tipAPI = createApi({
  reducerPath: "tipState",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_API}/tips`,
  }),
  endpoints: (builder) => ({
    getTips: builder.query({
      query: () => `/`,
      providesTags: ["AllTips"],
    }),
    getTipById: builder.query({
      query: (id) => `/${id}`,
    }),
    postTip: builder.mutation({
      query: ({ description }) => ({
        url: `/`,
        method: "POST",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    putTip: builder.mutation({
      query: ({ id, description }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    patchTip: builder.mutation({
      query: ({ id, description }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    deleteTip: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllTips"],
    }),
  }),
});

export default tipAPI;
export const {
  useGetTipsQuery,
  useGetTipByIdQuery,
  usePostTipMutation,
  usePutTipMutation,
  usePatchTipMutation,
  useDeleteTipMutation,
} = tipAPI;
