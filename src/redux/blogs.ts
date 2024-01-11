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
        toast(`The operation was successful!`);
        return response;
      },
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBlogMutation} = blogApi