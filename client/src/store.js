import { configureStore } from "@reduxjs/toolkit";
import profileReducer from './features/auth/profileSlice';
export const store = configureStore({
    reducer: {
        auth: profileReducer,
      },
})