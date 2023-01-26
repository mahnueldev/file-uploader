import { configureStore } from "@reduxjs/toolkit";
import filesReducer from './features/file/filesSlice';
export const store = configureStore({
    reducer: {
        files: filesReducer,
      },
})