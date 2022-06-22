import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginAPI = createApi({
  reducerPath: "loginState",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wdev2.be/fs_michiel/eindwerk",
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/login_check",
        method: "POST",
        body: {
          email,
          password,
        },
      }),
    }),
    logout: builder.mutation({
      query: () => ({ url: "/logout" }),
    }),
  }),
});

export default loginAPI;
export const { useLoginMutation, useLogoutMutation } = loginAPI;
