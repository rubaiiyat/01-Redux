import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `posts`,
    }),
    getPostId: builder.query({
      query: (id) => `/posts/${id}`,
    }),
    addNewPost: builder.mutation({
      query: (data) => ({
        url: "/posts",
        method: "POST",
        body: data,
      }),
    }),

    deletePostById: builder.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostIdQuery,
  useAddNewPostMutation,
  useDeletePostByIdMutation,
} = postApi;
export default postApi;
