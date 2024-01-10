import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// Define a service using a base URL and expected endpoints
export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
    endpoints: (builder) => ({
      register: builder.mutation({ //cagiriken burfdaki isim olacak dikkat et
        query: (data) => ({
          url: 'users', // burdq gidecek yier 
          method: 'POST',
          body: data,
        }),
      }),
    }),
  });

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useRegisterMutation   } = authApi



export const logApi = createApi({
  reducerPath: 'logApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    log: builder.mutation({ //cagiriken burfdaki isim olacak dikkat et
      query: (data) => ({
        url: 'auth/login', // burdq gidecek yier 
        method: 'POST',
        body: data,
      }),
    }),
  }),
 
});


export const { useLogMutation } = logApi




export const logoutApi = createApi({
  reducerPath: 'logoutApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://37106.fullstack.clarusway.com/' }),
  endpoints: (builder) => ({
    logout: builder.mutation({ //cagiriken burfdaki isim olacak dikkat et
      query: (data) => ({
        url: 'auth/logout', // burdq gidecek yier 
        method: 'GET',
        body: data,
      }),
    }),
  }),
 
});


export const { useLogoutMutation} = logoutApi

