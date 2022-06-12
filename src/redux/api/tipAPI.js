import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tipAPI = createApi({
  reducerPath: "tipState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/tips",
  }),
  endpoints: (builder) => ({
    getTips: builder.query({
      query: () => `/`,
      providesTags: ["AllTips"],
    }),
    getTipById: builder.query({
      query: (id) => `/${id}`,
    }),
    postTip: builder.query({
      query: ({ description }) => ({
        url: `/`,
        method: "POST",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    putTip: builder.query({
      query: ({ id, description }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    patchTip: builder.query({
      query: ({ id, description }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          description,
        },
      }),
      invalidatesTags: ["AllTips"],
    }),
    deleteTip: builder.query({
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
