import { createSlice } from '@reduxjs/toolkit'

const RegisterSlice = createSlice({
  name: 'RegisterModal',
  initialState: {
    loginVisible: false,
  },
  reducers: {
    showRegister: (state) => {
      state.loginVisible = true
    },
    hideRegister: (state) => {
      state.loginVisible = false
    },
  },
})

export const { showRegister, hideRegister } = RegisterSlice.actions
export default RegisterSlice.reducer
