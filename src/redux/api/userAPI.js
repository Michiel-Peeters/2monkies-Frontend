import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const userAPI = createApi({
  reducerPath: "userState",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8000/api/users",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => `/`,
      providesTags: ["AllUsers"],
    }),
    getUserById: builder.query({
      query: (id) => `/${id}`,
    }),
    postUser: builder.mutation({
      query: ({ email, roles, password, firstName, lastName }) => ({
        url: `/`,
        method: "POST",
        body: {
          email,
          roles,
          password,
          firstName,
          lastName,
        },
      }),
      invalidatesTags: ["AllUsers"],
    }),
    putUser: builder.mutation({
      query: ({ id, email, roles, password, firstName, lastName }) => ({
        url: `/${id}`,
        method: "PUT",
        body: {
          email,
          roles,
          password,
          firstName,
          lastName,
        },
      }),
      invalidatesTags: ["AllUsers"],
    }),
    patchUser: builder.mutation({
      query: ({ id, email, roles, password, firstName, lastName }) => ({
        url: `/${id}`,
        method: "PATCH",
        body: {
          email,
          roles,
          password,
          firstName,
          lastName,
        },
      }),
      invalidatesTags: ["AllUsers"],
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllUsers"],
    }),
  }),
});

export default userAPI;
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  usePostUserMutation,
  usePutUserMutation,
  usePatchUserMutation,
  useDeleteUserMutation,
} = userAPI;
