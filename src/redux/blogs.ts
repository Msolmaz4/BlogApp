import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { toast } from "react-toastify";

// Define a service using a base URL and expected endpoints
export const blogsApi = createApi({
  reducerPath: 'blogsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
       
        query: () => "blogs",
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogsQuery } = blogsApi

export const blogApi = createApi({
  reducerPath: 'blogApi',
  tagTypes: ["Blog"],//basta hafixada tutat 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    getAllBlog: builder.mutation({  //cagiriken buun kullaniyoruy 
      query: ({ id, token }) => ({
        url: `blogs/${id}`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
      }),
      invalidatesTags: ["Blog"],//bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
      
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogMutation} = blogApi




export const blApi = createApi({
  reducerPath: 'blApi',
  tagTypes: ["Bl"],//basta hafixada tutat 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    postBlog: builder.mutation({  //cagiriken buun kullaniyoruy 
      query: ({ token,...data }) => ({
        url: `blogs/`,
        headers: { Authorization: `Token ${token}` },
        method: "POST",
        body:data
      }),
      invalidatesTags: ["Bl"],//bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {usePostBlogMutation } = blApi


export const delethApi = createApi({
  reducerPath: 'delethApi',
  tagTypes: ["Delet"],//basta hafixada tutat 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    deletBlog: builder.mutation({  //cagiriken buun kullaniyoruy 
      query: ({ id,token}) => ({
        url: `blogs/${id}`,
        headers: { Authorization: `Token ${token}` },
        method: "DELETE",
       
      }),
      invalidatesTags: ["Delet"],//bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useDeletBlogMutation} = delethApi




export const likeApi = createApi({
  reducerPath: 'likeApi',
  tagTypes: ["Like"],//basta hafixada tutat 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    likeBlog: builder.mutation({  //cagiriken buun kullaniyoruy 
      query: ({ id,token}) => ({
        url: `blogs/${id}/getLike`,
        headers: { Authorization: `Token ${token}` },
        method: "GET",
       
      }),
      invalidatesTags: ["Like"],//bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLikeBlogMutation} = likeApi


export const dislikeApi = createApi({
  reducerPath: 'dislikeApi',
  tagTypes: ["Dislike"],//basta hafixada tutat 
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    dislikeBlog: builder.mutation({  //cagiriken buun kullaniyoruy 
      query: ({ id,token}) => ({
        url: `blogs/${id}/getLike`,
        headers: { Authorization: `Token ${token}` },
        method: "POST",
       
      }),
      invalidatesTags: ["Dislike"],//bunu yapmazan guncellme almmzdikkat
      transformResponse: (response) => {
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useDislikeBlogMutation } = dislikeApi