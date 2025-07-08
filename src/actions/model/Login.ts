import { createSlice } from '@reduxjs/toolkit'

const modalSlice = createSlice({
  name: 'LoginModal',
  initialState: {
    loginVisible: false,
  },
  reducers: {
    showLogin: (state) => {
      state.loginVisible = true
    },
    hideLogin: (state) => {
      state.loginVisible = false
    },
  },
})

export const { showLogin, hideLogin } = modalSlice.actions
export default modalSlice.reducer
