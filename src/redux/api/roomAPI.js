import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const roomAPI = createApi({
  reducerPath: "roomState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/rooms",
  }),
  endpoints: (builder) => ({
    getRooms: builder.query({
      query: () => `/`,
      providesTags: ["AllRooms"],
    }),
    getRoomyById: builder.query({
      query: (id) => `/${id}`,
    }),
    postRoom: builder.query({
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
    putRoom: builder.query({
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
    patchRoom: builder.query({
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
    deleteRoom: builder.query({
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
  useGetRoomyByIdQuery,
  usePostRoomMutation,
  usePutRoomMutation,
  usePatchRoomMutation,
  useDeleteRoomMutation,
} = roomAPI;
