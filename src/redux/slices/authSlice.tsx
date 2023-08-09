import type { Slice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

// import type { Slice } from '@reduxjs/toolkit'

export interface AuthState {
  userToken: string | null
}
const initialState: AuthState = {
  userToken: null,
}

const authSlice: Slice = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    storeLoginToken: (state, { payload }) => {
      state.userToken = payload
    },
  },
})

export const { storeLoginToken } = authSlice.actions
export default authSlice.reducer
