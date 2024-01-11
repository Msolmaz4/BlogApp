








import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 import { toast } from "react-toastify";










export const commentsApi = createApi({
  reducerPath: "commentsApi",
  tagTypes: ["Comments"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://37106.fullstack.clarusway.com/",
  }),
  endpoints: (builder) => ({
    getcomments: builder.mutation({
      query: (token) => ({
        url: `comments?token=${token}`, 
        method: "GET",
      }),
      invalidatesTags: ["Comments"],
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return console.log(response, "RTK");
      },
    }),
  }),
});

export const { useGetcommentsMutation } = commentsApi;


















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
