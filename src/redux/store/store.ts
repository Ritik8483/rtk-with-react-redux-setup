import { configureStore } from '@reduxjs/toolkit'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { api } from '../api/api'
import middleware from '../api/middleware'
import rootReducer from '../rootReducer/rootReducer'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['authSlice'], // reducers which you want to persist
  blacklist: [api.reducerPath], // reducers which you don't want to persist
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  ...middleware,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export default store
