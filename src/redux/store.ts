import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { blogsApi } from './blogs' 
import { authApi, logApi, logoutApi } from './auth'

export const store = configureStore({
  reducer: {

    [blogsApi.reducerPath]: blogsApi.reducer,
    [logoutApi.reducerPath]: logoutApi.reducer,
    [logApi.reducerPath]: logApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(blogsApi.middleware).concat(authApi.middleware).concat(logApi.middleware).concat(logoutApi.middleware),
})



// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)