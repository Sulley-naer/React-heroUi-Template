import { createSlice } from '@reduxjs/toolkit'

const GlobalOptionSlice = createSlice({
  name: 'GlobalOption',
  initialState: {
    language: 'en' as 'en' | 'cn' | 'fr',
  },
  reducers: {
    SetLanguage: (state, action) => {
      state.language = action.payload
      localStorage.setItem('app-language', action.payload)
    },
  },
})

export const { SetLanguage } = GlobalOptionSlice.actions
export default GlobalOptionSlice.reducer
