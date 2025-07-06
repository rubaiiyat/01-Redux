import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const UserApi = createApi({
  reducerPath: "UserApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/" }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      url: "/users",
    }),
  }),
});

export const { useGetUsersQuery } = UserApi;
