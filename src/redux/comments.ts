import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getcomments: builder.mutation({
      query: (token) => ({
        url: `comments`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
      }),
      invalidatesTags: ["Comments"],
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
});

export const { useGetcommentsMutation } = commentsApi;

export const commentApi = createApi({
  reducerPath: "commentApi",
  tagTypes: ["Comment"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getcomment: builder.mutation({
      query: ({ id, token }) => ({
        url: `comment/${id}`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
      }),
      invalidatesTags: ["Comment"],
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
});

export const { useGetcommentMutation } = commentApi;

export const commApi = createApi({
  reducerPath: "commApi",
  tagTypes: ["Comm"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    postcomment: builder.mutation({
      query: ({ token, ...data }) => ({
        url: `comments/`,
        headers: { Authorization: `Token ${token}` },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Comm"],
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
});

export const { usePostcommentMutation } = commApi;

// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { toast } from "react-toastify";

// // Define a service using a base URL and expected endpoints
// export const commentsApi = createApi({
//   reducerPath: "commentsApi",
//   tagTypes: ["Comments"],

//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://37106.fullstack.clarusway.com/",

//   }),

//   endpoints: (builder) => ({
//     getcomments: builder.mutation({
//       query: (token) => ({

//         url:'comments',
//         method:"GET",
//         body:token
//       }),
//       invalidatesTags: ["Comments"],
//       transformResponse: (response) => {
//         toast(`The operation was successful!`);
//         return console.log(response,"RTK")
//       }
//     }),
//   }),
// });

// export const {useGetcommentsMutation} = commentsApi;
