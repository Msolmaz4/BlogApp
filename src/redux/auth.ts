import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
    endpoints: (builder) => ({
      register: builder.mutation({
        query: (data) => ({
          url: 'users', // Gerekirse adresi düzenleyin
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useRegisterMutation   } = authApi