import { configureStore } from '@reduxjs/toolkit'
import { signUpScreenReducer } from './screens/auth/SignUpScreenSlice'

export const store = configureStore({
  reducer: {
    signUpScreen: signUpScreenReducer,
  },
})