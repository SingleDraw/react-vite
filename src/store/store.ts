import { configureStore } from "@reduxjs/toolkit"
// import your slices here
import counterReducer from "./slices/counterSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// Types for TS
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
