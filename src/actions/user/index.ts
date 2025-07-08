import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const userCounter = createSlice({
  name: 'userCounter',
  initialState: {
    value: null as string | null,
    token: null as string | null,
  },
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setName, setToken } = userCounter.actions

export default userCounter.reducer
