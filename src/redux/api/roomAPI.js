import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const roomAPI = createApi({
  reducerPath: "roomState",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_michiel/eindwerk/api/rooms",
  }),
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => ({ url: `/`, credentials: "include" }),
      providesTags: ["AllRooms"],
    }),
    getRoomById: builder.query({
      query: (id) => ({ url: `/${id}`, credentials: "include" }),
    }),
    postRoom: builder.mutation({
      query: ({ name, difficulty }) => ({
        url: `/`,
        method: "POST",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllRooms"],
    }),
    putRoom: builder.mutation({
      query: ({ id, name, difficulty }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllRooms"],
    }),
    patchRoom: builder.mutation({
      query: ({ id, name, difficulty }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          name,
          difficulty,
        },
      }),
      invalidatesTags: ["AllRooms"],
    }),
    deleteRoom: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllRooms"],
    }),
  }),
});

export default roomAPI;
export const {
  useGetRoomsQuery,
  useGetRoomByIdQuery,
  usePostRoomMutation,
  usePutRoomMutation,
  usePatchRoomMutation,
  useDeleteRoomMutation,
} = roomAPI;
