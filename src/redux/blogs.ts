import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

// Define a service using a base URL and expected endpoints
export const blogsApi = createApi({
  reducerPath: "blogsApi",
  tagTypes: ["Blogs"],
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
  }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "blogs",
    }),

    deletBlog: builder.mutation({
      query: (info) => ({
        url: `blogs/${info.id}`,
        headers: { Authorization: `Token ${info.token}` },
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
      transformResponse: (response) => {
        toast("İşlem oldu!");
        return response;
      },
    }),

    getAllBlog: builder.mutation({
      //cagiriken buun kullaniyoruy
      query: ({ id, token }) => ({
        url: `blogs/${id}`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
      }),
      invalidatesTags: ["Blogs"], //bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        return response;
      },
    }),

    postBlog: builder.mutation({
      //cagiriken buun kullaniyoruy
      query: ({ token, ...data }) => ({
        url: `blogs/`,
        headers: { Authorization: `Token ${token}` },
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Blogs"], //bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
    putBlog: builder.mutation({
      //cagiriken buun kullaniyoruy
      query: ({ id, token, data }) => ({
        url: `blogs/${id}`,
        headers: { Authorization: `Token ${token}` },
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Blogs"], //bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),

    likeBlog: builder.mutation({
      //cagiriken buun kullaniyoruy
      query: ({ id, token }) => ({
        url: `blogs/${id}/getLike`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
      }),
      invalidatesTags: ["Blogs"], //bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation like successful!`);
        return response;
      },
    }),

    dislikeBlog: builder.mutation({
      //cagiriken buun kullaniyoruy
      query: ({ id, token }) => ({
        url: `blogs/${id}/postLike`,
        headers: { Authorization: `Token ${token}` },
        method: "POST",
      }),
      invalidatesTags: ["Blogs"],
      transformResponse: (response) => {
        toast(`The operation dislike successful!`);
        return response;
      },
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useDeletBlogMutation,
  useGetAllBlogMutation,
  usePostBlogMutation,
  usePutBlogMutation,
  useLikeBlogMutation,
  useDislikeBlogMutation,
} = blogsApi;

// export const blogApi = createApi({
//   reducerPath: 'blogApi',
//   tagTypes: ["Blog"],//basta hafixada tutat
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
//   endpoints: (builder) => ({
//     getAllBlog: builder.mutation({  //cagiriken buun kullaniyoruy
//       query: ({ id, token }) => ({
//         url: `blogs/${id}`,
//         headers: { Authorization: `Token ${token}` },
//         method: "GET",
//       }),
//       invalidatesTags: ["Blog"],//bunu yapmazan guncellme almmzdikkat
//       transformResponse: (response) => {

//         return response;
//       },
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useGetAllBlogMutation} = blogApi

// export const blApi = createApi({
//   reducerPath: 'blApi',
//   tagTypes: ["Bl"],//basta hafixada tutat
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
//   endpoints: (builder) => ({
//     postBlog: builder.mutation({  //cagiriken buun kullaniyoruy
//       query: ({ token,...data }) => ({
//         url: `blogs/`,
//         headers: { Authorization: `Token ${token}` },
//         method: "POST",
//         body:data
//       }),
//       invalidatesTags: ["Bl"],//bunu yapmazan guncellme almmzdikkat
//       transformResponse: (response) => {
//         toast(`The operation was successful!`);
//         return response;
//       },
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const {usePostBlogMutation } = blApi

// export const delethApi = createApi({
//   reducerPath: 'delethApi',
//   tagTypes: ["Blog"],//basta hafixada tutat
//   baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
//   endpoints: (builder) => ({
//     deletBlog: builder.mutation({  //cagiriken buun kullaniyoruy
//       query: ({ id,token}) => ({
//         url: `blogs/${id}`,
//         headers: { Authorization: `Token ${token}` },
//         method: "DELETE",

//       }),
//       invalidatesTags: ["Delet"],//bunu yapmazan guncellme almmzdikkat
//       transformResponse: (response) => {
//         toast(`The operation was successful!`);
//         return response;
//       },
//     }),
//   }),
// })

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useDeletBlogMutation} = delethApi

// export const likeApi = createApi({
//   reducerPath: "likeApi",
//   tagTypes: ["Like"], //basta hafixada tutat
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://37106.fullstack.clarusway.com/",
//   }),
//   endpoints: (builder) => ({
//     likeBlog: builder.mutation({
//       //cagiriken buun kullaniyoruy
//       query: ({ id, token }) => ({
//         url: `blogs/${id}/getLike`,
//         headers: { Authorization: `Token ${token}` },
//         method: "GET",
//       }),
//       invalidatesTags: ["Like"], //bunu yapmazan guncellme almmzdikkat
//       transformResponse: (response) => {
//         toast(`The operation was successful!`);
//         return response;
//       },
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useLikeBlogMutation } = likeApi;

// export const dislikeApi = createApi({
//   reducerPath: "dislikeApi",
//   tagTypes: ["Dislike"], //basta hafixada tutat
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://37106.fullstack.clarusway.com/",
//   }),
//   endpoints: (builder) => ({
//     dislikeBlog: builder.mutation({
//       //cagiriken buun kullaniyoruy
//       query: ({ id, token }) => ({
//         url: `blogs/${id}/postLike`,
//         headers: { Authorization: `Token ${token}` },
//         method: "POST",
//       }),
//       invalidatesTags: ["Dislike"], //bunu yapmazan guncellme almmzdikkat
//       transformResponse: (response) => {
//         toast(`The operation was successful!`);
//         return response;
//       },
//     }),
//   }),
// });

// // Export hooks for usage in functional components, which are
// // auto-generated based on the defined endpoints
// export const { useDislikeBlogMutation } = dislikeApi;
