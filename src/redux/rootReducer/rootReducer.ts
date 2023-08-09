import { combineReducers } from '@reduxjs/toolkit'

import { api } from '../api/api'
import authSlice from '../slices/authSlice'

const rootReducer = combineReducers({
  authSlice: authSlice,
  [api.reducerPath]: api.reducer,
})

export default rootReducer
