import { configureStore } from "@reduxjs/toolkit"
// import your slices here
import counterReducer from "./slices/counterSlice"
import userReducer from "./slices/userSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

// Types for TS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
