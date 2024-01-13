import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { blogsApi, likeApi, dislikeApi} from './blogs' 
import { authApi, logApi, logoutApi } from './auth'
import {  commentsApi ,commentApi,commApi} from './comments'

export const store = configureStore({
  reducer: {

    [blogsApi.reducerPath]: blogsApi.reducer,
    //[blApi.reducerPath]: blApi.reducer,
    [likeApi.reducerPath]: likeApi.reducer,
    [dislikeApi.reducerPath]: dislikeApi.reducer,

    //[blogApi.reducerPath]: blogApi.reducer,
   
    [commentsApi.reducerPath]: commentsApi.reducer,
    [commentApi.reducerPath]: commentApi.reducer,
    [commApi.reducerPath]: commApi.reducer,
 
    [logoutApi.reducerPath]: logoutApi.reducer,
    [logApi.reducerPath]: logApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(blogsApi.middleware).concat(authApi.middleware).concat(logApi.middleware).concat(logoutApi.middleware).concat(commentsApi.middleware).concat(commentApi.middleware).concat(commApi.middleware).concat(likeApi.middleware).concat(dislikeApi.middleware),
})



// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)